import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
	service_ID,
	template_owner,
	template_user,
	public_key,
} from '../utils/emailjs_var';
import '../assets/styles/components/contact.css';

const Contact = () => {
	const form = useRef(null);
	const [incorrectField, setIncorrectField] = useState([]);
	const [isHighlighted, setIsHighlighted] = useState(false);
	const [formSubmission, setFormSubmission] = useState('idle');
	const [formData, setFormData] = useState({
		name: '',
		firstname: '',
		company: '',
		email: '',
		message: '',
	});
	const elementRef = useRef();
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	const updateFormData = e => {
		if ((e.target.name === 'email') & !emailRegex.test(e.target.value)) {
			console.log('Email au mauvais format');
		} else {
			setFormData({ ...formData, [e.target.name]: e.target.value });
		}
	};
	const formControl = event => {
		event.preventDefault();
		let errors = [];

		Object.keys(formData).forEach(key => {
			if (formData[key].trim() === '') {
				if (key !== 'company') {
					errors.push(key);
				}
			}
		});
		setIncorrectField(errors);

		if (errors.length > 0) {
		} else {
			setFormSubmission('loading');
			const sendToUser = emailjs.send(
				service_ID,
				template_user,
				formData,
				public_key,
			);
			const sendToOwner = emailjs.send(
				service_ID,
				template_owner,
				formData,
				public_key,
			);
			Promise.all([sendToUser, sendToOwner])
				.then(() => {
					setFormData({
						name: '',
						firstname: '',
						company: '',
						email: '',
						message: '',
					});
					setFormSubmission('submitted');
				})
				.catch(error => {
					console.log(error);
				});
		}
	};
	useEffect(() => {
		const handleScroll = () => {
			if (!elementRef.current) return;

			// Obtenir la position de l'élément
			const rect = elementRef.current.getBoundingClientRect();
			const middleOfScreen = window.innerHeight / 2;

			const endOfVisibility = window.innerHeight / 30;
			// Vérifier si le haut de l'élément atteint le milieu de l'écran
			if (rect.top <= middleOfScreen && rect.top >= endOfVisibility) {
				setIsHighlighted(true);
			} else {
				setIsHighlighted(false);
			}
		};

		// Écouter l'événement de défilement
		window.addEventListener('scroll', handleScroll);

		// Nettoyer l'événement de défilement lorsque le composant est démonté
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<section id="contact">
			<h3 ref={elementRef} className={isHighlighted ? 'active' : ''}>
				Contacte-moi !
			</h3>
			{formSubmission === 'idle' || formSubmission === 'loading' ? (
				<form
					ref={form}
					id="contact-form"
					action="submit"
					onSubmit={formControl}
				>
					<div className="input-group" id="form-email">
						{incorrectField.includes('firstname') ? (
							<label htmlFor="firstname">
								E-Mail *{' '}
								<strong>Merci de renseigner une adresse mail valide</strong>
							</label>
						) : (
							<label htmlFor="firstname">E-Mail *</label>
						)}
						<input
							type="text"
							name="email"
							placeholder="E-Mail *"
							onChange={updateFormData}
							className={
								incorrectField.includes('email') ? 'incorrect-field' : ''
							}
						/>
					</div>
					<div className="input-group" id="form-company">
						<label htmlFor="company">Entreprise</label>
						<input
							type="text"
							name="company"
							placeholder="Company"
							onChange={updateFormData}
						/>
					</div>
					<div className="input-group" id="form-name">
						{incorrectField.includes('firstname') ? (
							<label htmlFor="firstname">
								Nom * <strong>Merci de renseigner votre nom</strong>
							</label>
						) : (
							<label htmlFor="firstname">Nom *</label>
						)}
						<input
							type="text"
							name="name"
							placeholder="Name *"
							onChange={updateFormData}
							className={
								incorrectField.includes('name') ? 'incorrect-field' : ''
							}
						/>
					</div>
					<div className="input-group" id="form-firstname">
						{incorrectField.includes('firstname') ? (
							<label htmlFor="firstname">
								Prénom * <strong>Merci de renseigner votre prénom</strong>
							</label>
						) : (
							<label htmlFor="firstname">Prénom *</label>
						)}

						<input
							type="text"
							name="firstname"
							placeholder="Firstname *"
							onChange={updateFormData}
							className={
								incorrectField.includes('firstname') ? 'incorrect-field' : ''
							}
						/>
					</div>
					<div className="input-group" id="form-message">
						{incorrectField.includes('firstname') ? (
							<label htmlFor="firstname">
								Prénom *{' '}
								<strong>Merci de m'écrire un petit mot &#128512;</strong>
							</label>
						) : (
							<label htmlFor="firstname">Prénom *</label>
						)}
						<textarea
							type="text-area"
							name="message"
							placeholder="Message *"
							onChange={updateFormData}
							className={
								incorrectField.includes('message') ? 'incorrect-field' : ''
							}
						/>
					</div>
					{formSubmission === 'loading' ? (
						<div id="submitting-form"></div>
					) : (
						<input type="submit" placeholder="Envoyer" id="form-submit" />
					)}
				</form>
			) : (
				<div id="form-submitted">
					J'ai bien reçu votre message, merci ! <br />
					Je vous répondrai dans les meilleurs délais.
				</div>
			)}
		</section>
	);
};

export default Contact;
