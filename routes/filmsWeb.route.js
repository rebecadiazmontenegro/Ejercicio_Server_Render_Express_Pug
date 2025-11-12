const express = require("express");
const filmsWebController = require("../controllers/filmsWeb.controller");
const router = express.Router();
const error = require("../middlewares/error404");

// Home
router.get("/", error, filmsWebController.renderHome);

// POST desde el formulario
router.post("/film", error, filmsWebController.searchFilm);

// GET por título
router.get("/film/:title", error, filmsWebController.getFilm);

module.exports = router;
