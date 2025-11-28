function renderHistoryTable(){
    let html = `
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Libro</th>
                    <th>Usuario</th>
                    <th>Fecha Préstamo</th>
                    <th>Fecha Devolución</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    // Usar los datos de adminHistory que ya están definidos
    adminHistory.forEach(history => {
        const statusClass = history.status === 'returned' ? 'status-returned' : 
                           history.status === 'pending' ? 'status-pending' : 'status-loaned';
        const statusText = history.status === 'returned' ? 'Devuelto' : 
                          history.status === 'pending' ? 'Pendiente' : 'Activo';
        
        html += `
            <tr>
                <td><strong>#${history.id}</strong></td>
                <td>${history.book}</td>
                <td>${history.user}</td>
                <td>${history.date}</td>
                <td>${history.returnDate || 'Pendiente'}</td>
                <td><span class="status-badge ${statusClass}">${statusText}</span></td>
            </tr>
        `;
    });
    
    html += `</tbody></table>`;
    document.getElementById("adminHistoryTable").innerHTML = html;
}

// Inicializar vista de historial
document.addEventListener('DOMContentLoaded', function() {
    renderHistoryTable();
});