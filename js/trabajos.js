// =====================================================
//  TODOS JUNTOS POR LA FIE - trabajos.js
//  Renderizado de ciclos y asignaturas de la malla
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
  renderizarCiclos();
});

/* ── Generar Tarjetas de Ciclos ── */
function renderizarCiclos() {
  const grid = document.getElementById("ciclosGrid");
  if (!grid) return;

  grid.innerHTML = mallaCurricular.map((ciclo, i) => `
    <div 
      class="ciclo-card" 
      style="animation: fadeIn 0.4s ease forwards; animation-delay: ${i * 0.05}s; opacity: 0;"
      onclick="abrirModalCiclo(${ciclo.ciclo})"
    >
      <div class="ciclo-bg-num">${ciclo.romano}</div>
      <div class="ciclo-icon">${ciclo.ciclo === 10 ? '🎓' : '📂'}</div>
      <div class="ciclo-info">
        <h3>Ciclo ${ciclo.ciclo}</h3>
        <p>${ciclo.cursos.length} asignaturas</p>
      </div>
    </div>
  `).join("");
}

/* ── Abrir Modal con los Cursos del Ciclo ── */
function abrirModalCiclo(numeroCiclo) {
  // Buscar la info del ciclo en la base de datos (malla.js)
  const dataCiclo = mallaCurricular.find(c => c.ciclo === numeroCiclo);
  if (!dataCiclo) return;

  const overlay = document.getElementById("modalOverlay");
  const contenido = document.getElementById("modalContenido");
  if (!overlay || !contenido) return;

  // Construir el HTML de la lista de cursos
  const cursosHTML = dataCiclo.cursos.map(curso => `
    <div class="curso-item" onclick="console.log('Ir a trabajos de: ${curso.codigo}')">
      <div class="curso-info-wrapper">
        <span class="curso-codigo">${curso.codigo}</span>
        <span class="curso-nombre">${curso.nombre}</span>
      </div>
      <span class="curso-arrow">→</span>
    </div>
  `).join("");

  // Inyectar el diseño del modal (usamos una clase extra "modal-body-cursos" para ajustar el grid)
  contenido.innerHTML = `
    <div class="modal-header"></div>
    <button class="modal-close" onclick="cerrarModal()">✕</button>

    <div class="modal-body modal-body-cursos">
      <div class="modal-cursos-header">
        <span class="modal-cat">Plan Curricular</span>
        <h2 class="modal-titulo">Ciclo ${dataCiclo.romano}</h2>
        <p class="modal-autor">Selecciona una asignatura para ver sus trabajos</p>
      </div>
      
      <div class="cursos-list">
        ${cursosHTML}
      </div>
    </div>
  `;

  // Mostrar modal
  overlay.classList.add("activo");
  document.body.style.overflow = "hidden";
}