const Usuario = require("../models/usuario");
const bcrypt = require("bcrypt");
const express = require("express");
const app = express();

// Ruta para obtener la lista de usuarios
module.exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find({});
    res.render("usuarios", { usuarios });
  } catch (error) {
    res.status(500).send("Error al obtener la lista de usuarios");
  }
};

// Para crear el usuario
module.exports.crearUsuario = async (req, res) => {
  try {
    const { username, email, password } = req.body

    const user = new Usuario({ username, email, password })
    await user.save();
    res.redirect("/usuarios");
  } catch (err) {
    res.status(500).send("Error al obtener la lista de usuarios");
  }
}

module.exports.editarUsuario = 
async function editar(req, res){
    const id = req.body.id_editar
    const username = req.body.usuario_editar
    const email = req.body.email_editar

    try {
        await Usuario.findByIdAndUpdate(id, {username, email})
        res.redirect('/usuarios')
    } catch (error){
        console.log(error)
    }
}


module.exports.borrarUsuario =
async function borrar(req, res){
    const id =req.params.id;
    try {
        await Usuario.findByIdAndDelete(id)
        res.redirect('/usuarios')
    } catch (error){
        console.log(error)
    }
}