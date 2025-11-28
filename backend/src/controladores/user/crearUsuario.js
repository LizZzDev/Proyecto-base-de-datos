import modeloUsuarios from "../../modelos/modeloUser";

const CrearUsuario = async (req, res) => {
    const { nombre, correo, contrasena, rol } = req.body;

  try {
    const nuevoUsuario = await modeloUsuarios.create({
      nombre,
      correo,
      contrasena,
      rol
    });

    return {success: true, user: nuevoUsuario}
  }
  catch (error) {
    console.error(error);
    return {success: false, message: 'Error al crear el usuario'}
}
}

export default CrearUsuario;