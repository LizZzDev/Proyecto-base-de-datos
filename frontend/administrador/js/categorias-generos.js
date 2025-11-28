// ============== GESTIÓN DE CATEGORÍAS Y GÉNEROS ==============
let editingIndex = null;
let selectedPaletteId = null;
let currentEditingType = null;

function showAddForm(type) {
    console.log('showAddForm llamado para:', type);
    editingIndex = null;
    selectedPaletteId = null;
    currentEditingType = type;
    
    const config = {
        category: {
            formTitle: 'categoryFormTitle',
            submitBtn: 'submitCategoryBtn',
            cancelBtn: 'cancelEditBtn',
            nameField: 'categoryName',
            descField: 'categoryDescription',
            palettesContainer: 'colorPalettes'
        },
        genre: {
            formTitle: 'genreFormTitle', 
            submitBtn: 'submitGenreBtn',
            cancelBtn: 'cancelGenreEditBtn',
            nameField: 'genreName',
            descField: 'genreDescription',
            palettesContainer: 'genreColorPalettes'
        }
    };
    
    const cfg = config[type];
    
    if (document.getElementById(cfg.formTitle)) {
        document.getElementById(cfg.formTitle).innerHTML = `<i class="fas fa-plus-circle"></i> Añadir ${type === 'category' ? 'Categoría' : 'Género'}`;
        document.getElementById(cfg.submitBtn).innerHTML = `<i class="fas fa-plus"></i> Crear ${type === 'category' ? 'Categoría' : 'Género'}`;
        document.getElementById(cfg.cancelBtn).style.display = 'none';
        
        document.getElementById(cfg.nameField).value = '';
        document.getElementById(cfg.descField).value = '';
        
        renderPalettes(cfg.palettesContainer);
        
        document.querySelectorAll('.category-item').forEach(item => {
            item.classList.remove('selected');
        });
    }
}

function selectItem(type, index) {
    console.log('selectItem llamado:', type, index);
    const items = type === 'category' ? adminCategories : adminGenres;
    const item = items[index];
    
    editingIndex = index;
    currentEditingType = type;
    selectedPaletteId = item.palette;
    
    const config = {
        category: {
            formTitle: 'categoryFormTitle',
            submitBtn: 'submitCategoryBtn', 
            cancelBtn: 'cancelEditBtn',
            nameField: 'categoryName',
            descField: 'categoryDescription',
            palettesContainer: 'colorPalettes'
        },
        genre: {
            formTitle: 'genreFormTitle',
            submitBtn: 'submitGenreBtn',
            cancelBtn: 'cancelGenreEditBtn', 
            nameField: 'genreName',
            descField: 'genreDescription',
            palettesContainer: 'genreColorPalettes'
        }
    };
    
    const cfg = config[type];
    
    if (document.getElementById(cfg.formTitle)) {
        document.getElementById(cfg.formTitle).innerHTML = `<i class="fas fa-edit"></i> Editar ${type === 'category' ? 'Categoría' : 'Género'}`;
        document.getElementById(cfg.submitBtn).innerHTML = `<i class="fas fa-save"></i> Guardar Cambios`;
        document.getElementById(cfg.cancelBtn).style.display = 'block';
        
        document.getElementById(cfg.nameField).value = item.name;
        document.getElementById(cfg.descField).value = item.description || '';
        
        renderPalettes(cfg.palettesContainer);
        
        document.querySelectorAll('.category-item').forEach((itemElement, i) => {
            itemElement.classList.toggle('selected', i === index);
        });
    }
}

