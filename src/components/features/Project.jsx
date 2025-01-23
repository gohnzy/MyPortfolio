import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import '../../assets/styles/components/project.css';

const Project = ({ id, index, project }) => {
	const navigate = useNavigate();

	const projectElement = useRef(null);
	const ul = useRef(null);
	useEffect(() => {
		const ulElement = ul.current;
		const projElement = projectElement.current;

		if (!ulElement) return;

		const handleMouseEnter = () => {
			ulElement.classList.add('move-right');
		};

		const handleMouseLeave = () => {
			ulElement.classList.remove('move-right');
		};

		// Ajout des événements
		projElement.addEventListener('mouseenter', handleMouseEnter);
		projElement.addEventListener('mouseleave', handleMouseLeave);

		// Nettoyage des événements
		return () => {
			projElement.removeEventListener('mouseenter', handleMouseEnter);
			projElement.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, []);
	const toProjectsPage = () => {
		navigate(`project/${index}`);
	};
	return (
		<article
			ref={projectElement}
			onClick={toProjectsPage}
			className="project"
			id={id}
		>
			<div id="bg"></div>
			<h4>{project.name}</h4>
			<div className="img-container">
				{project.main_picture ? (
					<img src={project.main_picture} alt="Projet's screenshot" />
				) : project.illustration ? (
					<img src={project.illustration} alt="Projet's screenshot" />
				) : project.logo ? (
					<img src={project.logo} alt="Projet's screenshot" />
				) : (
					<h5>Pas de visuel pour ce projet</h5>
				)}
			</div>
			<ul ref={ul} className="tag-list" id="languages-list">
				{project.languages.map((lang, index) => (
					<li key={index}>{lang}</li>
				))}
			</ul>
			{/* <h5>Cliques pour plus de détails !</h5> */}
		</article>
	);
};

export default Project;
