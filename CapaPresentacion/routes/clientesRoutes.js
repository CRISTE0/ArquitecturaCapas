const express = require("express");
const router = express.Router();
const clientesController = require("../../CapaNegocio/controllers/clientesController");
const Cliente =  require("../../CapaNegocio/models/Cliente")

router.get("/clientes", clientesController.getClientes);

router.post("/crearCliente", clientesController.crearCliente);

router.post("/editarCliente", clientesController.editarCliente);

router.get('/borrarCliente/:id', clientesController.borrar)

module.exports = router;
