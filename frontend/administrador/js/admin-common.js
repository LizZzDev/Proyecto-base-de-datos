// ============== VARIABLES GLOBALES ==============
let activeViewElement = null;

// ============== DATA (SIMULADA) ==============
let adminBooks = JSON.parse(localStorage.getItem("books")) || [
    {id: 1, title: "El Retrato de Dorian Gray", author: "Oscar Wilde", genre: "Clásico", description: "Una novela filosófica que explora la vanidad y la duración de la belleza.", image: ""},
    {id: 2, title: "Cien años de soledad", author: "Gabriel García Márquez", genre: "Novela", description: "La historia de la familia Buendía en el pueblo ficticio de Macondo.", image: ""}
];

let adminUsers = JSON.parse(localStorage.getItem("users")) || [
    {id: 101, username: "Juan Perez", email: "juan@mail.com", role: "user", joinDate: "2024-01-15"},
    {id: 102, username: "Admin User", email: "admin@lib.com", role: "admin", joinDate: "2024-01-10"}
];

let adminLoans = JSON.parse(localStorage.getItem("loans")) || [
    {id: 1, book: "El Alquimista", user: "Juan Perez", date: "2025-11-01", dueDate: "2025-11-15", status: "active"},
    {id: 2, book: "1984", user: "Maria Lopez", date: "2025-11-10", dueDate: "2025-11-24", status: "active"}
];

let adminHistory = JSON.parse(localStorage.getItem("history")) || [
    {id: 1, book: "La Sombra del Viento", user: "Admin User", date: "2025-10-01", returnDate: "2025-10-15", status: "returned"},
    {id: 2, book: "Don Quijote", user: "Carlos Ruiz", date: "2025-10-20", returnDate: "2025-11-05", status: "returned"},
    {id: 3, book: "Rayuela", user: "Ana Garcia", date: "2025-11-12", returnDate: null, status: "pending"}
];

let adminCategories = JSON.parse(localStorage.getItem("categories")) || [
    {name: "Fantasía", description: "Libros de fantasía y mundos imaginarios", color: "#2E8B57", palette: "nature"},
    {name: "Terror", description: "Libros de terror y suspenso", color: "#2F4F4F", palette: "night"}
];

let adminGenres = JSON.parse(localStorage.getItem("genres")) || [
    {name: "Romance", description: "Historias de amor", color: "#8A2BE2", palette: "royal"},
    {name: "Aventura", description: "Historias de acción y aventura", color: "#FF4500", palette: "sunset"}
];

// ============== PALETAS PREDETERMINADAS ==============
const colorPalettes = [
    { name: "Naturaleza", description: "Colores orgánicos y frescos", colors: ["#2E8B57", "#228B22", "#32CD32"], id: "nature" },
    { name: "Océano", description: "Azules profundos y serenos", colors: ["#1E90FF", "#00BFFF", "#87CEEB"], id: "ocean" },
    { name: "Atardecer", description: "Cálidos y vibrantes", colors: ["#FF4500", "#FF8C00", "#FFD700"], id: "sunset" },
    { name: "Royal", description: "Elegante y sofisticado", colors: ["#8A2BE2", "#9370DB", "#BA55D3"], id: "royal" },
    { name: "Fuego", description: "Energético y apasionado", colors: ["#DC143C", "#FF6347", "#FF7F50"], id: "fire" },
    { name: "Noche", description: "Misterioso y profundo", colors: ["#2F4F4F", "#696969", "#808080"], id: "night" }
];

// ============== FUNCIONES PRINCIPALES ==============
function showAdminView(listItem, viewId) {
    console.log(`Cambiando a vista: ${viewId}`);
    
    // Redirigir a la página correspondiente
    const viewMap = {
        'admin-dashboard-view': 'index.html',
        'admin-books-view': 'libros.html',
        'admin-add-book-view': 'agregar-libro.html',
        'admin-users-view': 'usuarios.html',
        'admin-loans-view': 'prestamos.html',
        'admin-categories-view': 'categorias.html',
        'admin-genres-view': 'generos.html',
        'admin-history-view': 'historial.html'
    };
    
    if (viewMap[viewId]) {
        window.location.href = viewMap[viewId];
    }
}

// ============== INICIALIZACIÓN ==============
function initAdmin(){
    // Solo mantener la lógica básica de inicialización
    activeViewElement = document.querySelector("#admin-sidebar li.active");
}

document.addEventListener('DOMContentLoaded', initAdmin);