import {
	RadialBarChart,
	RadialBar,
	ResponsiveContainer,
	PolarAngleAxis,
} from 'recharts';
import React, { useState, useEffect, useRef } from 'react';

const SkillScore = ({ level = 0, position = 0 }) => {
	const [data, setData] = useState([{ percent: 0 }]);
	const [displayedLevel, setDisplayedLevel] = useState(0);
	const [isVisible, setIsVisible] = useState(false); // État pour vérifier la visibilité
	const elementRef = useRef(null);

	// Observer de visibilité
	useEffect(() => {
		const observerCallback = entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			});
		};

		const observerOptions = {
			threshold: 0.2, // Se déclenche quand 30% du composant est visible
		};

		const observer = new IntersectionObserver(
			observerCallback,
			observerOptions,
		);
		if (elementRef.current) observer.observe(elementRef.current);

		// Nettoyage
		return () => {
			if (elementRef.current) observer.unobserve(elementRef.current);
		};
	}, []);

	// Animation des scores lorsque `isVisible` devient true
	useEffect(() => {
		if (!isVisible) return; // Attendre la visibilité

		// Définir le délai en fonction de la position de l'élément
		const delay = position * 200;

		const timeoutId = setTimeout(() => {
			setData([{ percent: level }]); // Déclenche l'animation de Recharts

			// Animation du texte affiché (niveau)
			let startTimestamp = null;
			const duration = 400;
			const easeOutQuad = t => t * (2 - t);

			const animate = timestamp => {
				if (!startTimestamp) startTimestamp = timestamp;
				const progress = Math.min((timestamp - startTimestamp) / duration, 1);

				const easedProgress = easeOutQuad(progress);
				const currentLevel = Math.floor(easedProgress * level);

				setDisplayedLevel(currentLevel);

				if (progress < 1) {
					requestAnimationFrame(animate);
				}
			};

			requestAnimationFrame(animate);
		}, delay);

		// Nettoyer le timeout si le composant est démonté
		return () => clearTimeout(timeoutId);
	}, [isVisible, level, position]);

	return (
		<div className="graph" ref={elementRef}>
			<div
				className="label"
				style={{
					position: 'absolute',
					top: '55%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					color: '#a94676',
					fontSize: '12px',
				}}
			>
				{displayedLevel}%
			</div>
			<ResponsiveContainer className="graphcontainer">
				<RadialBarChart
					cx="50%"
					cy="50%"
					innerRadius="90%"
					outerRadius="50%"
					barSize={8}
					data={data}
					startAngle={180}
					endAngle={0}
					className="graphdesign"
				>
					<PolarAngleAxis
						type="number"
						domain={[0, 100]}
						angleAxisId={0}
						tick={false}
					/>
					<RadialBar
						background
						dataKey="percent"
						animationDuration={400}
						cornerRadius={2}
						fill="#a94676"
					/>
				</RadialBarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default SkillScore;
