import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/pages/legals.css';
const Legals = () => {
	return (
		<div id="legals">
			<Header />
			<div id="legals-core">
				<h3>Mentions légales et politique de confidentialité</h3>
				<div id="legals-chapters">
					<h4>1. Éditeur du site</h4>
					<p>
						Grégory NUZZO ADÈS <br />
						contact.gohnzy@gmail.com
					</p>
					<h4>2. Hébergement</h4>
					<p>
						Salesforce Tower, <br /> 415 Mission Street, 3rd Floor, San
						Francisco, CA 94105, États-Unis <br /> Site Web :
						https://www.heroku.com/ <br /> Heroku est un service d’hébergement
						basé sur le cloud, appartenant à Salesforce, et dont les serveurs
						sont situés aux États-Unis et en Europe.
					</p>
					<h4>3. Collecte et traitement des données personnelles</h4>
					<p>
						Lorsque vous utilisez le formulaire de contact sur ce site,
						certaines données personnelles peuvent être collectées, notamment :{' '}
						<br />
						Nom <br /> Prénom <br /> Adresse <br /> e-mail <br /> Nom de
						l’entreprise (si renseigné) <br /> Message <br /> Ces informations
						sont collectées uniquement dans le but de répondre à votre demande.
						Elles ne sont ni conservées au-delà du traitement de votre message,
						ni transmises à des tiers, sauf obligation légale.
					</p>
					<h4>4. Base légale du traitement</h4>
					<p>
						Le traitement des données personnelles repose sur l’intérêt légitime
						du responsable du site à répondre aux demandes des utilisateurs.
					</p>
					<h4>5. Durée de conservation des données</h4>
					<p>
						Les données envoyées via le formulaire de contact ne sont pas
						stockées après le traitement de votre demande. Elles sont supprimées
						immédiatement après la réponse apportée.
					</p>
					<h4>6. Droits des utilisateurs</h4>
					<p>
						Conformément au Règlement Général sur la Protection des Données
						(RGPD), vous disposez des droits suivants sur vos données : Droit
						d’accès : Vous pouvez demander à savoir quelles données vous
						concernant sont traitées. Droit de rectification : Vous pouvez
						demander la correction d’informations erronées. Droit d’opposition
						et de suppression : Vos données sont automatiquement supprimées
						après traitement de votre demande. Toutefois, si vous souhaitez une
						suppression immédiate, vous pouvez en faire la demande à l’adresse
						suivante : contact.gohnzy@gmail.com.
					</p>
					<h4>7. Sécurité des données</h4>
					<p>
						Toutes les mesures nécessaires sont mises en place pour protéger les
						données transmises via le formulaire contre tout accès non autorisé,
						altération ou divulgation.
					</p>
					<h4>8. Cookies</h4>
					<p>
						Ce site n'utilise pour le moment aucun cookie. Si cela venait à
						changer, les mentions légales associées le seront aussi.
					</p>
					<h4>9. Contact</h4>
					<p>
						Pour toute question relative à la protection des données
						personnelles, vous pouvez contacter : <br /> Grégory NUZZO ADÈS{' '}
						<br />
						contact.gohnzy@gmail.com
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Legals;
