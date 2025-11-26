import Usuario from './modeloUsuarios.js';
import Libro from './modeloLibros.js';
import Categoria from './modeloCategoria.js';
import Genero from './modeloGenero.js';
import LibroCategoria from './modeloLibroCategoria.js';
import LibroGenero from './modeloLibroGenero.js';
import Reserva from './modeloReserva.js';
import Prestamo from './modeloPrestamos.js';
import Notificacion from './modeloNotificaciones.js';

// --- RELACIONES N:M 
Categoria.belongsToMany(Libro, { through: LibroCategoria, foreignKey: 'idcategoria', otherKey: 'idlibro' });
Libro.belongsToMany(Categoria, { through: LibroCategoria, foreignKey: 'idlibro', otherKey: 'idcategoria' });

Genero.belongsToMany(Libro, { through: LibroGenero, foreignKey: 'idgenero', otherKey: 'idlibro' });
Libro.belongsToMany(Genero, { through: LibroGenero, foreignKey: 'idlibro', otherKey: 'idgenero' });

// --- RELACIONES 1:N 
Usuario.hasMany(Reserva, { foreignKey: 'iduser' });
Reserva.belongsTo(Usuario, { foreignKey: 'iduser' });

Libro.hasMany(Reserva, { foreignKey: 'idlibro' });
Reserva.belongsTo(Libro, { foreignKey: 'idlibro' });

Usuario.hasMany(Prestamo, { foreignKey: 'iduser' });
Prestamo.belongsTo(Usuario, { foreignKey: 'iduser' });

Libro.hasMany(Prestamo, { foreignKey: 'idlibro' });
Prestamo.belongsTo(Libro, { foreignKey: 'idlibro' });

Usuario.hasMany(Notificacion, { foreignKey: 'iduser' });
Notificacion.belongsTo(Usuario, { foreignKey: 'iduser' });

export { 
    Usuario, Libro, Categoria, Genero, 
    LibroCategoria, LibroGenero, 
    Reserva, Prestamo, Notificacion 
};