// associations.js
import Usuario from './modeloUsuarios.js';
import Libro from './modeloLibros.js';
import Categoria from './modeloCategoria.js';
import Genero from './modeloGenero.js';
import LibroCategoria from './modeloLibroCategoria.js';
import LibroGenero from './modeloLibroGenero.js';
import Reserva from './modeloReserva.js';
import Prestamo from './modeloPrestamos.js';
import Notificacion from './modeloNotificaciones.js';

// --- RELACIONES N:M (Libros <-> Categorias/Generos) ---
Categoria.belongsToMany(Libro, { through: LibroCategoria, foreignKey: 'idcategoria', otherKey: 'idlibro' });
Libro.belongsToMany(Categoria, { through: LibroCategoria, foreignKey: 'idlibro', otherKey: 'idcategoria' });

Genero.belongsToMany(Libro, { through: LibroGenero, foreignKey: 'idgenero', otherKey: 'idlibro' });
Libro.belongsToMany(Genero, { through: LibroGenero, foreignKey: 'idlibro', otherKey: 'idgenero' });

// --- RELACIONES 1:N (Usuarios <-> Prestamos/Reservas/Notif) ---

// Un Usuario tiene muchas Reservas
Usuario.hasMany(Reserva, { foreignKey: 'iduser' });
Reserva.belongsTo(Usuario, { foreignKey: 'iduser' });

// Un Libro tiene muchas Reservas (historico)
Libro.hasMany(Reserva, { foreignKey: 'idlibro' });
Reserva.belongsTo(Libro, { foreignKey: 'idlibro' });

// Un Usuario tiene muchos Prestamos
Usuario.hasMany(Prestamo, { foreignKey: 'iduser' });
Prestamo.belongsTo(Usuario, { foreignKey: 'iduser' });

// Un Libro tiene muchos Prestamos
Libro.hasMany(Prestamo, { foreignKey: 'idlibro' });
Prestamo.belongsTo(Libro, { foreignKey: 'idlibro' });

// Un Usuario tiene muchas Notificaciones
Usuario.hasMany(Notificacion, { foreignKey: 'iduser' });
Notificacion.belongsTo(Usuario, { foreignKey: 'iduser' });

// Exportar todo junto si lo necesitas
export { 
    Usuario, Libro, Categoria, Genero, 
    LibroCategoria, LibroGenero, 
    Reserva, Prestamo, Notificacion 
};