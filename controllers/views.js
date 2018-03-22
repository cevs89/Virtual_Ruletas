'use strict';

const path = require('path');

function main(req, res) {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
}

function estrella(req, res) {
    res.sendFile(path.join(__dirname, '../', 'views', 'star.html'));
}

function victoria(req, res) {
    res.sendFile(path.join(__dirname, '../', 'views', 'victoria.html'));
}

function victoriaPlayer(req, res) {
    res.sendFile(path.join(__dirname, '../', 'views', 'victoria_player.html'));
}

function fifaPlayer(req, res) {
    res.sendFile(path.join(__dirname, '../', 'views', 'fifa_player.html'));
}

function starPlayer(req, res) {
    res.sendFile(path.join(__dirname, '../', 'views', 'star_player.html'));
}

function fifa(req, res) {
    res.sendFile(path.join(__dirname, '../', 'views', 'fifa.html'));
}

module.exports = {
    main,
    victoria,
    estrella,
    fifa,
    victoriaPlayer,
    fifaPlayer,
    starPlayer
};
