import { useEffect, useRef, useState } from 'react';
import projectList from '../data/projectlist';
import '../assets/styles/components/gallery.css';
import Project from './features/Project';

const Gallery = () => {
	const [isHighlighted, setIsHighlighted] = useState(false);
	const [activeProject, setActiveProject] = useState(0);
	const elementRef = useRef();

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
		}, 2000);
	};

	const slideAnimation = () => {};

	useEffect(() => {
		const handleScroll = () => {
			if (!elementRef.current) return;

			// Obtenir la position de l'élément
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
					onClick={e => changeProject(e.target.id)}
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
					onClick={e => changeProject(e.target.id)}
				></i>
			</div>
		</section>
	);
};

export default Gallery;
