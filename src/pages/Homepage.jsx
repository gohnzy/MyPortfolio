import { Element } from 'react-scroll';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Presentation from '../components/Presentation';
import Skills from '../components/Skills';
import Gallery from '../components/Gallery';
import '../assets/styles/pages/homepage.css';
function App() {
	return (
		<div className="App">
			<Element name="page-top">
				<Header />
			</Element>
			<main>
				<Element name="presentation">
					<Presentation />
				</Element>
				<Element name="skills">
					<Skills />
				</Element>
				<Element name="gallery">
					<Gallery />
				</Element>
			</main>
			<Footer />
		</div>
	);
}

export default App;
