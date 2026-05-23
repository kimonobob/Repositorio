/* ════════════════════════════════════════════════════════
   POPUP DE PUBLICIDAD
   Control de visualización y cookies
════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('popupPublicidad');
  const btnCerrar = document.getElementById('btnCerrarPopup');
  const btnNoMostrar = document.getElementById('btnNoMostrar');

  // ══════════════════════════════════════════════════════
  //  MOSTRAR POPUP
  // ══════════════════════════════════════════════════════
  function mostrarPopup() {
    // Verificar si el usuario ya dijo "No mostrar hoy"
    const noMostrarHoy = localStorage.getItem('popupNoMostrarHoy');
    const fechaGuardada = localStorage.getItem('popupFecha');
    const fechaHoy = new Date().toDateString();

    // Si el usuario pidió no ver hoy Y la fecha es la misma, no mostrar
    if (noMostrarHoy === 'true' && fechaGuardada === fechaHoy) {
      return;
    }

    // Mostrar popup después de 1 segundo (puedes ajustar)
    setTimeout(() => {
      popup.classList.add('activo');
      document.body.style.overflow = 'hidden'; // Bloquear scroll
    }, 1000);
  }

  // ══════════════════════════════════════════════════════
  //  CERRAR POPUP
  // ══════════════════════════════════════════════════════
  function cerrarPopup() {
    popup.classList.add('cerrando');
    
    setTimeout(() => {
      popup.classList.remove('activo', 'cerrando');
      document.body.style.overflow = 'auto'; // Restaurar scroll
    }, 300);
  }

  // ══════════════════════════════════════════════════════
  //  NO MOSTRAR HOY
  // ══════════════════════════════════════════════════════
  function noMostrarHoy() {
    const fechaHoy = new Date().toDateString();
    localStorage.setItem('popupNoMostrarHoy', 'true');
    localStorage.setItem('popupFecha', fechaHoy);
    cerrarPopup();
  }

  // ══════════════════════════════════════════════════════
  //  EVENTOS
  // ══════════════════════════════════════════════════════
  
  // Cerrar con botón X
  btnCerrar.addEventListener('click', cerrarPopup);

  // No mostrar hoy
  btnNoMostrar.addEventListener('click', noMostrarHoy);

  // Cerrar con tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.classList.contains('activo')) {
      cerrarPopup();
    }
  });

  // Cerrar al hacer clic fuera del popup
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      cerrarPopup();
    }
  });

  // ══════════════════════════════════════════════════════
  //  INICIAR
  // ══════════════════════════════════════════════════════
  mostrarPopup();
});