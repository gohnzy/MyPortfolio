import { Element } from 'react-scroll';
import Header from '../components/Header';
import Presentation from '../components/Presentation';
import Skills from '../components/Skills';
import Gallery from '../components/Gallery';
import '../assets/styles/pages/homepage.css';
function App() {
	return (
		<div className="App">
			<Header />
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
		</div>
	);
}

export default App;
