import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Submission from './submission.model.js';

const modeloCategoria = sequelize.define('modeloCategoria', {
   idcategoria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  documentstatus: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  previousstatus: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'categoria',
  timestamps: false
});

// Relaciones
SubmissionHistory.belongsTo(Submission, {
  foreignKey: 'idsubmission',
  as: 'submission'
});

Submission.hasMany(SubmissionHistory, {
  foreignKey: 'idsubmission',
  as: 'history'
});