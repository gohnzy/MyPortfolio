import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/pages/notFound.css';
const NotFound = () => {
	return (
		<div id="not-found">
			<Header />
			<div id="not-found-core">
				<h1>Page introuvable 😢</h1>
				<p>
					Et oui, ça arrive... <br />
					Peut-être qu'un jour cette page existera, <br />
					ou alors c'est juste un bug...
				</p>
			</div>
			<Footer />
		</div>
	);
};

export default NotFound;
