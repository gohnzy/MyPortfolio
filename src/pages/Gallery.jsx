import { useEffect, useState } from 'react';
import projectList from '../data/projectlist';
import Project from '../components/features/Project';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/pages/gallery.css';
const Gallery = () => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, []);
	return loading ? (
		<div id="loader-container">
			{' '}
			<div className="loader"></div>
		</div>
	) : (
		<div id="Gallery">
			<Header />

			<div id="project-list">
				<div id="title-bg">
					<h3>Tous mes projets :</h3>
				</div>

				{projectList.map((project, index) => (
					<Project
						key={index}
						index={index}
						id={project.name}
						project={project}
					/>
				))}
			</div>
			<Footer />
		</div>
	);
};

export default Gallery;
