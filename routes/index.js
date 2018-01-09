'use strict';

const express = require('express');

const controllers = require('../controllers');

const views = express.Router();

views.get('/', controllers.views.main);
views.get('/star', controllers.views.estrella);
views.get('/victoria/:token', controllers.views.victoria);

module.exports = {
    views
}

// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyM2E5OTJlMDEyNDllNWEwIiwiaWF0IjoxNTE1NTAwNjU4fQ.-hGzmk9R0ebqg3lcZe73lL6XplOmBQtLtV1LIr33nII