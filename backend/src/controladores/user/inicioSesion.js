import modeloUsuarios  from "../../modelos/modeloUser.js";
import bcrypt from 'bcrypt';

/**
 * Servicio de inicio de sesión.
 *
 * Busca un usuario por correo, valida la contraseña y retorna los datos del usuario
 * sin incluir la contraseña.
 *
 * @async
 * @function iniciarSesion
 * @param {Object} req - Objeto con los datos de la petición.
 * @param {string} req.correo - Correo electrónico del usuario.
 * @param {string} req.contrasena - Contraseña en texto plano ingresada por el usuario.
 * 
 * 
*/

const iniciarSesion = async (req) =>  {
    const {correo, contrasena} = req;

    try {
        const user = await modeloUsuarios.findOne({ where: { correo } });

        if (!user) {
        return { success: false, message: 'Usuario no encontrado' };
        }

        const isMatch = await bcrypt.compare(contrasena, user.contrasena);
        if (!isMatch) {
        return { success: false, message: 'Contraseña incorrecta' };
        }

        const { contrasena: _, ...userData } = user.toJSON();
        return { success: true, user: userData };

    } catch (error) {
        console.error(error);
        return { success: false, message: 'Error en el servicio de inicio de sesion' };
    }
}

export default iniciarSesion;