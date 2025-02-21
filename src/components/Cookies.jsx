import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import '../assets/styles/components/cookies.css';
const CookiesBanner = () => {
	const [showBanner, setShowBanner] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const [animationEnd, setAnimationEnd] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsLoaded(true);
		}, 1500);
	}, []);
	useEffect(() => {
		setTimeout(() => {
			setAnimationEnd(true);
		}, 3000);
	}, []);
	useEffect(() => {
		if (!Cookies.get('cookie_consent')) {
			setShowBanner(true);
		}
	}, []);

	const acceptCookies = () => {
		Cookies.set('cookie_consent', 'true', { expires: 365 });
		setShowBanner(false);
	};

	const declineCookies = () => {
		Cookies.set('cookie_consent', 'false', { expires: 365 });
		setShowBanner(false);
	};

	if (!showBanner) return null;

	return (
		isLoaded && (
			<div
				id="cookies-banner"
				className={animationEnd ? '' : 'animated-banner'}
			>
				<p>Ce site utilise des cookies non publicitaires</p>
				<div id="buttons-div">
					<button onClick={acceptCookies}>Accepter</button>
					<button onClick={declineCookies}>Refuser</button>
				</div>
			</div>
		)
	);
};

export default CookiesBanner;
