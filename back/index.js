const Serveur = require('./Routes/DBConnectionRoute');
const express = require('express');
const cors = require('cors');
const Projects = require('./Routes/MainRoutes');

const app = express();
const PORT = process.env.PORT || 1000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', Serveur);
app.use('/api/projects', Projects);

app.listen(PORT, () => {
	console.log('Serveur running on port 1000');
});
