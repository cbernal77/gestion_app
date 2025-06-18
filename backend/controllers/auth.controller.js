// backend/controllers/auth.controller.js

// Importa la librería bcrypt para cifrar y comparar contraseñas
const bcrypt = require('bcrypt');

// Importa el modelo User para interactuar con la colección de usuarios en MongoDB
const User = require('../models/user');

// Funcion para Registro de usuario nuevo
exports.register = async (req, res) => {
  try {
    // Extrae nombre, correo y contraseña del cuerpo de la petición
    const { nombre, correo, contraseña } = req.body;

    // Busca si ya existe un usuario con el correo proporcionado
    const existingUser = await User.findOne({ correo });
    
    // Si el usuario ya existe, responde con error 400 y mensaje adecuado
    if (existingUser) {
      console.log(`⚠️  Registro fallido: El correo "${correo}" ya está registrado.`);
      return res.status(400).json({ message: 'El correo ya está registrado' });
    }

    // Cifrar la contrasena
    // Genera un "salt" para el hash de la contraseña (nivel de dificultad 10)
    const salt = await bcrypt.genSalt(10);
    
    // Cifra la contraseña usando el salt generado
    const hashedPassword = await bcrypt.hash(contraseña, salt);

    // Crea una nueva instancia de usuario con los datos y la contraseña cifrada
    const newUser = new User({ nombre, correo, contraseña: hashedPassword });
    
    // Guarda el nuevo usuario en la base de datos
    await newUser.save();


    console.log(`✅ Usuario registrado: ${nombre} (${correo})`);
    // Responde con código 201 (creado) y mensaje de éxito, enviando también el usuario creado
    res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
  } catch (error) {
    console.log(`❌ Error en el registro: ${error.message}`);
    // Si ocurre un error, responde con código 400 y el mensaje de error
    res.status(400).json({ error: error.message });
  }
};

// Funcion para iniciar sesion (Login) de usuario
exports.login = async (req, res) => {
  try {

    // Extrae correo y contraseña del cuerpo de la petición
    const {nombre, correo, contraseña } = req.body;

    // Busca en la base de datos un usuario con el correo proporcionado
    const user = await User.findOne({ correo });

    // Si no encuentra usuario, muestra en consola y responde con error 401 (no autorizado)
    if (!user) {
       console.log(`🔐 Intento de login fallido: Correo no encontrado -> "${correo}"`);
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    // Compara la contraseña enviada con la contraseña cifrada guardada en la base de datos
    const isMatch = await bcrypt.compare(contraseña, user.contraseña);
    
    // Si la contraseña no coincide, muestra en consola y responde con error 401
    if (!isMatch) {
      console.log(`🔐 Login fallido: Contraseña incorrecta para : "${correo}"`);
      return res.status(401).json({message: 'Credenciales Incorrectas'});
    }

     // Si todo es correcto, responde con mensaje de éxito y el usuario encontrado
    console.log(`✅ Login exitoso: ${user.nombre} (${correo})`);
    res.json({ message: 'Inicio de sesión exitoso', user });
  } catch (error) {
    // Si ocurre un error inesperado, lo imprime en consola y responde con error 500
    console.log(`❌ Error en login: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};

