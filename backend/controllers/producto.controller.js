// backend/controllers/producto.controller.js

// Importa el modelo Producto que representa la colección de productos en MongoDB
const Producto = require('../models/producto');

// Crear un nuevo producto
exports.createProducto = async (req, res) => {
  try {
    // Crea una nueva instancia del modelo Producto con los datos enviados en el cuerpo de la petición
    const nuevoProducto = new Producto(req.body);

    // Guarda el nuevo producto en la base de datos
    await nuevoProducto.save();
    
    // Responde con estado 201 (creado) y el objeto del producto
    res.status(201).json({ message: 'Producto creado exitosamente', producto: nuevoProducto });
  } catch (error) {
    // Si hay un error (como datos inválidos), responde con estado 400 y el mensaje de error 
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los productos
exports.getProductos = async (req, res) => {
  try {
    // Busca todos los productos en la colección
    const productos = await Producto.find();

    // Devuelve los productos como un array JSON
    res.json(productos);
  } catch (error) {
    // Si ocurre un error en la consulta, responde con estado 500 (error del servidor)
    res.status(500).json({ error: error.message });
  }
};

// Obtener un producto por ID
exports.getProductoById = async (req, res) => {
  try {
    // Busca un producto específico usando el ID recibido por parámetros en la URL
    const producto = await Producto.findById(req.params.id);

    // Si no se encuentra, responde con estado 404 (no encontrado)
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
    
    // Si se encuentra, devuelve el producto
    res.json(producto);
  } catch (error) {
    // Si ocurre un error en la búsqueda, responde con estado 500
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un producto
exports.updateProducto = async (req, res) => {
  try {
    // Busca el producto por ID y actualiza sus datos con lo enviado en req.body
    const productoActualizado = await Producto.findByIdAndUpdate(
      req.params.id, // ID del producto a actualizar
      req.body, // Nuevos datos
      { new: true } // Retorna el producto actualizado, no el original
    );

    // Si no se encuentra el producto, responde con 404
    if (!productoActualizado) return res.status(404).json({ message: 'Producto no encontrado' });
    
    // Responde con mensaje de éxito y el producto actualizado
    res.json({ message: 'Producto actualizado', producto: productoActualizado });
  } catch (error) {
    // Si los datos son inválidos u ocurre otro error, responde con 400
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un producto
exports.deleteProducto = async (req, res) => {
  try {
    // Busca y elimina el producto usando el ID recibido por parámetro
    const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
    
    //Si no se encuentra el producto, responde con 404
    if (!productoEliminado) return res.status(404).json({ message: 'Producto no encontrado' });
    
    // Si se elimina correctamente, responde con mensaje de éxito
    res.json({ message: 'Producto eliminado' });
  } catch (error) {

    // Si ocurre un error en la eliminación, responde con estado 500
    res.status(500).json({ error: error.message });
  }
};

