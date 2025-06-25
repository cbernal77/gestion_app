# 🛠️ Proyecto Backend: Gestión App

Este es el backend del proyecto Gestión App, una API REST construida con Node.js, Express, y MongoDB. Permite gestionar usuarios y productos o servicios, incluyendo autenticación, registro y operaciones CRUD.

## 📁 Estructura del proyecto

```
gestion_app/
├── backend/
│ ├── controllers/
│ │ ├── auth.controller.js # Registro, login (sin JWT)
│ │ ├── user.controller.js # CRUD de usuarios
│ │ └── producto.controller.js # CRUD de productos o servicios
│ │
│ ├── models/
│ │ ├── user.js # Modelo de usuario
│ │ └── producto.js # Modelo de producto o servicio
│ │
│ ├── routes/
│ │ ├── auth.routes.js # Rutas de login y registro
│ │ ├── user.routes.js # Rutas CRUD usuarios
│ │ └── producto.routes.js # Rutas CRUD productos o servicios
│ │
│ ├── database.js # Conexión a MongoDB
│ └── index.js # Punto de entrada del servidor
│
├── data/
│ ├── usuarios.json
│ └── productos.json
│
├── .env
├── .env.example
├── .gitignore
├── package.json
└── README.md

```
---

## 🚀 Instalación y ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/cbernal77/gestion_app.git
cd gestion_app

Asegúrate de reemplazar la URL si tu repositorio se llama distinto.

```
### 2. Instala las dependencias

npm install

```
```
### 3. Crea tu archivo .env

Copia el archivo .env.example a .env:

    En Windows:

    copy .env.example .env


    En Linux/macOS:

    cp .env.example .env

Luego abre el archivo .env para revisarlo y modificarlo si es necesario. Puedes usar VS Code:

code .env

Asegúrate que las variables tengan los valores correctos, por ejemplo:

PORT=3000
MONGODB_URI=mongodb://localhost:27017/gestion_app

```


🧪 Carga de datos de prueba

El proyecto incluye datos para poblar la base de datos en la carpeta data/:

    usuarios.json

    productos.json

🔹 Opción 1: Usando MongoDB Compass (recomendado)

    Abre MongoDB Compass.

    Conéctate a mongodb://localhost:27017 o a tu URI personalizada.

    Selecciona la base de datos gestion_app.

    Abre o crea las colecciones usuarios y productos.

    Haz clic en ⋯ > Import Data.

    Selecciona el archivo JSON correspondiente.

    Elige el tipo: "JSON – Array of documents".

    Haz clic en Import.

🔹 Opción 2: Usando la terminal con mongoimport

    mongoimport --db gestion_app --collection usuarios --file data/usuarios.json --jsonArray
    mongoimport --db gestion_app --collection productos --file data/productos.json --jsonArray

Requiere tener MongoDB instalado localmente y que mongoimport esté en tu PATH.

🔐 Credenciales de prueba

Estas credenciales están incluidas en los datos de prueba para iniciar sesión:

| Usuario                                                           | Contraseña  |
| ----------------------------------------------------------------- | ----------- |
| [lucia.ramirez@example.com](mailto:lucia.ramirez@example.com)     | clave123    |
| [carlos.gomez@example.com](mailto:carlos.gomez@example.com)       | secreto456  |
| [andrea.martinez@example.com](mailto:andrea.martinez@example.com) | password789 |

Las contraseñas están hasheadas en la base de datos. Estos valores son las versiones en texto plano para probar login.

📬 Endpoints principales

| Método | Ruta                 | Descripción             |
| ------ | -------------------- | ----------------------- |
| POST   | `/api/auth/login`    | Iniciar sesión          |
| POST   | `/api/auth/register` | Registrar nuevo usuario |
| GET    | `/api/usuarios`      | Obtener usuarios        |
| GET    | `/api/productos`     | Obtener productos       |
| POST   | `/api/productos`     | Crear producto          |
| PUT    | `/api/productos/:id` | Editar producto         |
| DELETE | `/api/productos/:id` | Eliminar producto       |

Las rutas pueden variar según tu implementación exacta en routes/.

🛠️ Tecnologías usadas

    Node.js

    Express.js

    MongoDB

    Mongoose

    bcrypt

    dotenv

📌 Notas

    El archivo .env está en .gitignore y no se sube al repositorio.

    Usa .env.example como referencia para configurar tu entorno.

    Los archivos .json en data/ contienen datos de prueba que puedes modificar.

Este repositorio está listo para clonar, instalar dependencias, importar datos de prueba y comenzar a probar la API localmente. Puedes utilizar MongoDB Compass o la terminal para importar los datos desde la carpeta data/.