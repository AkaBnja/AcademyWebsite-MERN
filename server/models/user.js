const mongoose = require("mongoose"); // Importamos el paquete que instalamos, en este caso Mongoose.

const UserSchema = mongoose.Schema ({ // Usamos la propiedad mongoose.Schema para crear un esquema a nuestra constante, en este caso a los Usuarios.
    firstname: String, // Se le asignan las propiedades que tendra.
    lastname: String,
    email: { // A cualquier propiedad se le puede dar un objeto, lo que permite hacerlo con mas detalle.
        type: String,
        unique: true,
    },
    password: String,
    role: String,
    active: Boolean,
    avatar: String,
});

module.exports = mongoose.model("User", UserSchema); // Finalmente se usan propiedades de mongoose para poder exportar el modelo del objeto, en este caso, el del usuario.