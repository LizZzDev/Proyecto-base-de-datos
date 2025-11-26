import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const modeloLibroGenero = sequelize.define('modeloLibroGenero', {
  idlibro: {
    type: DataTypes.INTEGER,
    primaryKey: false,
    references: {
      model: 'libro', 
      key: 'idlibro'       
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  },
    idGenero: {
    type: DataTypes.INTEGER,
    primaryKey: false,
    references: {
      model: 'genero', 
      key: 'idgenero'  
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  }
}, {
  tableName: 'librogenero', 
  timestamps: false            
});

export default modeloLibroGenero;