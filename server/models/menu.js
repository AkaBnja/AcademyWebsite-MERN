const mongoose = require("mongoose");

const MenuSchema = mongoose.Schema({
  title: String, // Texto que se va a ver en la pagina.
  path: String, // La url donde el usuario viajara cuando haga clic.
  order: Number, // Par poder ver en que orden ira el menu, para ponerlo mas arriba o abajo, derecha o izquierda y asi.
  active: Boolean, // Para desactivar menus de la web, para desactivar secciones de la pagina.
});

module.exports = mongoose.model("Menu", MenuSchema);