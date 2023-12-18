const express = require("express"); // Se importa.
const multiparty = require("connect-multiparty");
const UserController = require("../controllers/user"); // Se importa.
const md_auth = require("../middlewares/authenticated");

const md_upload = multiparty({ uploadDir: "./uploads/avatar" });
const api = express.Router();

api.get("/user/me", [md_auth.asureAuth], UserController.getMe); // Se crea el primer endpoint.
api.get("/users", [md_auth.asureAuth], UserController.getUsers);
api.post("/user", [md_auth.asureAuth, md_upload], UserController.createUser);
api.patch(
  "/user/:id",
  [md_auth.asureAuth, md_upload],
  UserController.updateUser
);
api.delete("/user/:id", [md_auth.asureAuth], UserController.deleteUser);

module.exports = api; // Se exportan los endpoints de la api (la api es a traves de donde hacemos las consultas al servidor)
