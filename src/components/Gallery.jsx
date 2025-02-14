import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
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

	useEffect(() => {
		if (isPaused) return;

		const interval = setInterval(() => {
			setActiveProject(prev =>
				prev === projectList.length - 1 ? 0 : prev + 1,
			);
		}, 3000);

		return () => clearInterval(interval);
	}, [isPaused]);

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

			// Obtenir la position de l'élément
			const rect = elementRef.current.getBoundingClientRect();
			const middleOfScreen = window.innerHeight / 2;

			const endOfVisibility = window.innerHeight / 30;
			// Vérifier si le haut de l'élément atteint le milieu de l'écran
			if (rect.top <= middleOfScreen && rect.top >= endOfVisibility) {
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
			<Link to="/gallery">Voir tous les projets</Link>
		</section>
	);
};

export default Gallery;
