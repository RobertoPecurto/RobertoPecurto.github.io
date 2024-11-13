document.addEventListener('DOMContentLoaded', function () {
    // Obtener el enlace de "Servicios" y el contenedor del dropdown
    const servicesLink = document.getElementById('services-link');
    const dropdownContent = servicesLink.nextElementSibling; // Este es el .dropdown-content
    
    // Agregar un evento de clic para mostrar/ocultar el dropdown
    servicesLink.addEventListener('click', function () {
        // Verificar si el menú está visible
        const isVisible = dropdownContent.style.display === 'block';
        
        // Alternar la visibilidad
        dropdownContent.style.display = isVisible ? 'none' : 'block';
    });
});
