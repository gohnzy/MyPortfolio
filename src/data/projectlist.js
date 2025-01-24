const projectList = [
	{
		name: 'Oh My Food',
		logo: 'assets/projects_pictures/projects_logos/omflogo.webp',
		languages: ['HTML', 'SCSS'],
		main_picture: 'assets/projects_pictures/omfmpc.webp',
		illustration: 'assets/projects_pictures/projects_illustrations/omfill.webp',
		view_link: 'https://gohnzy.github.io/ohmyfood/index.html',
		catch_words: 'Commande de plat pour les clients de restaurants',
		description:
			"La demande pour ce projet était de coder la maquette du front-end du site en mettant en place les animatios de bases du site et en créant un loader libre. Tout a été fait en HTML 5 et CSS 3 avec l'utilisation de SASS.",
	},
	{
		name: 'GameOn',
		logo: 'assets/projects_pictures/projects_logos/gologo.webp',
		languages: ['JavaScript'],
		main_picture: 'assets/projects_pictures/gompc.webp',
		illustration: 'assets/projects_pictures/projects_illustrations/goill.webp',
		view_link: 'https://go-phi-ten.vercel.app/',
		catch_words: "Entreprise d'organisation de tournois e-sport",
		description:
			"Réalisation d'une landing page avec un formule de contact contrôlé. Fait avec JavaScript.",
	},
	{
		name: 'Les Petits Plats',
		logo: 'assets/projects_pictures/projects_logos/lpplogo.webp',
		languages: ['JavaScript'],
		main_picture: 'assets/projects_pictures/lppmpc.webp',
		illustration: 'assets/projects_pictures/projects_illustrations/lppill.webp',
		view_link: 'https://lpp-seven.vercel.app/',
		catch_words: 'Site bibliothèque de recettes',
		description:
			"Conception et développement d'un algorithme de recherche en JavaScript permettant de filtrer les recettes en saisissant du texte ou cochant des tags.",
	},
	{
		name: 'Fisheye',
		logo: 'assets/projects_pictures/projects_logos/flogo.webp',
		languages: ['JavaScript'],
		main_picture: 'assets/projects_pictures/fempc.webp',
		illustration: 'assets/projects_pictures/projects_illustrations/feill.webp',
		view_link: 'https://front-end-fisheye-ten.vercel.app/',
		catch_words: 'Répertoire de portfolios de photographes',
		description:
			'Développement complet du site avec un liste de photographe. Chaque photographe a sa page dédiée avec un carousel de ses photos et la possibilité de trier et liker ses photos.',
	},
	{
		name: 'Billed',
		logo: 'assets/projects_pictures/projects_logos/blogo.webp',
		languages: ['JavaScript', 'Jest', 'NodeJS'],
		main_picture: 'assets/projects_pictures/bmpc.webp',
		view_link: null,
		catch_words: 'Application interne de gestion de notes de frais',
		description:
			"Test et debug de l'application côté employé et administration. Tests unitaires et end-to-end avec Jest ; app en JavaScript ; API NodeJS.",
	},
	{
		name: 'Kasa',
		logo: 'assets/projects_pictures/projects_logos/klogo.webp',
		languages: ['ReactJS'],
		main_picture: 'assets/projects_pictures/kmpc.webp',
		illustration: 'assets/projects_illustrations/kill.webp',
		view_link: 'https://lpp-seven.vercel.app/',
		catch_words: 'Site de location de logement',
		description:
			"Création d'une site de recherche de location en single page application. ReactJS utilisé pour ce projet.",
	},
	{
		name: 'ArgentBank',
		logo: 'assets/projects_pictures/projects_logos/ablogo.webp',
		languages: ['ReactJS', 'NodeJS', 'Redux'],
		main_picture: 'assets/projects_pictures/abmpc.webp',
		illustration: 'assets/projects_pictures/projects_illustrations/abill.webp',
		view_link: null,
		catch_words: "Simulation d'une banque en ligne",
		description:
			"Développement d'un système d'authentification sécurisé pour un projet de banque en ligne. Accès aux données du client connecté avec une gestion de state Redux et une API NodeJS ; le tout avec ReactJS.",
	},
	{
		name: 'SportSee',
		logo: 'assets/projects_pictures/projects_logos/sslogo.webp',
		languages: ['ReactJS', 'Recharts', 'NodeJS'],
		main_picture: 'assets/projects_pictures/ssmpc.webp',
		view_link: null,
		catch_words: "Application de suivi d'activités sportives",
		description:
			"Développement du dashboard de l'application avec un affichage des statistiques de l'utilisateur sous forme de graph Recharts. API NodeJS et ReactJS pour le front.",
	},
	{
		name: 'WealthHealth',
		logo: 'assets/projects_pictures/projects_logos/whlogo.webp',
		languages: ['ReactJS', 'NodeJS', 'JQuery'],
		main_picture: null,
		view_link: 'https://wealth-health-mu.vercel.app/',
		catch_words: "Application interne de recensement d'employés",
		description:
			"Migration de l'app de JQuery vers une SPA ReactJS. Formulaire d'entré d'employés dans une base de données PostgreSQL et page de visualisation des employés. Développement de plugins ReatJS NPM pour remplacer les plugins JQuery.",
	},
];

export default projectList;
