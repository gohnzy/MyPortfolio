const { Pool } = require('pg');

// Configurer le pool en fonction de l'environnement
const pool = new Pool({
	connectionString:
		process.env.DATABASE_URL ||
		'postgresql://gohnzy:gohnzy1234@localhost:2000/GohnZyPortfolio',
	ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
});

// Fonction pour exécuter des requêtes
const query = (text, params) => pool.query(text, params);

module.exports = { query };
