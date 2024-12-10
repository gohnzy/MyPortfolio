// import Project from './features/Project';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import '../assets/styles/components/gallery.css';
import Project from './features/Project';

const Gallery = () => {
	const [isHighlighted, setIsHighlighted] = useState(false);
	const elementRef = useRef();
	const [projectsList, setProjectsList] = useState([]);
	const gatherProjects = async () => {
		const API = 'http://localhost:1000/api/projects';
		const headers = {
			'Content-Type': 'application/json',
		};
		try {
			const response = await axios.get(API, { headers });
			console.log(response);

			setProjectsList(response.data.data.rows);
			console.log(projectsList);
		} catch (error) {
			console.error(error);
			return error;
		}
	};
	useEffect(() => {
		const handleScroll = () => {
			if (!elementRef.current) return;

			// Obtenir la position de l'élément
			const rect = elementRef.current.getBoundingClientRect();
			const middleOfScreen = window.innerHeight / 2;

			// Vérifier si le haut de l'élément atteint le milieu de l'écran
			if (rect.top <= middleOfScreen) {
				setIsHighlighted(true);
			} else {
				setIsHighlighted(false);
			}
		};

		// Écouter l'événement de défilement
		window.addEventListener('scroll', handleScroll);

		// Nettoyer l'événement de défilement lorsque le composant est démonté
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<section id="gallery">
			<h3 ref={elementRef} className={isHighlighted ? 'active' : ''}>
				Mes derniers projets :
			</h3>
			{projectsList.length === 0 ? (
				<div id="no-project">
					<h4>
						No projects found in the gallery, try fetching projects from
						database :
					</h4>
					<button onClick={() => gatherProjects()}>Gather Projects</button>
				</div>
			) : (
				<div id="projects-gallery">
					{projectsList.map((project, index) => (
						<Project id={index} name={project} />
					))}
				</div>
			)}
		</section>
	);
};

export default Gallery;
