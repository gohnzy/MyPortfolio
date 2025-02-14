import { Element } from 'react-scroll';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Presentation from '../components/Presentation';
import Skills from '../components/Skills';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import '../assets/styles/components/loader.css';
import '../assets/styles/pages/homepage.css';
import { useEffect, useState } from 'react';
function Homepage() {
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
		<div className="homepage">
			<Element name="page-top">
				<Header />
			</Element>
			<main>
				<Element name="presentation">
					<Presentation />
				</Element>
				<Element name="projects">
					<Gallery />
				</Element>
				<Element name="skills">
					<Skills />
				</Element>

				<Element name="contact">
					<Contact />
				</Element>
			</main>
			<Footer />
		</div>
	);
}

export default Homepage;
