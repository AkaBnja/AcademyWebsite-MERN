const express = require("express"); // Importamos el paquete que instalamos, en este caso EXPRESS.
const bodyParser = require("body-parser"); // Importamos el paquete que instalamos, en este caso bodyParser.
const cors = require("cors"); // Importamos el paquete que instalamos, en este caso CORS.
const { API_VERSION } = require("./constants"); // Exportamos el api version.

const app = express(); // Inicializamos EXPRESS.

// Import routings (Importar Rutas)
const authRoutes = require("./router/auth"); // Importamos la ruta.
const userRoutes = require("./router/user");
const menuRoutes = require("./router/menu");
const courseRoutes = require("./router/course");
const postRoutes = require("./router/post");
const newsletterRoutes = require("./router/newsletter");

// Configure Body Parse (Configuracion del body parse, para poder mandar contenidos json en el Body)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Solo con esto ya tenemos configurado el Body Parser en nuestro servidor y ya es capaz de resivir Json en el body de la peticion.

// Configure static folder
app.use(express.static("uploads"));
// Solo con esto ya tenemos configurado una carpeta para archivos estaticos.

// Configure Header HTTP - CORS (Configuracion de cors para que no de problemas al hacer peticiones HTTP)
app.use(cors());

// Configure routings (Configuracion de las rutas)
app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, userRoutes);
app.use(`/api/${API_VERSION}`, menuRoutes);
app.use(`/api/${API_VERSION}`, courseRoutes);
app.use(`/api/${API_VERSION}`, postRoutes);
app.use(`/api/${API_VERSION}`, newsletterRoutes);

module.exports = app; // Exportamos el app de EXPRESS.
