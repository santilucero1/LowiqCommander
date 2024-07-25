// Función para alternar el modo oscuro y claro
function toggleMode() {
    const body = document.body;
    const overlayTopImg = document.getElementById('overlayTop').querySelector('img');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        overlayTopImg.src = 'images/B.svg'; // Cambia la imagen en modo claro
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        overlayTopImg.src = 'images/white.svg'; // Cambia la imagen en modo oscuro
    }
}

// Añade el evento de clic a la imagen superior para cambiar el modo
document.getElementById('overlayTop').addEventListener('click', toggleMode);

// Añade el evento de clic a la imagen central para manejar las superposiciones
document.getElementById('centralImage').addEventListener('click', function() {
    var overlays = document.querySelectorAll('.overlay');
    overlays.forEach(function(overlay) {
        if (overlay.style.display === 'block') {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 500); // Espera a que termine la transición antes de ocultar
        } else {
            overlay.style.display = 'block';
            setTimeout(() => {
                overlay.style.opacity = '1';
            }, 0); // Inicia la transición de opacidad
        }
    });
});
