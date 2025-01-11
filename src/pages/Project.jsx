import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import projectList from '../data/projectlist';
import '../assets/styles/pages/project.css';

const ProjectPage = () => {
	const { id } = useParams();
	const project = projectList[id];
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, []);
	return loading || !project ? (
		<div id="loader-container">
			{' '}
			<div className="loader"></div>
		</div>
	) : (
		<div className="Project">
			<Header />
			<main>
				<section id="project-header">
					<h1>{project.logo ? project.logo : project.name}</h1>
					<img src={`../${project.main_picture}`} alt="Project main pic'" />
					<p>{project.description}</p>
				</section>
				<h2 id="temp">
					JE SUIS ACTUELLEMENT EN TRAIN DE DEVELOPPER LES PAGES DES PROJETS
					<br />
					POUR VOUS FAIRE UN TRUC DE FOU ! CETTE PAGE N'EST PAS VOUÉE A RESTER
					COMME ÇA !
				</h2>
				<section id="project-core"></section>
			</main>
			<Footer />
		</div>
	);
};

export default ProjectPage;
