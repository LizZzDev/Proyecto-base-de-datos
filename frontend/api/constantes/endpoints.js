export const endpoints = {
//   BASE_URL: 'http://localhost:3000/api',
//   LOGIN: '/auth/login',
    ADMIN: '/administrador',
    USER:{
        CERRAR_SESION: '/cerrarSesion',
        CERARUSUARIO: '/cerrarUsuario',
        OBTENERUSUARIOS: '/obtenerUsuarios',
        INICIOSESION: '/iniciosesion',
    },
    CATEGORIA:{
        AGEREGAR_CATEGORIA: '/agregarCategoria',
        ELIMINAR_CATEGORIA: '/eliminarCategoria',
        OBTENER_CATEGORIAS: '/obtenerCategorias',
        OBTENER_LIBRO_CATEGORIA: '/obtenerLibrosCategoria',
    },
    GENEROS:{
        AGEREGAR_GENERO: '/agregarGenero',
        OBTENER_GENEROS: '/obtenerGeneros',
        ELIMINAR_GENERO: '/eliminarGenero',
        OBTENER_GENERO: '/obtenerGenero',
        OBTENER_LIBRO_GENRO: '/obtenerLibrosGenero',
    },
    LIBROS:{
        AGREGAR_LIBRO: '/agregarLibro',
        BUSCAR_LIBRO: '/buscarLibro',
        OBTENR_LIBRO: '/obtenrLibro',
        OBTENER_LIBROS: '/obtenerLibros',
    },
    NOTIFICACIONES:{
        MANDAR_NOTIFICACION: '/mandarNotificacion',
        OBTENER_NOTIFICACIONES: '/obtenerNotificaciones',
    },
    PRESTAMOS:{
        FINALIZAR_PRESTAMO: '/finalizarPrestamo',
        OBTENER_PRESTAMOS: '/obtenerPrestamos',
        RENOVAR_PRESTAMO: '/renovarPrestamo',
        REALIZAR_PRESTAMO: '/realizarPrestamo',
    },
    RESERVAS:{
        CANCELAR_RESERVA: '/cancelarReserva',
        CANCELAR_RESERVA: '/cancelarReserva',
        OBTENER_RESERVAS: '/obtenerReservas',
        RESERVAR_LIBRO: '/reservarLibro',
    },

}