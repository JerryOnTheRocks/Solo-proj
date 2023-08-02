//require neccessary
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jerry11368:Codesmith@cluster0.jmtshlt.mongodb.net/');

mongoose.connection.once('open', () => {
	console.log('Connected to Database...');
});

//route an api endpoint to middlewear and final cb just return res status json(res.locals.)
app.use('/api', (req, res) => {
	return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});
//post request w/endpoint 'signup' to authentication controller(stretch-feature)

app.listen(3000); //listens on port 3000 -> http://localhost:3000/