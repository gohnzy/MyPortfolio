import { useNavigate } from 'react-router-dom';
import '../../assets/styles/components/project.css';

const Project = ({ id, index, project }) => {
	const navigate = useNavigate();
	const toProjectsPage = () => {
		navigate(`project/${index}`);
	};
	return (
		<article onClick={toProjectsPage} className="project" id={id}>
			<div id="bg"></div>
			<h4>{project.name}</h4>
			<div className="img-container">
				<img src={project.main_picture} alt="Projet's screenshot" />
			</div>
			<ul className="tag-list" id="languages-list">
				{project.languages.map((lang, index) => (
					<li key={index}>{lang}</li>
				))}
			</ul>
			<h5>Cliques pour plus de détails !</h5>
		</article>
	);
};

export default Project;
