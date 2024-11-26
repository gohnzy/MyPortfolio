import { useEffect, useRef, useState } from 'react';
import SkillScore from './features/SkillScore';
import '../assets/styles/components/skills.css';

const Skills = () => {
	const [isHighlighted, setIsHighlighted] = useState(false);
	const elementRef = useRef();
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
		<section id="skills">
			<h3 ref={elementRef} className={isHighlighted ? 'active' : ''}>
				Mes "Skills"
				<div id="whiteDiv"></div>
			</h3>
			<div id="commercial" className="category">
				<h4>Commerce</h4>
				<div id="relational" className="skillblock">
					<ul>
						<li>Relation client</li>
						<li>Compréhension et satisfaction des besoins client</li>
						<li>Achat, vente et négociation</li>
						<li>Communication digitale</li>
					</ul>
				</div>
			</div>
			<div id="code" className="category">
				<h4>Developpement</h4>
				<div id="frontend" className="skillblock">
					<div id="js" className="element">
						<h6>JavaScript</h6>
						<SkillScore level={85} position={1} />
					</div>
					<div id="react" className="element">
						<h6>React.JS</h6>
						<SkillScore level={80} position={2} />
					</div>
					<div id="ts" className="element">
						<h6>TypeScript</h6>
						<SkillScore level={60} position={3} />
					</div>
					<div id="jquery" className="element">
						<h6>JQuery</h6>
						<SkillScore level={60} position={1} />
					</div>
					<div id="redux" className="element">
						<h6>Redux / Toolkit</h6>
						<SkillScore level={75} position={2} />
					</div>
					<div id="html" className="element">
						<h6>HTML 5</h6>
						<SkillScore level={98} position={3} />
					</div>
					<div id="css" className="element">
						<h6>CSS 3</h6>
						<SkillScore level={91} position={1} />
					</div>
					<div id="sass" className="element">
						<h6>SASS</h6>
						<SkillScore level={100} position={2} />
					</div>
					<div id="bootstrap" className="element">
						<h6>Bootstrap</h6>
						<SkillScore level={75} position={3} />
					</div>
				</div>
				<div id="backend" className="skillblock">
					<div id="node" className="element">
						<h6>NodeJS / NPM</h6>
						<SkillScore level={70} position={4} />
					</div>
					<div id="api" className="element">
						<h6>API Rest</h6>
						<SkillScore level={70} position={4} />
					</div>
					<div id="sql" className="element">
						<h6>SQL / Mongo</h6>
						<SkillScore level={70} position={4} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
