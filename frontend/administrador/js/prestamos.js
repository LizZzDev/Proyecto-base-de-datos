function renderLoansTable(){
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
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    adminLoans.forEach((loan, i) => {
        const today = new Date();
        const dueDate = new Date(loan.dueDate);
        const isOverdue = today > dueDate;
        const statusClass = isOverdue ? 'status-overdue' : 'status-loaned';
        const statusText = isOverdue ? 'Atrasado' : 'Activo';
        
        html += `
            <tr>
                <td><strong>#${loan.id}</strong></td>
                <td>${loan.book}</td>
                <td>${loan.user}</td>
                <td>${loan.date}</td>
                <td>${loan.dueDate}</td>
                <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="admin-btn action-btn primary-btn" onclick="finishLoan(${i})" title="Marcar como devuelto">
                            <i class="fas fa-check"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });
    
    html += `</tbody></table>`;
    document.getElementById("adminLoansTable").innerHTML = html;
}

function finishLoan(index) {
    if (!confirm("¿Marcar este préstamo como devuelto?")) return;
    
    let loan = adminLoans[index];
    loan.returnDate = new Date().toISOString().split('T')[0];
    loan.status = 'returned';
    
    adminHistory.push(loan);
    localStorage.setItem("history", JSON.stringify(adminHistory));
    
    adminLoans.splice(index, 1);
    localStorage.setItem("loans", JSON.stringify(adminLoans));
    
    renderLoansTable();
}

// Inicializar vista de préstamos
document.addEventListener('DOMContentLoaded', function() {
    renderLoansTable();
});