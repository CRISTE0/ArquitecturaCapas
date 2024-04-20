const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const app = express();
const flash = require('express-flash');
const session = require('express-session');
const db = require("./CapaDatos/db");
const user = require("./CapaNegocio/models/usuario");
const port = 3005;

app.use(session({
  secret: 'DRLX',
  resave: false,
  saveUninitialized: true
}));
app.use(flash());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "CapaPresentacion","public")));



//llamar a la ruta para los metodos crud

const usuariosRoutes = require('./CapaPresentacion/routes/usuariosRoutes');
app.use(usuariosRoutes);


const clientesRoutes = require("./CapaPresentacion/routes/clientesRoutes");
app.use(clientesRoutes);

const loginRoutes = require("./CapaPresentacion/routes/loginRoutes");
app.use(loginRoutes);


app.set("views", path.join(__dirname, "CapaPresentacion","views"));
app.set("view engine", "ejs");

// Rutas
app.get("/", (req, res) => {
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.render("login", {});
});

app.get("/index", (req, res) => {
  res.render("index", {});
});

app.get("/clientes", (req, res) => {
  res.render("clientes", {});
});


app.listen(port, () => {
  console.log("Server started on port ",port);
});
