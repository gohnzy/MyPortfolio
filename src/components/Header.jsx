import { Link } from 'react-scroll';
import { Link as Navigate } from 'react-router-dom';
import { Link as Nav, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import '../assets/styles/components/header.css';
const Header = () => {
	const page = useLocation();

	return (
		<header>
			<Nav id="title" to="/">
				<h1>GohnZy</h1>
				<p>web app developper</p>
			</Nav>

			<nav>
				<h2>MENU</h2>
				<div id="arrow-animation" />

				{page.pathname === '/' ? (
					<div id="menu" className="hidden">
						<Link to="projects" smooth={true} id="toGalleryLink">
							Projects
						</Link>
						<Link to="skills" smooth={true} id="toSkillsLink">
							Skills
						</Link>
						<Link to="contact" smooth={true} id="toContactLink">
							Contact
						</Link>
					</div>
				) : (
					<div id="menu" className="hidden">
						<Navigate to="/">Accueil</Navigate>
					</div>
				)}
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
