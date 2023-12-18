const express = require("express"); // Se importa EXPRESS
const AuthController = require("../controllers/auth"); // Importamos el controlador de Auth.

const api = express.Router(); // Creamos la ruta.

// AQUI SE ANOTAN LAS RUTAS.
api.post("/auth/register", AuthController.register); // Definimos nuestra primera ruta. se coloca api. y luego si es post, update, delete, etc. // Ruta del register.

api.post("/auth/login", AuthController.login); // Ruta del login.

api.post("/auth/refresh_access_token", AuthController.refreshAccessToken); // Ruta del refreshAccessToken.

module.exports = api;