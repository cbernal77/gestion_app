// backend/models/producto.js

// Importa Mongoose, una biblioteca para modelar objetos MongoDB
const mongoose = require('mongoose');

// Define el esquema del producto, es decir, su estructura en la base de datos
const ProductoSchema = new mongoose.Schema({
  // Campo "nombre" del producto: tipo String, obligatorio
  nombre: {
    type: String,
    required: true
  },
  // Campo "descripcion" del producto: tipo String, obligatorio
  descripcion: {
    type: String,
    required: true
  },
  // Campo "precio" del producto: tipo Number, obligatorio
  precio: {
    type: Number,
    required: true
  },
  // Campo "categoria" del producto: tipo String, obligatorio
  categoria: {
    type: String,
    required: true
  }
}, {
  // Agrega automáticamente los campos createdAt y updatedAt al documento
  timestamps: true
});

// Exporta el modelo "Producto", basado en el esquema definido
module.exports = mongoose.model('Producto', ProductoSchema);

