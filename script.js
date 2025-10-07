// Función para manejar el envío simulado del formulario de contacto
function handleFormSubmit(event) {
    // Previene el comportamiento predeterminado de recarga del formulario
    event.preventDefault();
    const contactMessage = document.getElementById('contact-message');
    
    // Simulación de la obtención de datos
    const name = document.getElementById('name').value;
    
    // Mostrar mensaje de éxito simulado
    contactMessage.textContent = `¡Gracias, ${name}! Tu mensaje ha sido enviado. Te responderé pronto.`;
    contactMessage.classList.remove('hidden');
    contactMessage.classList.add('text-accent');
    
    // Limpiar formulario y ocultar mensaje después de 5 segundos
    setTimeout(() => {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        contactMessage.classList.add('hidden');
    }, 5000);
}

// Lógica para el menú móvil
document.getElementById('menu-button').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    // Alterna la clase 'hidden' para mostrar u ocultar el menú
    mobileMenu.classList.toggle('hidden');
});

// Ocultar menú móvil al hacer clic en un enlace de navegación
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});
