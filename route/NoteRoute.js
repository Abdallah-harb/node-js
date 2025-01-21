var express = require('express');
const Route = express.Router();

var NoteController = require('../controller /NoteController');

        // notes Routes
Route.get('/notes',NoteController.index);
Route.post('/notes',NoteController.store);
Route.put('/notes/{id}',NoteController.update);
Route.delete('/notes/{id}',NoteController.delete);

module.exports = Route;