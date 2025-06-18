
// Importa el framework Express para crear el servidor web
const express = require('express');

// Importa Mongoose para conectarse y manejar MongoDB
const mongoose = require('mongoose');

// Importa dotenv para manejar variables de entorno desde archivo .env
const dotenv = require('dotenv');

// Importa CORS para habilitar solicitudes cross-origin (desde otros dominios o puertos)
const cors = require('cors');

// Importa la función para conectar con la base de datos MongoDB
const connectDB = require('./database');

// Importa rutas relacionadas con la gestión de usuarios
const userRoutes = require('./routes/user.routes');

// Importa rutas relacionadas con autenticación (login, registro)
const authRoutes = require('./routes/auth.routes');

// Importa rutas relacionadas con productos
const productoRoutes = require('./routes/producto.routes');

// Carga las variables definidas en el archivo .env a process.env
dotenv.config();

// Crea la aplicación Express
const app = express();

// Ejecuta la conexión a la base de datos MongoDB (usando Mongoose)
connectDB();

// Middleware para parsear las solicitudes con cuerpo JSON
app.use(express.json());

// Middleware para habilitar CORS y permitir que frontend pueda comunicarse con este backend
app.use(cors());

// Define las rutas para la autenticación bajo el prefijo /api/auth
app.use('/api/auth',authRoutes);

// Define las rutas para usuarios bajo el prefijo /api/usuarios
app.use('/api/usuarios',userRoutes);

// Define las rutas para productos bajo el prefijo /api/productos
app.use('/api/productos',productoRoutes);

// Define el puerto para que escuche el servidor (desde .env o por defecto 5000)
const PORT = process.env.PORT || 3000;

// Inicia el servidor y muestra mensaje en consola con el puerto escuchando
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT} `);
});