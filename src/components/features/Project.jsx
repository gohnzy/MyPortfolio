const Project = ({ id, project }) => {
	return (
		<article className="project" id={id}>
			{project.name}
		</article>
	);
};

export default Project;
