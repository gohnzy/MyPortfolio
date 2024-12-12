import { useEffect, useRef, useState } from 'react';
import projectList from '../data/projectlist';
import '../assets/styles/components/gallery.css';
import Project from './features/Project';

const Gallery = () => {
	const [isHighlighted, setIsHighlighted] = useState(false);
	const elementRef = useRef();

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
				{projectList.map((project, index) => (
					<Project key={index} id={index} project={project} />
				))}
			</div>
		</section>
	);
};

export default Gallery;
