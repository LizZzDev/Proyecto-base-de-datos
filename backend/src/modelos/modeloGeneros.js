import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
 
const modeloGenero = sequelize.define('modeloGenero', {
   idgenero: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'genero',
  timestamps: false
});