import { Link } from 'react-scroll';
import { Link as Nav } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import '../assets/styles/components/header.css';
const Header = () => {
	return (
		<header>
			<Nav id="title" to="/">
				<h1>Gohnzy</h1>
				<p>web app developper</p>
			</Nav>

			<nav>
				<h2>MENU</h2>
				<div id="arrow-animation" />
				<div id="menu" className="hidden">
					<Link to="presentation" smooth={true} id="toPresentationLink">
						Presentation
					</Link>
					<Link to="skills" smooth={true} id="toSkillsLink">
						Skills
					</Link>
					<Link to="gallery" smooth={true} id="toGalleryLink">
						Gallery
					</Link>
				</div>
			</nav>
			<div id="links">
				<a
					href="https://github.com/gohnzy"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a
					href="https://www.linkedin.com/in/gr%C3%A9gory-nuzzo-ad%C3%A8s-b25ba327b/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
			</div>
		</header>
	);
};

export default Header;
