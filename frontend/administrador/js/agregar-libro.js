// Función para actualizar los selects de géneros y categorías
function actualizarSelectsLibros() {
    console.log('Actualizando selects de libros...');
    
    // Actualizar select de géneros
    const genreSelect = document.getElementById('add-genre');
    if (genreSelect) {
        const currentValue = genreSelect.value;
        genreSelect.innerHTML = '<option value="">Selecciona un género</option>';
        adminGenres.forEach(genre => {
            genreSelect.innerHTML += `<option value="${genre.name}">${genre.name}</option>`;
        });
        // Mantener el valor seleccionado si existe
        if (currentValue && adminGenres.some(genre => genre.name === currentValue)) {
            genreSelect.value = currentValue;
        }
    }
    
    // Actualizar select de categorías (si existe)
    const categorySelect = document.getElementById('add-category');
    if (categorySelect) {
        const currentValue = categorySelect.value;
        categorySelect.innerHTML = '<option value="">Selecciona una categoría</option>';
        adminCategories.forEach(category => {
            categorySelect.innerHTML += `<option value="${category.name}">${category.name}</option>`;
        });
        // Mantener el valor seleccionado si existe
        if (currentValue && adminCategories.some(category => category.name === currentValue)) {
            categorySelect.value = currentValue;
        }
    }
}

// Configurar formulario de agregar libro
document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando formulario de agregar libro...');
    
    // Actualizar selects al cargar la página
    actualizarSelectsLibros();
    
    // Configurar envío del formulario
    const addBookForm = document.getElementById('adminAddBookForm');
    if (addBookForm) {
        addBookForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const title = document.getElementById('add-title').value;
            const author = document.getElementById('add-author').value;
            const genre = document.getElementById('add-genre').value;
            const category = document.getElementById('add-category') ? document.getElementById('add-category').value : '';
            const image = document.getElementById('add-image').value;
            const description = document.getElementById('add-description').value;
            
            // Validaciones
            if (!title || !author || !genre) {
                alert('Por favor completa los campos obligatorios: Título, Autor y Género');
                return;
            }
            
            const newBook = {
                id: Date.now(),
                title: title,
                author: author,
                genre: genre,
                category: category,
                image: image,
                description: description
            };
            
            adminBooks.push(newBook);
            localStorage.setItem("books", JSON.stringify(adminBooks));
            
            alert(`✅ Libro "${title}" agregado exitosamente!`);
            addBookForm.reset();
            
            // Actualizar KPIs del dashboard si estamos en esa página
            if (typeof loadKPIs === 'function') {
                loadKPIs();
            }
        });
    }
});

// Función global para que otras páginas puedan actualizar los selects
window.actualizarSelectsLibros = actualizarSelectsLibros;