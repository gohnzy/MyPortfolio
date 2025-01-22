import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import projectList from '../data/projectlist';
import '../assets/styles/pages/project.css';

const ProjectPage = () => {
	const { id } = useParams();
	const project = projectList[id];
	const [loading, setLoading] = useState(true);
	const [viewerLoading, setViewerLoading] = useState(false);
	const [displayViewer, setDisplayViewer] = useState(false);
	const iframeRef = useRef(null);
	const viewerButton = () => {
		if (displayViewer) {
			if (iframeRef.current) {
				setViewerLoading(true);
				setTimeout(() => {
					setViewerLoading(false);
				}, 1500);
				// eslint-disable-next-line no-self-assign
				iframeRef.current.src = iframeRef.current.src;
			}
		} else {
			setViewerLoading(true);
			setTimeout(() => {
				setViewerLoading(false);
			}, 1500);
			setDisplayViewer(true);
		}
	};
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
				<section
					id="project-header"
					style={
						project.illustration
							? {
									backgroundImage: `url("../${project.illustration}")`,
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'cover',
									backgroundPosition: '0 50%',
							  }
							: { backgroundColor: '#71020c' }
					}
				>
					{project.logo ? (
						<div id="pres">
							{' '}
							<img src={`../${project.logo}`} alt="Project main pic'" />
							<ul>
								{project.languages.map((lang, index) => (
									<li key={index}># {lang}</li>
								))}
							</ul>
						</div>
					) : (
						<div>
							{' '}
							<h1>{project.name}</h1>
						</div>
					)}
					<div id="desc">
						<h3>{project.catch_words}</h3>
						<p>{project.description}</p>
					</div>
				</section>
				<section id="project-core">
					{project.view_link ? (
						<div>
							<div id="project-core-header">
								<div>
									<h3>Live viewer :</h3>
									<p>
										Utilises le web viewer ci-dessous pour tester l'application
										! <br />
										(L'application est hebergée sur un service tiers et peut ne
										pas être parfaitement fonctionnelle)
									</p>{' '}
								</div>
								{displayViewer && (
									<button id="viewer-loader" onClick={viewerButton}>
										<i
											class="fa-solid fa-rotate-right"
											style={{ color: '#b2bcff' }}
										></i>
									</button>
								)}
							</div>

							{displayViewer ? (
								<div id="viewer-parent">
									{viewerLoading ? (
										<div id="loader-container">
											{' '}
											<div className="loader"></div>
										</div>
									) : (
										<iframe
											ref={iframeRef}
											id="project-viewer"
											src={project.view_link}
											title="Aperçu du projet"
											style={{
												width: '100%',
												height: '800px',
												border: 'none',
											}}
										></iframe>
									)}
								</div>
							) : (
								<div
									style={{
										width: '100%',
										height: '400px',
										border: '3px solid #71020c',
										borderRadius: '25px',
										padding: '20px',
										boxSizing: 'border-box',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'start',
									}}
								>
									<button onClick={viewerButton}>
										Charger l'aperçu du site
									</button>
								</div>
							)}
						</div>
					) : (
						<div id="no-viewer">
							Ce projet n'a pas encore de web viewer disponible, son upload est
							en cours.
						</div>
					)}
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default ProjectPage;
