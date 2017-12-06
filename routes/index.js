'use strict';

const express = require('express');

const controllers = require('../controllers');

const views = express.Router();

views.get('/', controllers.views.main);
views.get('/star', controllers.views.estrella);
views.get('/victoria', controllers.views.victoria);

module.exports = {
    views
}