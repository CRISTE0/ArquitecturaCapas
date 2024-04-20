const Cliente = require("../models/Cliente");

// Ruta para obtener la lista de clientes
module.exports.getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.render("clientes", { clientes });
  } catch (error) {
    res.status(500).send("Error al obtener la lista de clientes");
  }
};

// Crear un nuevo cliente
module.exports.crearCliente =
  async function crear(req, res){
      try{
          const cliente = await new Cliente({
              tipoDocumento: req.body.tipo_documento,
              numeroDocumento: req.body.nro_documento,
              nombre: req.body.nombre,
              correo: req.body.correo,
              direccion: req.body.direccion,
              telefono: req.body.telefono,
              estado: req.body.estado,

          })
          cliente.save()
          res.redirect('/clientes')
      }catch (error){
          console.log(error)
      }
  };

// Ruta para editar cliente
module.exports.editarCliente = 
async function editar(req, res){
  const id = req.body.id_editar
    const tipoDocumento = req.body.tipodocumentoC_editar
    const numeroDocumento = req.body.numerodocumentoC_editar
    const nombre = req.body.nombreC_editar
    const correo = req.body.correoC_editar
    const direccion = req.body.direccionC_editar
    const telefono = req.body.telefonoC_editar
    const estado = req.body.estadoC_editar

    try {
        await Cliente.findByIdAndUpdate(id, {tipoDocumento,numeroDocumento,nombre,correo, direccion, telefono, estado})
        res.redirect('/clientes')
    } catch (error){
        console.log(error)
    }
};

// Ruta para borrar cliente
module.exports.borrar = async function (req, res) {
  const id = req.params.id;
  try {
    await Cliente.findByIdAndDelete(id);
    res.redirect("/clientes");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al borrar el cliente.");
  }
};