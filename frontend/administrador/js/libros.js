// ============== TABLAS ==============
function renderBooksTable(booksToRender = adminBooks){
    let html = `
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Género</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    booksToRender.forEach((book, i) => {
        const isLoaned = adminLoans.some(loan => loan.book === book.title && loan.status === 'active');
        const status = isLoaned ? 'Prestado' : 'Disponible';
        const statusClass = isLoaned ? 'status-loaned' : 'status-available';
        
        html += `
            <tr>
                <td><strong>#${book.id}</strong></td>
                <td>
                    <div class="book-info">
                        <div class="book-title">${book.title}</div>
                        <div class="book-desc">${book.description.substring(0, 80)}...</div>
                    </div>
                </td>
                <td>${book.author}</td>
                <td><span class="genre-badge">${book.genre}</span></td>
                <td><span class="status-badge ${statusClass}">${status}</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="admin-btn action-btn btn-delete" onclick="deleteBook(${i})" title="Eliminar libro">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });
    
    html += `</tbody></table>`;
    document.getElementById("adminBooksTable").innerHTML = html;
}

function deleteBook(index) {
    if (confirm("¿Estás seguro de que quieres eliminar este libro?")) {
        adminBooks.splice(index, 1);
        localStorage.setItem("books", JSON.stringify(adminBooks));
        renderBooksTable();
    }
}

// Inicializar vista de libros
document.addEventListener('DOMContentLoaded', function() {
    renderBooksTable();
});