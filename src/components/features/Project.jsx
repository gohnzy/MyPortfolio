import '../../assets/styles/components/project.css';

const Project = ({ id, project }) => {
	return (
		<article className="project" id={id}>
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
		</article>
	);
};

export default Project;
