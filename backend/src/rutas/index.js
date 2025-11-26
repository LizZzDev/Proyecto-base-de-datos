import express from 'express';
import usuarios from './usuarios.js';

const rutas = express.Router();

rutas.use('/usuarios', usuarios);

export default rutas;