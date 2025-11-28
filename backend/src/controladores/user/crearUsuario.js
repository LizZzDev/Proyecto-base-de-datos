import modeloUsuarios from "../../modelos/modeloUser.js";
import bcrypt from 'bcrypt';

const CrearUsuario = async (req, res) => {
  console.log (req.body);
    const { nombre, correo, contrasena, rol } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(contrasena, 10);

    const nuevoUsuario = await modeloUsuarios.create({
      nombre,
      correo,
      contrasena: hashedPassword,
      rol
    });

    const { contrasena: _, ...userData } = nuevoUsuario.toJSON();

    return {success: true, user: userData}
  }
  catch (error) {
    console.error(error);
    return {success: false, message: 'Error al crear el usuario'}
}
}

export default CrearUsuario;