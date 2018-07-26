// Require variables
const express = require('express');
const config = require('./config/app.js');

const app = express();

app.use(function(req, res, net) {
	res.end("Testing 123");
});

// port listener 
app.listen(config.port, () => {
	console.log(`${config.appName} is listening on port ${config.port}`);
});


