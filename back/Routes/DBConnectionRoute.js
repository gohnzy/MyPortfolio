const express = require('express');
const router = express.Router();
const database = require('../Database/connection');

router.get('/', async (req, res) => {
	try {
		const server_ip = await database.query(
			'SELECT inet_server_addr();  -- Adresse IP du serveur',
		);
		// const server_name = await database.query("SELECT current_setting('host')");
		const users = await database.query(
			'SELECT current_user;  -- Utilisateur actuellement connecté',
		);
		const port = await database.query(
			'SELECT inet_server_port();  -- Port utilisé par le serveur',
		);
		const database_data = await database.query(
			'SELECT datname, encoding, datcollate, datctype, datistemplate FROM pg_database',
		);
		const tables_data = await database.query(
			"SELECT * FROM pg_tables WHERE schemaname = 'projects'",
		);
		res.status(200).json({
			serveur: server_ip.rows[0].inet_server_addr,
			users,
			port,
			db: database_data,
			tables: tables_data,
		});
	} catch (error) {
		console.log(error);
		res.status(500).send('Error db serveur connect');
	}
});

module.exports = router;
