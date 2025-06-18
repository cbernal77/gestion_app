
// Importa la librería Mongoose para manejar la conexión y modelado con MongoDB
const mongoose = require('mongoose');

// Función asíncrona para conectar a la base de datos MongoDB
const connectDB = async () => {
    try {
        // Intenta conectar a MongoDB usando la URL almacenada en la variable de entorno MONGODB_URI
        await mongoose.connect(process.env.MONGODB_URI, {
            // Aquí puedes agregar opciones de conexión si las necesitas
            });

           // Si la conexión es exitosa, imprime este mensaje en consola 
        console.log('Conexion a MongoDB exitosa');
    } catch (error) {
        // Si ocurre un error durante la conexión, lo imprime en consola
        console.error('Error al conectar con MongoDB:', error.message);
        
        // Sale del proceso con código 1 para indicar fallo grave en la conexión
        process.exit(1);
    }
    
};

// Exporta la función connectDB para que pueda ser utilizada en otros archivos
module.exports = connectDB;