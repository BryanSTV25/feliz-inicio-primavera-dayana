// Selecciona el botón y el reproductor de audio
const musicButton = document.getElementById('musicButton');
const musicPlayer = document.getElementById('musicPlayer');

// Inicializa el estado de reproducción
let isPlaying = false;

// Agrega un evento de clic al botón
musicButton.addEventListener('click', () => {
  if (isPlaying) {
    musicPlayer.pause(); // Pausa la música si está reproduciendo
    musicButton.innerHTML = '<i class="fas fa-play"></i>'; // Cambia el ícono a "play"
  } else {
    musicPlayer.play(); // Reproduce la música si está pausada
    musicButton.innerHTML = '<i class="fas fa-pause"></i>'; // Cambia el ícono a "pause"
  }
  isPlaying = !isPlaying; // Alterna el estado de reproducción
});