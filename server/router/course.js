const express = require("express");
const multiparty = require("connect-multiparty");
const CourserController = require("../controllers/course");
const md_auth = require("../middlewares/authenticated");
const md_upload = multiparty({ uploadDir: "./uploads/course" });

const api = express.Router();

// Apis // Endpoints // Peticiones, funciones que se pueden ejecutar, aqui se invocan
api.post(
  "/course",
  [md_auth.asureAuth, md_upload],
  CourserController.createCourse
);
api.get("/course", CourserController.getCourse);
api.patch(
  "/course/:id",
  [md_auth.asureAuth, md_upload],
  CourserController.updateCourse
);
api.delete("/course/:id", [md_auth.asureAuth], CourserController.deleteCourse);

module.exports = api;
