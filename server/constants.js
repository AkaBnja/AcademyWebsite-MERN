// Aqui se escriben distintas constantes que utilizaremos en el proyecto. En este caso este archivo contiene los datos del usuario para acceder a la base de datos.

const DB_USER = ""; // Nombre de usuario de "Database Access" que se esta utilizando.
const DB_PASSWORD = ""; // Contraseña de usuario de "Database Access" que se esta utilizando.
const DB_HOST = ""; // Ip de base de datos. Se obtiene del link de coneccion de MongoDB. 

const API_VERSION = "v1"; // Version de la API.
const IP_SERVER = "localhost"; // Ip del servidor. localhost cuando se trabaja en local.

const JWT_SECRET_KEY = "KiaJwE01826"

module.exports = { // Esto es para exportar todo de una sola vez.
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  API_VERSION,
  IP_SERVER,
  JWT_SECRET_KEY,
};
