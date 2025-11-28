function renderUsersTable(){
    let html = `
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Usuario</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Fecha Registro</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    adminUsers.forEach(user => {
        const roleClass = user.role === 'admin' ? 'role-admin' : 'role-user';
        const roleText = user.role === 'admin' ? 'Administrador' : 'Usuario';
        
        html += `
            <tr>
                <td><strong>#${user.id}</strong></td>
                <td>
                    <div class="user-info">
                        <div class="user-name">${user.username}</div>
                    </div>
                </td>
                <td>${user.email}</td>
                <td><span class="role-badge ${roleClass}">${roleText}</span></td>
                <td>${user.joinDate}</td>
            </tr>
        `;
    });
    
    html += `</tbody></table>`;
    document.getElementById("adminUsersTable").innerHTML = html;
}

// ============== AGREGAR ADMINISTRADOR ==============
function mostrarModalAgregarAdmin() {
    document.getElementById("modalAgregarAdmin").style.display = "flex";
}

function cerrarModalAgregarAdmin() {
    document.getElementById("modalAgregarAdmin").style.display = "none";
    document.getElementById("formAgregarAdmin").reset();
}

function handleAgregarAdmin(event) {
    event.preventDefault();
    
    const email = document.getElementById("admin-email").value;
    const password = document.getElementById("admin-password").value;
    const name = document.getElementById("admin-name").value;
    
    // Verificar si el usuario ya existe
    if (adminUsers.some(user => user.email === email)) {
        alert("Ya existe un usuario con este correo electrónico.");
        return;
    }
    
    // Crear nuevo administrador
    const newAdmin = {
        id: Date.now(),
        username: name,
        email: email,
        password: password, // En un caso real esto debería estar hasheado
        role: "admin",
        joinDate: new Date().toISOString().split('T')[0]
    };
    
    adminUsers.push(newAdmin);
    localStorage.setItem("users", JSON.stringify(adminUsers));
    
    alert(`✅ Administrador "${name}" agregado exitosamente!`);
    cerrarModalAgregarAdmin();
    renderUsersTable();
}

// Inicializar vista de usuarios
document.addEventListener('DOMContentLoaded', function() {
    renderUsersTable();
});