import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import projectList from './data/projectlist';
import Homepage from './pages/Homepage';
import Project from './pages/Project';

import './assets/styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/project/:id" element={<Project />} />
			</Routes>
		</Router>
	</React.StrictMode>,
);
