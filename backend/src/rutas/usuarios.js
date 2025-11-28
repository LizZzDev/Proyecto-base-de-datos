import express from 'express';
import {
    inicioSesion,
    crearUsuario
} from '../controladores/user/index.js';

const rutas = express.Router();

rutas.post('/inicioSesion', inicioSesion);
rutas.post('/crearUsuario', crearUsuario);



export default rutas;