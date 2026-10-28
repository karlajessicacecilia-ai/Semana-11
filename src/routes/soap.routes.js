// Router que registra los servicios SOAP
const express = require('express');
const soap = require('soap');
const fs = require('fs');
const path = require('path');

const conversionesService = require('../services/conversiones.service');
const geometriaService = require('../services/geometria.service');

const router = express.Router();

// Leer los contratos WSDL
const wsdlConversiones = fs.readFileSync(path.join(__dirname, '../../wsdl/conversiones.wsdl'), 'utf8');
const wsdlGeometria = fs.readFileSync(path.join(__dirname, '../../wsdl/geometria.wsdl'), 'utf8');

// Publicar cada servicio en su ruta
soap.listen(router, '/conversiones', conversionesService, wsdlConversiones);
soap.listen(router, '/geometria', geometriaService, wsdlGeometria);

module.exports = router;
