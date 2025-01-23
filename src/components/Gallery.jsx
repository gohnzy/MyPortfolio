import { useEffect, useRef, useState } from 'react';
import projectList from '../data/projectlist';
import '../assets/styles/components/gallery.css';
import Project from './features/Project';

const Gallery = () => {
	const [isHighlighted, setIsHighlighted] = useState(false);
	const [activeProject, setActiveProject] = useState(0);
	const [isPaused, setIsPaused] = useState(false); // État pour gérer la pause
	const elementRef = useRef();
	const pauseTimeoutRef = useRef(null); // Pour nettoyer le timeout si nécessaire

	const changeProject = id => {
		setTimeout(() => {
			if (activeProject === 0 && id === 'left') {
				setActiveProject(projectList.length - 1);
			} else if (activeProject === projectList.length - 1 && id === 'right') {
				setActiveProject(0);
			} else if (id === 'left') {
				setActiveProject(prev => Math.max(0, prev - 1));
			} else if (id === 'right') {
				setActiveProject(prev => prev + 1);
			}
		}, 500);
	};

	// Gestion de l'auto-défilement
	// useEffect(() => {
	// 	if (isPaused) return;

	// 	const interval = setInterval(() => {
	// 		setActiveProject(prev =>
	// 			prev === projectList.length - 1 ? 0 : prev + 1,
	// 		);
	// 	}, 3000);

	// 	return () => clearInterval(interval);
	// }, [isPaused]);

	// Pause automatique pendant 5 secondes
	const handlePause = () => {
		setIsPaused(true);

		// Annuler tout timeout en cours avant d'en définir un nouveau
		if (pauseTimeoutRef.current) {
			clearTimeout(pauseTimeoutRef.current);
		}

		pauseTimeoutRef.current = setTimeout(() => {
			setIsPaused(false);
		}, 5000);
	};

	// Gestion du clic manuel pour mettre en pause
	const handleManualChange = id => {
		handlePause(); // Pause automatique de 5 secondes
		changeProject(id);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (!elementRef.current) return;

			const rect = elementRef.current.getBoundingClientRect();
			const middleOfScreen = window.innerHeight / 2;

			if (rect.top <= middleOfScreen) {
				setIsHighlighted(true);
			} else {
				setIsHighlighted(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<section id="gallery">
			<h3 ref={elementRef} className={isHighlighted ? 'active' : ''}>
				Mes derniers projets :
			</h3>
			<div id="projects-gallery">
				<i
					className="fa-solid fa-chevron-left"
					id="left"
					onClick={e => handleManualChange(e.target.id)}
				></i>
				<Project
					key={activeProject}
					index={activeProject}
					id={projectList[activeProject].name}
					project={projectList[activeProject]}
				></Project>
				<i
					className="fa-solid fa-chevron-right"
					id="right"
					onClick={e => handleManualChange(e.target.id)}
				></i>
			</div>
		</section>
	);
};

export default Gallery;
