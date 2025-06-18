// backend/routes/producto.routes.js

// Importa Express para crear ruta
const express = require('express');


// Crea un enrutador de Express
const router = express.Router();

// Importa el controlador que maneja la lógica de los productos
const productoController = require('../controllers/producto.controller');

// Rutas CRUD para productos o servicios

// Ruta POST para crear un nuevo producto
// Ejemplo de uso: POST /api/productos
router.post('/', productoController.createProducto);  // Crear producto

// Ruta GET para obtener todos los productos
// Ejemplo de uso: GET /api/productos
router.get('/', productoController.getProductos);               // Obtener todos los productos


// Ruta GET para obtener un producto por su ID
// Ejemplo de uso: GET /api/productos/123
router.get('/:id', productoController.getProductoById);         // Obtener producto por ID


// Ruta PUT para actualizar un producto por su ID
// Ejemplo de uso: PUT /api/productos/123
router.put('/:id', productoController.updateProducto);          // Actualizar producto


// Ruta DELETE para eliminar un producto por su ID
// Ejemplo de uso: DELETE /api/productos/123
router.delete('/:id', productoController.deleteProducto);       // Eliminar producto

// Exporta el enrutador para ser usado en index.js
module.exports = router;
