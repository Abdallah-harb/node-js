var express = require('express');
const Route = express.Router();

var StoreController = require('../controller /StoreController');
var BookController = require('../controller /BookController');
const {Book} = require("../model/BookModel");

// store Routes
Route.get('/store',StoreController.index);
Route.post('/store',StoreController.store);
Route.put('/store/:id',StoreController.update);
Route.delete('/store/:id',StoreController.delete);

// book Routes
Route.get('/book',BookController.index);
Route.post('/book',BookController.store);
Route.get('/book/:id',BookController.find);
Route.put('/book/:id',BookController.update);
Route.delete('/book/:id',BookController.delete);

module.exports = Route;