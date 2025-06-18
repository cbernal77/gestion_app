// backend/models/user.js

// Importa mongoose para definir el esquema y el modelo
const mongoose = require('mongoose');

// Define el esquema del usuario con los campos que tendrá en la base de datos
const UserSchema = new mongoose.Schema({
  nombre: {
    // Campo "nombre": nombre completo del usuario, tipo String, obligatorio
    type: String,
    required: true
  },
  correo: {
    // Campo "correo": dirección de correo electrónico, tipo String, obligatorio y único
    type: String,
    required: true,
    unique: true
  },
  // Campo "contraseña": contraseña cifrada del usuario, tipo String, obligatorio
  contraseña: {
    type: String,
    required: true
  }
}, {
  // Agrega automáticamente createdAt y updatedAt a cada documento
  timestamps: true
});

// Crea y exporta el modelo "User" basado en el esquema definido
module.exports = mongoose.model('User', UserSchema);
