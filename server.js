var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var NoteRouter = require('./route/NoteRoute');
var StoreRouter = require('./route/StoreRoute');

const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/api/v1',NoteRouter);
app.use('/api/v1',StoreRouter);

app.get('/', (req, res) => {
    res.send('Hello World From Note App .!');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

