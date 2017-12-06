'use strict';

const app = require('./app').app;
const config = require('./config');

app.listen(config.PORT, () => {
    console.log(`Apricasion corriendo en el puerto: ${config.PORT}`);
});
