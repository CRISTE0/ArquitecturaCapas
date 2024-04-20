const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema({
  tipoDocumento: { type: String, required: true },
  numeroDocumento: { type: Number, required: true },
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  direccion: { type: String, required: true },
  telefono: { type: Number, required: true },
  estado: { type: String, required: true },
});

const Cliente = mongoose.model("Cliente", clienteSchema);

module.exports = Cliente;
