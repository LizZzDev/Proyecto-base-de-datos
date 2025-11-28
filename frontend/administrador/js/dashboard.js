// ============== DASHBOARD ==============
function loadKPIs(){
    document.getElementById("kpiTotalBooks").textContent = adminBooks.length;
    document.getElementById("kpiTotalUsers").textContent = adminUsers.length;
    document.getElementById("kpiActiveLoans").textContent = adminLoans.length;
    
    const monthlyLoans = adminLoans.filter(loan => {
        const loanDate = new Date(loan.date);
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        return loanDate.getMonth() === currentMonth && loanDate.getFullYear() === currentYear;
    }).length;
    document.getElementById("kpiMonthlyLoans").textContent = monthlyLoans;
}

// Inicializar dashboard
document.addEventListener('DOMContentLoaded', function() {
    loadKPIs();
});