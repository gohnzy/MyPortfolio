import Cookies from 'js-cookie';

const ShowCookies = () => {
	const showCookies = () => {
		alert(JSON.stringify(Cookies.get(), null, 2));
	};

	return <button onClick={showCookies}>Voir les cookies</button>;
};

export default ShowCookies;
