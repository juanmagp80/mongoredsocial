const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");

//definir rutas

router.get("/pruebaUsuario", UserController.pruebaUser);
router.post("/register", UserController.register);

//exportar rutas

module.exports = router;
