import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Project from './pages/Project';
import Gallery from './pages/Gallery';
import Legals from './pages/Legals';
import NotFound from './pages/NotFound';

import './assets/styles/index.css';

if (
	window.location.protocol !== 'https:' &&
	window.location.hostname !== 'localhost'
) {
	window.location.href =
		'https://' +
		window.location.host +
		window.location.pathname +
		window.location.search;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/project/:id" element={<Project />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/legals" element={<Legals />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</>
	);
};

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
