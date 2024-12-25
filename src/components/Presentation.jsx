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
			<h3 ref={elementRef} className={isHighlighted ? 'active' : ''}>
				Salut c'est moi
			</h3>
			<div id="presentation-core">
				<img src="assets/portrait-fun.png" alt="portrait" />
				<p>
					Hello, moi c'est Greg(ory), 26 ans et toutes mes dents. Après 4 ans
					dans le monde de l'automobile en tant que commercial, j'ai décidé de
					me reconvertir en tant que développeur (gros retournement de veste en
					est-il). C'est un univers qui m'a toujours attiré mais que je n'ai
					réellement découvert que bien trop tard. Enfin, il n'est jamais
					vraiment "trop tard", n'est-ce pas ?! J'ai donc décidé de sauter le
					pas et me voilà, fièrement diplôme de la formation "Développeur
					d'application web" et prêt à en décoder !
				</p>
			</div>
		</section>
	);
};

export default Presentation;
