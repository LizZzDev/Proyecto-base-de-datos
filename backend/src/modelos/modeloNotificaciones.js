import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const modeloNotificaciones = sequelize.define('modeloNotificaciones', {
  idnotificacion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  iduser: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING(50), // Ej: 'alerta', 'recordatorio'
    allowNull: false
  },
  fechaEnvio: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  contenido: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'notificaciones',
  timestamps: false
});

export default modeloNotificaciones;