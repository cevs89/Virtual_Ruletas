'use strict';

const express = require('express');

const controllers = require('../controllers');

const views = express.Router();

views.get('/', controllers.views.main);
views.get('/star', controllers.views.estrella);
views.get('/star/:token', controllers.views.estrella);
views.get('/victoria/:token', controllers.views.victoria);
views.get('/victoria', controllers.views.victoria);
views.get('/player/victoria', controllers.views.victoriaPlayer);
views.get('/player/star', controllers.views.starPlayer);
views.get('/player/fifa', controllers.views.fifaPlayer);
views.get('/player/animalitos', controllers.views.victoriaPlayer);
views.get('/fifa', controllers.views.fifa);
views.get('/fifa/:token', controllers.views.fifa);
views.get('/animalitos', controllers.views.animalitos);
views.get('/animalitos/:token', controllers.views.animalitos);

module.exports = {
    views
}
