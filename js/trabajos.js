// =====================================================
//  TODOS JUNTOS POR LA FIE - trabajos.js
//  Renderizado de ciclos, asignaturas y redirección a documentos
// =====================================================

const CICLO_CONFIG = [
  { color: '#09dbea', bg: 'rgba(9,219,234,0.15)',  romano: 'I',    icon: '🔬' },
  { color: '#7a1ece', bg: 'rgba(122,28,206,0.2)',  romano: 'II',   icon: '📐' },
  { color: '#fdc20e', bg: 'rgba(253,194,14,0.15)', romano: 'III',  icon: '⚡' },
  { color: '#09dbea', bg: 'rgba(9,219,234,0.12)',  romano: 'IV',   icon: '💻' },
  { color: '#e83e8c', bg: 'rgba(232,62,140,0.15)', romano: 'V',    icon: '📡' },
  { color: '#20c997', bg: 'rgba(32,201,151,0.15)', romano: 'VI',   icon: '🔧' },
  { color: '#fdc20e', bg: 'rgba(253,194,14,0.12)', romano: 'VII',  icon: '🧠' },
  { color: '#7a1ece', bg: 'rgba(122,28,206,0.18)', romano: 'VIII', icon: '🚀' },
  { color: '#09dbea', bg: 'rgba(9,219,234,0.1)',   romano: 'IX',   icon: '🏗️' },
  { color: '#fd7c0e', bg: 'rgba(253,124,14,0.15)', romano: 'X',    icon: '🎓' }
];

document.addEventListener('DOMContentLoaded', () => {
  renderizarCiclos();
});

/* ── Generar Tarjetas de Ciclos ── */
function renderizarCiclos() {
  const grid = document.getElementById('ciclosGrid');
  if (!grid) return;

  // Actualizar estadísticas del Hero
  let totalCursos = 0;
  mallaCurricular.forEach(c => { totalCursos += c.cursos.length; });
  const elCursos = document.getElementById('statCursos');
  if (elCursos) elCursos.textContent = totalCursos;

  grid.innerHTML = '';

  mallaCurricular.forEach((cicloData, i) => {
    const cfg = CICLO_CONFIG[i] || CICLO_CONFIG[0];
    const cursos = cicloData.cursos || [];
    const preview = cursos.slice(0, 3);
    const resto = cursos.length - preview.length;

    const card = document.createElement('div');
    card.className = 'ciclo-card';
    card.style.animationDelay = `${i * 0.06}s`;

    card.innerHTML = `
      <div class="ciclo-accent" style="background: linear-gradient(90deg, ${cfg.color}, transparent);"></div>

      <div class="ciclo-header">
        <div class="ciclo-numero-wrap">
          <div class="ciclo-numero-bg" style="background:${cfg.bg}; border:1px solid ${cfg.color}33;">
            <span class="ciclo-numero">${cicloData.ciclo}</span>
            <span class="ciclo-romano">${cfg.romano}</span>
          </div>
        </div>
        <div class="ciclo-info">
          <div class="ciclo-titulo">Ciclo ${cicloData.ciclo}</div>
          <div class="ciclo-semestre">Semestre ${cicloData.ciclo}</div>
        </div>
      </div>

      <div class="ciclo-materias">
        ${preview.map(c => `
          <div class="materia-pill">
            <div class="materia-dot" style="background:${cfg.color};"></div>
            <span>${c.nombre}</span>
          </div>
        `).join('')}
        ${resto > 0 ? `<div class="materia-mas">+${resto} materias más</div>` : ''}
      </div>

      <div class="ciclo-footer">
        <span class="ciclo-badge-count">${cursos.length} cursos</span>
        <span class="ciclo-arrow">→</span>
      </div>
    `;

    // Pasamos el objeto completo del ciclo y su configuración al modal
    card.addEventListener('click', () => abrirModalCiclo(cicloData, i, cfg));
    grid.appendChild(card);
  });
}

/* ── Abrir Modal con los Cursos del Ciclo ── */
function abrirModalCiclo(cicloData, index, cfg) {
  const overlay = document.getElementById('modalOverlay');
  const contenido = document.getElementById('modalContenido');
  if (!overlay || !contenido) return;

  const cursos = cicloData.cursos || [];

  contenido.innerHTML = `
    <div class="modal-header"></div>

    <button class="modal-close" id="modalClose">✕</button>

    <div class="modal-ciclo-header">
      <div class="modal-ciclo-icon" style="background:${cfg.bg}; border:1px solid ${cfg.color}44;">
        <span style="font-family:var(--font-display);font-size:1.4rem;font-weight:900;color:${cfg.color};">
          ${cicloData.ciclo}
        </span>
      </div>
      <div class="modal-ciclo-meta">
        <h3>Ciclo ${cicloData.ciclo}</h3>
        <p>Semestre ${cicloData.ciclo} · ${cursos.length} cursos disponibles</p>
      </div>
    </div>

    <div class="modal-cursos-body">
      <div class="cursos-section-label">Selecciona un curso para ver sus trabajos</div>
      <div class="cursos-list-mejorada">
        ${cursos.map((curso, j) => {
          const icons = ['📘','📗','📙','📕','📓','📔','📒','📃'];
          const icon = icons[j % icons.length];
          return `
            <div class="curso-item-mejorado" onclick="irADocumentos('${curso.codigo}')">
              <div class="curso-item-icon" style="background:rgba(255,255,255,0.05); border:1px solid ${cfg.color}33;">
                ${icon}
              </div>
              <div class="curso-item-content">
                <div class="curso-item-codigo">${curso.codigo}</div>
                <div class="curso-item-nombre">${curso.nombre}</div>
              </div>
              <span class="curso-item-chevron">›</span>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  overlay.classList.add('activo');
  
  // Asignar eventos de cierre
  document.getElementById('modalClose').addEventListener('click', cerrarModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) cerrarModal();
  });
}

/* ── Redirección a la Ventana de Documentos ── */
function irADocumentos(codigoCurso) {
  // Redirige a documentos.html enviando el código del curso en la URL
  window.location.href = `documentos.html?curso=${codigoCurso}`;
}

/* ── Cerrar Modal ── */
// Lo dejamos aquí por si main.js no lo carga a tiempo
function cerrarModal() {
  const overlay = document.getElementById("modalOverlay");
  if (overlay) overlay.classList.remove("activo");
  document.body.style.overflow = "";
}