// Precargar imágenes
const preloadImages = () => {
    const images = [
      '/values/fondo1.jpg',
      '/values/fondo2.jpg',
      '/values/fondo3.jpg'
    ];
  
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  };
  
  preloadImages();
  
  // Event listeners
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.social-buttons button'); // Botones de la card
    const menuButtons = document.querySelectorAll('.menu-icons button'); // Botones del menú
    const menuIcon = document.getElementById('menu-icon');
    const menuContent = document.getElementById('menu-content');
    const background = document.getElementById('background');
  
    // Menú hamburguesa
    menuIcon.addEventListener('click', () => {
      const isVisible = menuContent.style.display === 'block';
      menuContent.style.display = isVisible ? 'none' : 'block';
    });
  
    // Evento para los botones del menú
    menuButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita conflictos con otros eventos
        const link = button.getAttribute('data-link'); // Obtiene el enlace del botón
        if (link) {
          window.open(link, '_blank'); // Abre el enlace en una nueva pestaña
        }
      });
    });
  
    // Detectar si la pantalla es móvil
    const isMobile = window.innerWidth <= 768;
  
    // Botones de la card (funciona en todas las pantallas)
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const link = button.getAttribute('data-link');
        if (link) {
          window.open(link, '_blank'); // Abre el enlace en una nueva pestaña
        }
      });
  
      if (!isMobile) {
        // Cambiar fondo al pasar el mouse (solo en escritorio)
        button.addEventListener('mouseenter', () => {
          const newBackground = button.getAttribute('data-bg');
          background.style.backgroundImage = `url('${newBackground}')`;
        });
  
        button.addEventListener('mouseleave', () => {
          background.style.backgroundImage = `url('/values/fondo1.jpg')`;
        });
      }
    });
  });
  