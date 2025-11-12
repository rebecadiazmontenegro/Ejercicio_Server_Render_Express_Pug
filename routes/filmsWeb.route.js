const express = require("express");
const filmsWebController = require("../controllers/filmsWeb.controller");
const router = express.Router();


// Home
router.get("/",filmsWebController.renderHome);

// POST desde el formulario
router.post("/film",filmsWebController.searchFilm);

// GET por título
router.get("/film/:title",filmsWebController.getFilm);

module.exports = router;