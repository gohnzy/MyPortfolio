const Serveur = require('./Routes/DBConnectionRoute');
const express = require('express');
const path = require('path');
const cors = require('cors');
const Projects = require('./Routes/MainRoutes');

const app = express();
const PORT = process.env.PORT || 1000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', Serveur);
app.use('/api/projects', Projects);

app.use(express.static(path.join(__dirname, '../build')));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
	console.log('Serveur running on port 1000');
});
