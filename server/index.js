const mongoose = require("mongoose"); // Importamos el paquete que instalamos, en este caso Mongoose.
const app = require("./app"); // Importamos el fichero de app.
const {
  // Se exportan todas las constantes que se escriban de la carpeta seleccionada, en este caso las creadas en la carpeta de constants.
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  IP_SERVER,
  API_VERSION,
} = require("./constants");

const PORT = process.env.PORT || 3977; // Necesitamos asignar un puerto donde se levantara nuestro servidor http.

// MONGOOSE es para conectar con la base de datos y EXPRESS para crear la peticion http.
mongoose.connect(
  // Conectamos la base de datos a traves de mongoose.
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/`, // Escribimos estas comillas para mezlcar texto con variables. Aqui escribimos el link de la base de datos de MongoDB que estamos utilizando.
  (error) => {
    // Al esto requerir un call back se hace funcion de llaves para hacerlo.
    if (error) throw error; // Si el error existe...

    app.listen(PORT, () => {
      // Hacemos un app.listen para levantar el servidor. luego se le da el puerto (PORT). Aqui se da el link donde se ha levantado el server.
      console.log("##################");
      console.log("#### API REST ####");
      console.log("##################");
      console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}`);
    });
  }
);
