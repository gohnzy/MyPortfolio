import Cookies from 'js-cookie';

export function isConsentGiven() {
	return Cookies.get('cookie_consent') === 'true';
}

export function trackUser() {
	if (isConsentGiven()) {
		Cookies.set('tracking_cookie', 'enabled', { expires: 365 });
		console.log('Tracking activé');
	} else {
		Cookies.remove('tracking_cookie');
		console.log('Tracking désactivé');
	}
}
