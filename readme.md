# NodePop - Plataforma de Productos

## 📌 Descripción

NodePop es una aplicación web donde los usuarios pueden **crear, ver y eliminar** sus propios productos después de iniciar sesión. Cada usuario solo puede ver y administrar sus propios productos.

## 📋 Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (v16 o superior recomendado)
- [MongoDB](https://www.mongodb.com/) (si lo ejecutas en local, asegúrate de que el servicio esté en ejecución)

## 🚀 Instalación

Clona el repositorio e instala las dependencias:

```sh
# Clonar el repositorio
git clone https://github.com/riduarte/practica-nodejs.git
cd nodepop

# Instalar dependencias
npm install
```

## ⚙️ Configuración

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto y agrega la configuración necesaria:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/nodepop
SESSION_SECRET=tu_clave_secreta
```

- **PORT**: Puerto donde se ejecutará el servidor.
- **MONGO\_URI**: URL de conexión a MongoDB.
- **SESSION\_SECRET**: Clave secreta para las sesiones.

## 🛠 Inicialización de la Base de Datos

Antes de iniciar el proyecto, ejecuta el siguiente comando para inicializar la base de datos:

```sh
npm run initDB
```

Esto poblará la base de datos con datos iniciales si es necesario.

## 🚦 Ejecución del Servidor

### 🔧 Modo Desarrollo

Para ejecutar el proyecto en **modo desarrollo** con recarga automática:

```sh
npm run dev
```

### 🚀 Modo Producción

Para ejecutar el proyecto en **modo producción**:

```sh
npm start
```

## ✨ Características Principales

✅ **Registro e inicio de sesión de usuarios** (Express-session + bcrypt).\
✅ **Creación, edición y eliminación de productos** (solo por el usuario propietario).\
✅ **Cada usuario solo ve sus productos**.\
✅ **Autenticación basada en sesiones con MongoDB**.\
✅ **Vistas dinámicas con EJS**.

## 🛠 Tecnologías Utilizadas

- **Node.js + Express** (Servidor web)
- **MongoDB + Mongoose** (Base de datos)
- **EJS** (Motores de plantillas para vistas)
- **bcrypt** (Cifrado de contraseñas)
- **Express-session + Connect-mongo** (Manejo de sesiones)
- **Nodemon** (Recarga en desarrollo)
- **Morgan** (Logs de peticiones HTTP)

## 👥 Contribución

Si deseas contribuir:

1. Haz un fork del repositorio.
2. Crea una rama con tu nueva funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Haz push a tu rama (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request.

## 📜 Licencia

Este proyecto está bajo la licencia **ISC**.
