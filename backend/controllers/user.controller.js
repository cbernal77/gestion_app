// backend/controllers/user.controller.js

// Importa el modelo User que representa la colección de usuarios en MongoDB
const User = require('../models/user');

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
  try {
    // Crea una nueva instancia del modelo User con los datos enviados en el cuerpo de la solicitud
    const newUser = new User(req.body);

   // Guarda el nuevo usuario en la base de datos 
    await newUser.save();

     // Devuelve una respuesta con estado 201 (creado) y el nuevo usuario
    res.status(201).json({ message: 'Usuario creado exitosamente', user: newUser });
  } catch (error) {
    // Si hay un error (por ejemplo, campos inválidos), responde con estado 400 y el mensaje de error
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los usuarios
exports.getUsers = async (req, res) => {
  try {
    // Busca todos los documentos en la colección de usuarios
    const users = await User.find();
    
    // Devuelve los usuarios como un array JSON
    res.json(users);
  } catch (error) {
    // Si ocurre un error, responde con estado 500 (error interno del servidor)
    res.status(500).json({ error: error.message });
  }
};

// Obtener un usuario por ID
exports.getUserById = async (req, res) => {
  try {
    // Busca un usuario por el ID recibido en los parámetros de la URL
    const user = await User.findById(req.params.id);
    
    // Si no se encuentra el usuario, responde con estado 404 (no encontrado)
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    
    // Si se encuentra, responde con el usuario encontrado
    res.json(user);
  } catch (error) {
    // Si ocurre un error, responde con estado 500
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un usuario
exports.updateUser = async (req, res) => {
  try {
    // Busca y actualiza el usuario usando su ID y los nuevos datos
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id, // ID del usuario
      req.body, // Nuevos datos del usuario
      { new: true } // Retorna el usuario actualizado en lugar del anterior
    );

    // Si no se encuentra el usuario, responde con 404
    if (!updatedUser) return res.status(404).json({ message: 'Usuario no encontrado' });
    
    // Si se actualiza correctamente, devuelve un mensaje de éxito y el usuario actualizado
    res.json({ message: 'Usuario actualizado', user: updatedUser });
  } catch (error) {
    // Si ocurre un error (por ejemplo, datos inválidos), responde con estado 400
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un usuario
exports.deleteUser = async (req, res) => {
  try {
    // Busca y elimina el usuario usando su ID
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    
    // Si no se encuentra el usuario, responde con 404
    if (!deletedUser) return res.status(404).json({ message: 'Usuario no encontrado' });
    
    // Si se elimina exitosamente, responde con mensaje de éxito
    res.json({ message: 'Usuario eliminado' });
  } catch (error) {
    // Si ocurre un error al eliminar, responde con estado 500
    res.status(500).json({ error: error.message });
  }
};
