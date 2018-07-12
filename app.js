const express = require('express');
const app = express();

app.use(express.static(__dirname + 'dist'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
    console.log('Load index.ejs');
});

app.get('/planter', (req, res) => {
    res.render('planter');
    console.log('Load planter.ejs');
});

app.get('/manger', (req, res) => {
    res.render('manger');
    console.log('Load manger.ejs');
});

app.get('/bouger', (req, res) => {
    res.render('bouger');
    console.log('Load bouger.ejs');
});

const server = app.listen(process.env.PORT || 8080, (req, res) => {
    console.log('Server Ok!');
});