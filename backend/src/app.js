// app.js
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
//import mainRoutes from './rutas/index.js';
import { PORT } from './config/constantes.js';
import sequelize from './config/db.js';
dotenv.config(); 

const app = express();

// Middleware generales
app.use(cors()); // permite peticiones desde otros dominios
app.use(express.json()); // parsea JSON en body
app.use(express.urlencoded({ extended: true })); // parsea formularios
app.use(cookieParser()); // para sesiones y tokens

// Sesiones
app.use(
  session({
    secret: process.env.SECRET,      
    resave: false,                  
    saveUninitialized: false,        
    cookie: { 
      secure: process.env.NODE_ENV === "production", 
      maxAge: 1000 * 60 * 60 * 2 
    }        
  })
);

//  Rutas principales
//app.use('/api', mainRoutes);

//  Ruta de prueba
app.get('/', (req, res) => {
  res.send('Plataforma de biblioteca funcionando');
});

// Verificación de conexión a PostgreSQL
sequelize.authenticate()
  .then(() => console.log('Conectado a PostgreSQL con Sequelize'))
  .catch((err) => console.error('Error al conectar con Sequelize:', err.message));


//Inicializacion del servicio
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});