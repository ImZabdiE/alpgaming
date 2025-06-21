// Espera a que todo el HTML esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // Obtener los elementos del DOM que necesitamos
    const hamburger = document.getElementById('hamburger-icon');
    const navMenu = document.getElementById('nav-menu');
    // Seleccionamos todos los enlaces dentro del menú de navegación
    const navLinks = document.querySelectorAll('#nav-menu a');

    // Función para abrir o cerrar el menú
    const toggleMenu = () => {
        // Añade o quita la clase 'active' al icono (para la animación a 'X')
        hamburger.classList.toggle('active');
        // Añade o quita la clase 'active' al menú (para mostrarlo/ocultarlo)
        navMenu.classList.toggle('active');
    };

    // Añadir el evento de 'click' al icono de la hamburguesa
    hamburger.addEventListener('click', toggleMenu);

    // Añadir un evento de 'click' a cada enlace del menú
    // Esto hace que el menú se cierre automáticamente cuando seleccionas una sección
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Solo cerramos el menú si está abierto
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
});
