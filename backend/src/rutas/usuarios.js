import express from 'express';
import {
    inicioSesion,
} from '../controladores/user/index.js';

const rutas = express.Router();

rutas.post('/inicio-sesion', inicioSesion);

export default rutas;