import { Link } from 'react-scroll';
import '../assets/styles/components/footer.css';

const Footer = () => {
	return (
		<footer>
			<Link to="page-top">
				<img src="../assets/ico.png" alt="icon" />
			</Link>
			<p>
				GohnZy's Website - All right reserved - 2024 <br />
				Homemade - Hosted by Heroku
			</p>
		</footer>
	);
};

export default Footer;
