import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Project from './pages/Project';
import Gallery from './pages/Gallery';

import './assets/styles/index.css';

if (window.location.protocol !== 'https:') {
	window.location.href =
		'https://' +
		window.location.host +
		window.location.pathname +
		window.location.search;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/project/:id" element={<Project />} />
				<Route path="/gallery" element={<Gallery />} />
			</Routes>
		</Router>
	</React.StrictMode>,
);
