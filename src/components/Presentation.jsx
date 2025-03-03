/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import '../assets/styles/components/presentation.css';

const Presentation = () => {
	const [isHighlighted, setIsHighlighted] = useState(false);
	const elementRef = useRef();
	useEffect(() => {
		const handleScroll = () => {
			if (!elementRef.current) return;

			// Obtenir la position de l'élément
			const rect = elementRef.current.getBoundingClientRect();
			const middleOfScreen = window.innerHeight / 2;

			// const endOfVisibility = window.innerHeight / 10;
			// console.log(middleOfScreen, endOfVisibility);

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
		<section id="presentation">
			{/* <h3 ref={elementRef} className={isHighlighted ? 'active' : ''}>
				Bonjour !<div id="testo"></div>
			</h3> */}

			<div id="presentation-core">
				<img src="assets/ico.png" alt="portrait" />
				<div id="pres-text">
					<h4>
						Grégory <strong>"GohnZy"</strong> Nuzzo Adès
					</h4>
					<p>
						Développeur d'application Web <br /> Spécialisé ReactJS / NodeJS
					</p>
				</div>
			</div>
		</section>
	);
};

export default Presentation;
