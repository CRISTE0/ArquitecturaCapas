const express = require("express");
const router = express.Router();
const usuariosController = require("../../CapaNegocio/controllers/usuariosController");
const Usuario =  require("../../CapaNegocio/models/usuario")


router.get("/usuarios", usuariosController.getUsuarios);

router.post("/crearUsuario", usuariosController.crearUsuario);

router.post("/editarUsuario", usuariosController.editarUsuario);

router.get('/borrarUsuario/:id', usuariosController.borrarUsuario)
 

module.exports = router;
