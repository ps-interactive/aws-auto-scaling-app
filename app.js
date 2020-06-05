const path = require('path');

const express = require('express');
const app = new express();

const port = 3000

app.set('views',path.join(__dirname, '/views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => res.render('index'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
