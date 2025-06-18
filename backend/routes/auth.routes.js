// backend/routes/auth.routes.js

// Importa Express para crear el enrutador
const express = require('express');

// Crea una instancia del router de Express
const router = express.Router();

// Importa el controlador de autenticación con las funciones register y login
const authController = require('../controllers/auth.controller');

// Rutas para autenticación

// Ruta POST para registrar un nuevo usuario
// Se accede desde: POST /api/auth/register
router.post('/register', authController.register);

// Ruta POST para iniciar sesión de un usuario existente
// Se accede desde: POST /api/auth/login
router.post('/login', authController.login);

// Exporta el router para usarlo en index.js (ruta base: /api/auth)
module.exports = router;

