// backend/routes/user.routes.js


// Importa Express para definir rutas
const express = require('express');

// Crea una instancia del enrutador de Express
const router = express.Router();

// Importa el controlador que contiene la lógica de manejo de usuarios
const userController = require('../controllers/user.controller');

// Rutas CRUD para usuarios

// Ruta POST para crear un nuevo usuario
// Ejemplo de uso: POST /api/usuarios
router.post('/', userController.createUser);            // Crear usuario

// Ruta GET para obtener todos los usuarios
// Ejemplo de uso: GET /api/usuarios
router.get('/', userController.getUsers);               // Obtener todos los usuarios

// Ruta GET para obtener un usuario por su ID
// Ejemplo de uso: GET /api/usuarios/:id
router.get('/:id', userController.getUserById);         // Obtener usuario por ID

// Ruta PUT para actualizar un usuario por su ID
// Ejemplo de uso: PUT /api/usuarios/:id
router.put('/:id', userController.updateUser);          // Actualizar usuario

// Ruta DELETE para eliminar un usuario por su ID
// Ejemplo de uso: DELETE /api/usuarios/:id
router.delete('/:id', userController.deleteUser);       // Eliminar usuario


// Exporta el router para ser usado en index.js con la ruta base /api/usuarios
module.exports = router;