function renderItems(type) {
    console.log('renderItems llamado para:', type);
    const items = type === 'category' ? adminCategories : adminGenres;
    const containerId = type === 'category' ? 'categoryList' : 'genreList';
    const countId = type === 'category' ? 'categoriesCount' : 'genresCount';
    
    const container = document.getElementById(containerId);
    const countElement = document.getElementById(countId);
    
    if (!container) {
        console.log('Contenedor no encontrado:', containerId);
        return;
    }
    
    if (items.length === 0) {
        container.innerHTML = '<p class="placeholder-text">No hay ' + (type === 'category' ? 'categorías' : 'géneros') + ' creados aún</p>';
        if (countElement) countElement.textContent = "0";
        return;
    }
    
    let html = '';
    items.forEach((item, index) => {
        html += `
            <div class="category-item ${editingIndex === index && currentEditingType === type ? 'selected' : ''}" 
                 onclick="selectItem('${type}', ${index})"
                 style="border-left-color: ${item.color}">
                <div class="category-info">
                    <div class="color-indicator" style="background: ${item.color}"></div>
                    <div class="category-details">
                        <h4>${item.name}</h4>
                        <p>${item.description || 'Sin descripción'}</p>
                    </div>
                </div>
                <button class="admin-btn action-btn btn-delete" onclick="event.stopPropagation(); deleteItem('${type}', ${index})">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
    });
    
    container.innerHTML = html;
    if (countElement) countElement.textContent = items.length;
    console.log('Items renderizados:', items.length);
}

function renderPalettes(containerId) {
    console.log('renderPalettes llamado para:', containerId);
    const container = document.getElementById(containerId);
    if (!container) {
        console.log('Contenedor de paletas no encontrado:', containerId);
        return;
    }
    
    let html = '';
    colorPalettes.forEach(palette => {
        html += `
            <div class="palette-option ${selectedPaletteId === palette.id ? 'selected' : ''}" 
                 onclick="selectPalette('${palette.id}', '${containerId}')">
                <div class="palette-colors">
                    ${palette.colors.map(color => 
                        `<div class="palette-color" style="background: ${color};"></div>`
                    ).join('')}
                </div>
                <div class="palette-info">
                    <h4>${palette.name}</h4>
                    <p>${palette.description}</p>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    console.log('Paletas renderizadas');
}

function selectPalette(paletteId, containerId) {
    console.log('selectPalette llamado:', paletteId, containerId);
    selectedPaletteId = paletteId;
    
    // Solo actualizar las paletas del contenedor específico
    const container = document.getElementById(containerId);
    if (container) {
        container.querySelectorAll('.palette-option').forEach(option => {
            option.classList.remove('selected');
        });
        container.querySelectorAll(`.palette-option[onclick*="${paletteId}"]`).forEach(option => {
            option.classList.add('selected');
        });
    }
}

function deleteItem(type, index) {
    console.log('deleteItem llamado:', type, index);
    const items = type === 'category' ? adminCategories : adminGenres;
    const itemName = items[index].name;
    
    if (confirm(`¿Eliminar ${type === 'category' ? 'la categoría' : 'el género'} "${itemName}"?`)) {
        items.splice(index, 1);
        localStorage.setItem(type === 'category' ? 'categories' : 'genres', JSON.stringify(items));
        renderItems(type);
        showAddForm(type);
    }
}

// ============== MANEJADORES DE FORMULARIOS ==============
function setupFormHandler(formId, type) {
    console.log('setupFormHandler para:', formId, type);
    const form = document.getElementById(formId);
    if (!form) {
        console.log('Formulario no encontrado:', formId);
        return;
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Formulario enviado:', type);
        
        const config = {
            category: {
                nameField: 'categoryName',
                descField: 'categoryDescription',
                cancelBtn: 'cancelEditBtn',
                storageKey: 'categories',
                items: adminCategories
            },
            genre: {
                nameField: 'genreName', 
                descField: 'genreDescription',
                cancelBtn: 'cancelGenreEditBtn', 
                storageKey: 'genres',
                items: adminGenres
            }
        };
        
        const cfg = config[type];
        const name = document.getElementById(cfg.nameField).value.trim();
        const description = document.getElementById(cfg.descField).value.trim();
        
        if (!name) {
            alert(`El nombre ${type === 'category' ? 'de la categoría' : 'del género'} es requerido.`);
            return;
        }
        
        if (!selectedPaletteId) {
            alert('Por favor selecciona una paleta de colores.');
            return;
        }
        
        const selectedPalette = colorPalettes.find(p => p.id === selectedPaletteId);
        
        if (editingIndex !== null && currentEditingType === type) {
            // Modo edición
            cfg.items[editingIndex] = {
                name: name,
                description: description,
                color: selectedPalette.colors[0],
                palette: selectedPaletteId
            };
            console.log('Item editado:', cfg.items[editingIndex]);
        } else {
            // Modo agregar
            if (cfg.items.some(item => item.name.toLowerCase() === name.toLowerCase())) {
                alert(`Este ${type === 'category' ? 'categoría' : 'género'} ya existe.`);
                return;
            }
            
            const newItem = {
                name: name,
                description: description,
                color: selectedPalette.colors[0],
                palette: selectedPaletteId
            };
            
            cfg.items.push(newItem);
            console.log('Nuevo item agregado:', newItem);
        }
        
        localStorage.setItem(cfg.storageKey, JSON.stringify(cfg.items));
        renderItems(type);
        showAddForm(type);
        notificarCambiosEnCategoriasGeneros();
        
        alert(`✅ ${type === 'category' ? 'Categoría' : 'Género'} "${name}" ${editingIndex !== null ? 'actualizada' : 'creada'} exitosamente!`);

        
    });
}

// ============== INICIALIZACIÓN ESPECÍFICA ==============
function initCategories() {
    console.log('Inicializando categorías...');
    renderItems('category');
    renderPalettes('colorPalettes');
    showAddForm('category');
    setupFormHandler('adminCategoryForm', 'category');
    
    // Configurar botón de cancelar
    const cancelEditBtn = document.getElementById('cancelEditBtn');
    if (cancelEditBtn) {
        cancelEditBtn.addEventListener('click', () => showAddForm('category'));
    }
}

function initGenres() {
    console.log('Inicializando géneros...');
    renderItems('genre');
    renderPalettes('genreColorPalettes');
    showAddForm('genre');
    setupFormHandler('adminGenreForm', 'genre');
    
    // Configurar botón de cancelar
    const cancelGenreEditBtn = document.getElementById('cancelGenreEditBtn');
    if (cancelGenreEditBtn) {
        cancelGenreEditBtn.addEventListener('click', () => showAddForm('genre'));
    }
}

// Función para notificar a otras páginas sobre cambios
function notificarCambiosEnCategoriasGeneros() {
    console.log('Notificando cambios en categorías/géneros...');
    
    // Si estamos en la misma sesión, actualizar los selects del formulario de libros
    if (typeof actualizarSelectsLibros === 'function') {
        actualizarSelectsLibros();
    }
    
    // También podríamos usar localStorage para comunicación entre pestañas
    localStorage.setItem('lastUpdate', Date.now().toString());
}

// Inicializar según la página actual
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado, verificando página actual...');
    
    if (document.getElementById('admin-categories-view')) {
        console.log('Página de categorías detectada');
        initCategories();
    }
    
    if (document.getElementById('admin-genres-view')) {
        console.log('Página de géneros detectada');
        initGenres();
    }
});