/* ════════════════════════════════════════════════════════
   LÓGICA PARA VIDEOTECA ESTILO YOUTUBE
════════════════════════════════════════════════════════ */

let videosActuales = [...CURSOS_DATA];
let areaActiva = 'todas';

// ══════════════════════════════════════════════════════
//  INICIALIZACIÓN
// ══════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  generarSidebar();
  renderizarVideos(CURSOS_DATA);
  actualizarContadores();
  configurarEventos();
});

// ══════════════════════════════════════════════════════
//  SIDEBAR (Áreas)
// ══════════════════════════════════════════════════════
function generarSidebar() {
  const menu = document.getElementById('sidebarMenu');
  
  let html = '';
  
  Object.keys(AREAS).forEach(key => {
    const area = AREAS[key];
    const cantidad = key === 'todas' 
      ? CURSOS_DATA.length 
      : CURSOS_DATA.filter(v => v.area === key).length;
    
    if (cantidad > 0 || key === 'todas') {
      html += `
        <div class="sidebar-item ${key === 'todas' ? 'activo' : ''}" 
             data-area="${key}">
          <span class="sidebar-icon">${area.icono}</span>
          <span>${area.nombre}</span>
          <span class="sidebar-count">${cantidad}</span>
        </div>
      `;
    }
  });
  
  menu.innerHTML = html;
}

// ══════════════════════════════════════════════════════
//  RENDERIZADO DE VIDEOS
// ══════════════════════════════════════════════════════
function renderizarVideos(videos) {
  const grid = document.getElementById('videosGrid');
  
  if (videos.length === 0) {
    grid.innerHTML = `
      <div class="videos-vacio">
        <span class="videos-vacio-icon">🎬</span>
        <h3>No hay videos disponibles</h3>
        <p>Pronto agregaremos más contenido en esta área</p>
      </div>
    `;
    return;
  }
  
  grid.innerHTML = videos.map(video => `
    <div class="video-card" data-id="${video.id}">
      <!-- Thumbnail -->
      <div class="video-thumbnail">
        ${video.thumbnail 
          ? `<img src="${video.thumbnail}" alt="${video.titulo}" />` 
          : `<div class="video-thumbnail-placeholder">${AREAS[video.area].icono}</div>`
        }
        <div class="video-duration">${video.duracion}</div>
        <div class="video-play-overlay">
          <div class="play-icon">▶</div>
        </div>
      </div>
      
      <!-- Info -->
      <div class="video-info">
        <div class="video-avatar">${obtenerIniciales(video.profesor)}</div>
        <div class="video-details">
          <h3 class="video-title">${video.titulo}</h3>
          <p class="video-channel">${video.profesor}</p>
          <div class="video-meta">
            <span class="video-views">${formatearVistas(video.vistas)}</span>
            <span class="video-date">${formatearFecha(video.fecha)}</span>
          </div>
          <div class="video-area-tag">${AREAS[video.area].icono} ${AREAS[video.area].nombre}</div>
        </div>
      </div>
    </div>
  `).join('');
  
  // Agregar eventos de clic
  document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.id);
      abrirModalVideo(id);
    });
  });
}

// ══════════════════════════════════════════════════════
//  MODAL DE VIDEO
// ══════════════════════════════════════════════════════
function abrirModalVideo(id) {
  const video = CURSOS_DATA.find(v => v.id === id);
  if (!video) return;
  
  const modal = document.getElementById('modalContenido');
  const overlay = document.getElementById('modalOverlay');
  
  modal.innerHTML = `
    <div class="modal-video-header">
      <button class="modal-close" onclick="cerrarModal()">×</button>
      
      <div class="modal-video-player">
        ${video.videoUrl 
          ? `<iframe src="${video.videoUrl}" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowfullscreen></iframe>` 
          : `<div class="modal-video-placeholder">
               <div class="play-icon">▶</div>
               <p>Video próximamente disponible</p>
             </div>`
        }
      </div>
    </div>
    
    <div class="modal-video-body">
      <div class="modal-video-area">${AREAS[video.area].icono} ${AREAS[video.area].nombre}</div>
      
      <h2 class="modal-video-title">${video.titulo}</h2>
      
      <div class="modal-video-channel">
        <div class="modal-channel-avatar">${obtenerIniciales(video.profesor)}</div>
        <div class="modal-channel-info">
          <h4>${video.profesor}</h4>
          <p>Docente FIE</p>
        </div>
      </div>
      
      <div class="modal-video-stats">
        <div class="modal-stat-item">
          <span>👁</span>
          <span>${formatearVistas(video.vistas)}</span>
        </div>
        <div class="modal-stat-item">
          <span>⏱</span>
          <span>${video.duracion}</span>
        </div>
        <div class="modal-stat-item">
          <span>📅</span>
          <span>${formatearFecha(video.fecha)}</span>
        </div>
      </div>
      
      <div class="modal-video-description">
        <h4>📝 Descripción</h4>
        <p>${video.descripcion}</p>
      </div>
      
      <div class="modal-video-actions">
        ${video.videoUrl !== '#' 
          ? `<a href="${video.videoUrl.replace('embed/', 'watch?v=')}" 
               class="btn-video-action btn-video-primary" 
               target="_blank">
              🎬 Ver en YouTube
            </a>` 
          : ''
        }
        <a href="${video.materialesUrl}" 
           class="btn-video-action btn-video-secondary" 
           target="_blank">
          📚 Materiales del Curso
        </a>
      </div>
    </div>
  `;
  
  overlay.classList.add('activo');
  document.body.style.overflow = 'hidden';
}

function cerrarModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('activo');
  document.body.style.overflow = 'auto';
}

// ══════════════════════════════════════════════════════
//  FILTRADO POR ÁREA
// ══════════════════════════════════════════════════════
function filtrarPorArea(area) {
  areaActiva = area;
  
  // Actualizar sidebar
  document.querySelectorAll('.sidebar-item').forEach(item => {
    item.classList.remove('activo');
    if (item.dataset.area === area) {
      item.classList.add('activo');
    }
  });
  
  // Filtrar videos
  if (area === 'todas') {
    videosActuales = [...CURSOS_DATA];
  } else {
    videosActuales = CURSOS_DATA.filter(v => v.area === area);
  }
  
  // Actualizar breadcrumb
  const breadcrumb = document.getElementById('breadcrumb');
  breadcrumb.innerHTML = `
    <span class="breadcrumb-home" onclick="filtrarPorArea('todas')">🏠 Inicio</span>
    <span class="breadcrumb-separator">›</span>
    <span class="breadcrumb-current">${AREAS[area].nombre}</span>
  `;
  
  // Actualizar título
  document.getElementById('tituloSeccion').innerHTML = 
    `${AREAS[area].icono} ${AREAS[area].nombre}`;
  
  // Renderizar
  const textoBusqueda = document.getElementById('buscadorCursos').value.trim();
  if (textoBusqueda) {
    buscarVideos(textoBusqueda);
  } else {
    renderizarVideos(videosActuales);
    actualizarContadores();
  }
}

// ══════════════════════════════════════════════════════
//  BÚSQUEDA
// ══════════════════════════════════════════════════════
function buscarVideos(termino) {
  const terminoLower = termino.toLowerCase();
  
  const resultados = videosActuales.filter(video => 
    video.titulo.toLowerCase().includes(terminoLower) ||
    video.profesor.toLowerCase().includes(terminoLower) ||
    video.descripcion.toLowerCase().includes(terminoLower)
  );
  
  renderizarVideos(resultados);
  document.getElementById('contadorVideos').textContent = `${resultados.length} videos`;
}

// ══════════════════════════════════════════════════════
//  EVENTOS
// ══════════════════════════════════════════════════════
function configurarEventos() {
  // Sidebar
  document.getElementById('sidebarMenu').addEventListener('click', (e) => {
    const item = e.target.closest('.sidebar-item');
    if (item) {
      filtrarPorArea(item.dataset.area);
    }
  });
  
  // Búsqueda
  const buscador = document.getElementById('buscadorCursos');
  buscador.addEventListener('input', (e) => {
    buscarVideos(e.target.value);
  });
  
  document.getElementById('btnBuscarCurso').addEventListener('click', () => {
    buscarVideos(buscador.value);
  });
  
  // Cerrar modal
  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'modalOverlay') {
      cerrarModal();
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      cerrarModal();
    }
  });
}

// ══════════════════════════════════════════════════════
//  UTILIDADES
// ══════════════════════════════════════════════════════
function actualizarContadores() {
  document.getElementById('contadorVideos').textContent = `${videosActuales.length} videos`;
  document.getElementById('totalVideos').textContent = CURSOS_DATA.length;
}

function obtenerIniciales(nombre) {
  return nombre
    .split(' ')
    .map(n => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function formatearVistas(vistas) {
  if (vistas >= 1000) {
    return (vistas / 1000).toFixed(1) + 'K vistas';
  }
  return vistas + ' vistas';
}

function formatearFecha(fecha) {
  const date = new Date(fecha);
  const ahora = new Date();
  const diff = Math.floor((ahora - date) / (1000 * 60 * 60 * 24));
  
  if (diff === 0) return 'Hoy';
  if (diff === 1) return 'Ayer';
  if (diff < 7) return `Hace ${diff} días`;
  if (diff < 30) return `Hace ${Math.floor(diff / 7)} semanas`;
  if (diff < 365) return `Hace ${Math.floor(diff / 30)} meses`;
  return `Hace ${Math.floor(diff / 365)} años`;
}

