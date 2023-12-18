const bcrypt = require("bcryptjs"); // Se importa la libreria bcryptJS.
const User = require("../models/user"); // Se importa el modelo del Usuario.
const jwt = require("../utils/jwt");

function register(req, res) {
  // Se crea la funcion de register. Se agrega request y response.
  const { firstname, lastname, email, password } = req.body; // Se asginan a las variables necesarias.

  if (!email) res.status(400).send({ msg: "El email es obligatorio." }); // Se vuelve obligatorio el email.
  if (!password) res.status(400).send({ msg: "La contraseña es obligatoria." }); // Se vuelve obligatorio el password.

  const user = new User({
    firstname,
    lastname,
    email: email.toLowerCase(),
    role: "user",
    active: false,
  });

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  user.password = hashPassword;

  user.save((error, userStorage) => {
    if (error) {
      res.status(400).send({ msg: "Error al crear el usuario." });
    } else {
      res.status(200).send({ userStorage });
    }
  });
}

function login(req, res) {
  const { email, password } = req.body;

  if (!email) res.status(400).send({ msg: "El email es obligatorio." });
  if (!password) res.status(400).send({ msg: "La contraseña es obligatoria." });

  const emailLowerCase = email.toLowerCase();

  User.findOne({ email: emailLowerCase }, (error, userStore) => {
    if (error) {
      res.status(500).send({ msg: "Error del servidor." });
    } else {
      bcrypt.compare(password, userStore.password, (bcryptError, check) => {
        if (bcryptError) {
          res.status(500).send({ msg: "Error del servidor." });
        } else if (!check) {
          res.status(400).send({ msg: "Contraseña incorrecta." });
        } else if (!userStore.active) {
          res.status(401).send({ msg: "Usuario no autorizado o no activo." });
        } else {
          res.status(200).send({
            access: jwt.createAccessToken(userStore),
            refresh: jwt.createRefreshToken(userStore),
          });
        }
      });
    }
  });
}

function refreshAccessToken(req, res) {
  const { token } = req.body;

  if (!token) res.status(400).send({ msg: "Token requerido." });

  const { user_id } = jwt.decoded(token);

  User.findOne({ _id: user_id }, (error, userStorage) => {
    if (error) {
      res.status(500).send({ msg: "Error del servidor." });
    } else {
      res.status(200).send({
        accessToken: jwt.createAccessToken(userStorage),
      });
    }
  });
}

module.exports = {
  register, // Se exporta el register.
  login, // Se exporta el login.
  refreshAccessToken, // Se exporta el refreshAccessToken.
};
