const User = require("../models/user"); // Se importa el modelo de los (en este caso) usuarios.
const bcrypt = require("bcryptjs"); // Se importa bcrypt para encriptar datos.
const image = require("../utils/images"); // Se importa el avatar del usuario.

async function getMe(req, res) {
  // Se crea la funcion para obtener los datos del usuario logeado.
  const { user_id } = req.user;

  const response = await User.findById(user_id);
  if (!response) {
    res.status(400).send({ msg: "No se ha encontrado usuario." });
  } else {
    res.status(200).send(response);
  }
}

async function getUsers(req, res) {
  // Se crea la funcion para obtener todos los usuarios.
  const { active } = req.query;
  let response = null;
  if (active === undefined) {
    response = await User.find();
  } else {
    response = await User.find({ active });
  }
  res.status(200).send(response);
}

async function createUser(req, res) {
  // Se crea la funcion para crear a los usuarios.
  const { password } = req.body;
  const user = new User({ ...req.body, active: false });

  const salt = bcrypt.genSaltSync(10);
  const hasPassword = bcrypt.hashSync(password, salt);
  user.password = hasPassword;

  if (req.files.avatar) {
    const imagePath = image.getFilePath(req.files.avatar);
    user.avatar = imagePath;
  }

  user.save((error, userStored) => {
    if (error) {
      res.status(400).send({ msg: "Error al crear el usuario" });
    } else {
      res.status(201).send(userStored);
    }
  });
}

async function updateUser(req, res) {
  // Se crea la funcion para actualizar datos de los usuarios.
  const { id } = req.params;
  const userData = req.body;

  if (userData.password) {
    // Password
    const salt = bcrypt.genSaltSync(10);
    const hasPassword = bcrypt.hashSync(userData.password, salt);
    userData.password = hasPassword;
  } else {
    delete userData.password;
  }

  if (req.files.avatar) {
    // Avatar
    const imagePath = image.getFilePath(req.files.avatar);
    userData.avatar = imagePath;
  }

  User.findByIdAndUpdate({ _id: id }, userData, (error) => {
    if (error) {
      res.status(400).send({ msg: "Error al actualizar el usuario" });
    } else {
      res.status(200).send({ msg: "Actualizacion correcta" });
    }
  });
}

async function deleteUser(req, res) {
  // Se crea la funcion para eliminar usuarios.
  const { id } = req.params;

  User.findByIdAndDelete(id, (error) => {
    if (error) {
      res.status(400).send({ msg: "Error al eliminar al usuario" });
    } else {
      res.status(200).send({ msg: "Usuario eliminado" });
    }
  });
}

module.exports = {
  getMe,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
