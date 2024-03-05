const express = require("express");
const router = express.Router();
const FollowController = require("../controllers/follow");

//definir rutas

router.get("/pruebaFollow", FollowController.pruebaFollow);

//exportar rutas

module.exports = router;
