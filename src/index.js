import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Maintenance from './pages/Maintenance';

import './assets/styles/index.css';
import axios from 'axios';

const Middleware = () => {
	const [maintenanceState, setMaintenanceState] = useState(null);

	useEffect(() => {
		const checkStatus = async () => {
			try {
				const response = await axios.get('/api');
				if (response.status !== 503) {
					setMaintenanceState(false);
				}
			} catch (error) {
				if (error.response && error.response.status === 503) {
					setMaintenanceState(true);
				} else {
					console.error(
						'Error occured while checking for maintenance state',
						error,
					);
					setMaintenanceState(false);
				}
			}
		};
		checkStatus();
	}, []);
	if (maintenanceState === null) {
		// Si l'état de maintenance est encore en cours de vérification, on peut afficher un loader ou rien
		return <div>Loading...</div>;
	}
	return maintenanceState ? <Maintenance /> : <Homepage />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Middleware />} />
				<Route path="/maintenance" element={<Maintenance />} />
			</Routes>
		</Router>
	</React.StrictMode>,
);
