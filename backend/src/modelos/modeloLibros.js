import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
  

const modeloLibros = sequelize.define('modeloLibros', {
   idlibro: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  autor: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  sinopsis: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  fechapublicacion: {
    type: DataTypes.DATE,
    allowNull: false
  },
  paginas: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'libro',
  timestamps: false
});

export default modeloLibros;
