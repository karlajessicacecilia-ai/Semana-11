// Configuración de la aplicación
const express = require('express');
const logger = require('./middleware/logger');
const soapRoutes = require('./routes/soap.routes');

const app = express();

// El middleware va antes de las rutas
app.use(logger);

// Las rutas SOAP quedan en /soap/conversiones y /soap/geometria
app.use('/soap', soapRoutes);

module.exports = app;
