const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const authors = require('./routes/authors');
var PORT = process.env.port || 8080;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/authors', authors);

app.set('view engine', 'ejs');

app.listen(PORT, () => {
	console.log(`Hokay! We are rolling on port ${PORT}`);
});

module.exports = {
	app
};
