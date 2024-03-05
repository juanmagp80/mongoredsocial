const express = require("express");
const router = express.Router();
const PublicationController = require("../controllers/publication");

//definir rutas

router.get("/pruebaPublication", PublicationController.pruebaPublication);

//exportar rutas

module.exports = router;
