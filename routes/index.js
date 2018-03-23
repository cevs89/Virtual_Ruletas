'use strict';

const express = require('express');

const controllers = require('../controllers');

const views = express.Router();

views.get('/star/:token', controllers.views.estrella);
views.get('/victoria/:token', controllers.views.victoria);
views.get('/fifa/:token', controllers.views.fifa);
views.get('/animalitos/:token', controllers.views.animalitos);
views.get('/player/victoria/:moneda', controllers.views.victoriaPlayer);
views.get('/player/star/:moneda', controllers.views.starPlayer);
views.get('/player/fifa/:moneda', controllers.views.fifaPlayer);
views.get('/player/animalitos/:moneda', controllers.views.animalitosPlayer);

module.exports = {
    views
}
