import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const modeloLibroCategoria = sequelize.define('modeloLibroCategoria', {
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
  
  idcategoria: {
    type: DataTypes.INTEGER,
    primaryKey: false,
    references: {
      model: 'categoria',
      key: 'idcategoria'  
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  }

}, {
  tableName: 'libro_categoria', 
  timestamps: false              
});

export default modeloLibroCategoria;