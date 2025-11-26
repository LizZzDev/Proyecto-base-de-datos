import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const modeloUsuarios = sequelize.define('modeloUsuarios', {
   iduser: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  contrasena: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  rol: {
    type: DataTypes.ENUM('user', 'admin'),
    allowNull: false,
    defaultValue: 'user'
  }
}, {
  tableName: 'usuarios',
  timestamps: false
});

export default modeloUsuarios;