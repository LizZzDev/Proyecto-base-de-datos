import inicioSesionServicio from './inicioSesion.js';
//import crearUsuarioServicio from './crearUsuario.js';

/*export const registro = async (req, res) => {
  try {
    const user = await crearUsuarioServicio(req);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};*/

export const inicioSesion = async (req, res) => {
  try {
    const result = await inicioSesionServicio(req);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};