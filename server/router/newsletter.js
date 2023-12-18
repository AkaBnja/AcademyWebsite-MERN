const express = require("express");
const NewsletterController = require("../controllers/newsletter");
const md_auth = require("../middlewares/authenticated");

const api = express.Router();

// Routes
api.post("/newsletter", NewsletterController.suscribreEmail);
api.get("/newsletter", [md_auth.asureAuth], NewsletterController.getEmails);
api.delete(
  "/newsletter/:id",
  [md_auth.asureAuth],
  NewsletterController.deleteEmail
);

module.exports = api;
