import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const modeloPrestamos = sequelize.define('modeloPrestamos', {
  idprestamos: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  iduser: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idlibro: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fechaPrestamo: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  fechaDevolucion: { // La fecha límite teórica
    type: DataTypes.DATE,
    allowNull: false
  },
  fechaDevolucionReal: { // Cuando realmente lo entregó
    type: DataTypes.DATE,
    allowNull: true
  },
  estadoPrestamo: {
    type: DataTypes.ENUM('activo', 'devuelto', 'atrasado', 'perdido'),
    defaultValue: 'activo'
  }
}, {
  tableName: 'prestamos',
  timestamps: false
});

export default modeloPrestamos;