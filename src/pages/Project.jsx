import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import projectList from '../data/projectlist';

const ProjectPage = () => {
	const { id } = useParams();
	const project = projectList[id];
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, []);
	return loading ? (
		<div id="loader-container">
			{' '}
			<div className="loader"></div>
		</div>
	) : (
		<div className="Project">
			<Header />
			<main>
				<h1>{project.name}</h1>
			</main>
			<Footer />
		</div>
	);
};

export default ProjectPage;
