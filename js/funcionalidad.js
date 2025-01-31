// Selecciona el ícono del menú y el sidebar
const menuIcon = document.getElementById('menuNav');
const sidebar = document.getElementById('sidebar');
const btnCerrar = document.getElementById('sidebarClose');

// Agrega un evento de clic al ícono del menú
menuIcon.addEventListener('click', () => {
    sidebar.classList.add('active');
});

btnCerrar.addEventListener('click', () => {
    sidebar.classList.remove('active');
});