import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const modeloReserva = sequelize.define('modeloReserva', {
  idreserva: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idlibro: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  iduser: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fechaReserva: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  fechaRecoleccion: {
    type: DataTypes.DATE,
    allowNull: true
  },
  fechaCancelacion: {
    type: DataTypes.DATE,
    allowNull: true
  },
  estadoReserva: {
    type: DataTypes.ENUM('pendiente', 'completada', 'cancelada', 'expirada'),
    defaultValue: 'pendiente'
  }
}, {
  tableName: 'reserva',
  timestamps: false
});

export default modeloReserva;