// =====================================================
//  TODOS JUNTOS POR LA FIE - main.js
//  Búsqueda, filtros y renderizado de libros
// =====================================================

let categoriaActiva = "Todos";
let busqueda = "";

/* ── Inicialización ── */
document.addEventListener("DOMContentLoaded", () => {
  renderizarFiltros();
  renderizarLibros();
  actualizarStats();
  setupSearch();
  setupModal();
  setupMenu();
});

/* ── Renderizar filtros ── */
function renderizarFiltros() {
  const contenedor = document.getElementById("filtros");
  if (!contenedor) return;

  contenedor.innerHTML = categorias.map(cat => `
    <button 
      class="filtro-btn ${cat === categoriaActiva ? "activo" : ""}" 
      onclick="filtrar('${cat}')"
    >
      ${cat}
    </button>
  `).join("");
}

/* ── Filtrar ── */
function filtrar(categoria) {
  categoriaActiva = categoria;
  renderizarFiltros();
  renderizarLibros();
}

/* ── Buscar ── */
function setupSearch() {
  const input = document.getElementById("buscador");
  const btnBuscar = document.getElementById("btnBuscar");

  if (input) {
    input.addEventListener("input", (e) => {
      busqueda = e.target.value.toLowerCase();
      renderizarLibros();
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        input.value = "";
        busqueda = "";
        renderizarLibros();
      }
    });
  }

  if (btnBuscar) {
    btnBuscar.addEventListener("click", () => {
      busqueda = input ? input.value.toLowerCase() : "";
      renderizarLibros();
    });
  }
}

/* ── Filtrar libros ── */
function librosFiltrados() {
  return libros.filter(libro => {
    const coincideCategoria =
      categoriaActiva === "Todos" || libro.categoria === categoriaActiva;

    const coincideBusqueda =
      busqueda === "" ||
      libro.titulo.toLowerCase().includes(busqueda) ||
      libro.autor.toLowerCase().includes(busqueda) ||
      libro.categoria.toLowerCase().includes(busqueda);

    return coincideCategoria && coincideBusqueda;
  });
}

/* ── Renderizar libros ── */
function renderizarLibros() {
  const grid = document.getElementById("librosGrid");
  const contador = document.getElementById("contadorLibros");
  if (!grid) return;

  const resultados = librosFiltrados();

  if (contador) {
    contador.textContent = `${resultados.length} libro${resultados.length !== 1 ? "s" : ""}`;
  }

  if (resultados.length === 0) {
    grid.innerHTML = `
      <div class="no-resultados">
        <span class="no-icon">📭</span>
        <h3>Sin resultados</h3>
        <p>No se encontraron libros para "<strong>${busqueda}</strong>"</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = resultados.map((libro, i) => `
    <div 
      class="libro-card" 
      style="animation-delay: ${i * 0.05}s"
      onclick="abrirModal(${libro.id})"
    >
      <div class="libro-portada">
        ${libro.portada
          ? `<img class="libro-portada-img" src="${libro.portada}" alt="${libro.titulo}" 
               onerror="this.parentElement.innerHTML='<div class=\\'libro-portada-placeholder\\'><span>📚</span><p>Sin portada</p></div>'">`
          : `<div class="libro-portada-placeholder"><span>📚</span><p>Sin portada</p></div>`
        }
        <span class="libro-categoria-tag">${libro.categoria}</span>
        <div class="libro-overlay">
          <span class="btn-ver">Ver libro →</span>
        </div>
      </div>

      <div class="libro-info">
        <div class="libro-titulo">${libro.titulo}</div>
        <div class="libro-autor">${libro.autor}</div>
        <div class="libro-meta">
          <span class="libro-anio">📅 ${libro.anio}</span>
          ${libro.edicion ? `<span>${libro.edicion}</span>` : ""}
        </div>
      </div>
    </div>
  `).join("");
}

/* ── Stats navbar ── */
function actualizarStats() {
  const totalEl = document.getElementById("totalLibros");
  
  // Solución: Primero verificamos que la variable 'libros' exista en esta página
  if (totalEl && typeof libros !== 'undefined') {
    totalEl.textContent = libros.length;
  }
}

/* ════════════════════════════════
   MODAL
════════════════════════════════ */
function setupModal() {
  const overlay = document.getElementById("modalOverlay");
  if (!overlay) return;

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) cerrarModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrarModal();
  });
}

function abrirModal(id) {
  const libro = libros.find(l => l.id === id);
  if (!libro) return;

  const overlay = document.getElementById("modalOverlay");
  const contenido = document.getElementById("modalContenido");
  if (!overlay || !contenido) return;

  contenido.innerHTML = `
    <div class="modal-header"></div>
    <button class="modal-close" onclick="cerrarModal()">✕</button>

    <div class="modal-body">
      <div class="modal-portada">
        ${libro.portada
          ? `<img src="${libro.portada}" alt="${libro.titulo}" 
               onerror="this.parentElement.innerHTML='<div class=\\'modal-portada-placeholder\\'>📚</div>'">`
          : `<div class="modal-portada-placeholder">📚</div>`
        }
      </div>

      <div class="modal-detalles">
        <span class="modal-cat">${libro.categoria}</span>
        <h2 class="modal-titulo">${libro.titulo}</h2>
        <p class="modal-autor">✍️ ${libro.autor}</p>
        ${libro.edicion ? `<p class="modal-edicion">📖 ${libro.edicion} — ${libro.anio}</p>` : `<p class="modal-edicion">📅 ${libro.anio}</p>`}
        ${libro.descripcion ? `<p class="modal-desc">${libro.descripcion}</p>` : ""}

        <div class="modal-actions">
          ${libro.archivo
            ? `<a href="${libro.archivo}" target="_blank" class="btn-descarga primary">
                 📥 Descargar / Abrir PDF
               </a>
               <a href="${libro.archivo}" download class="btn-descarga secondary">
                 💾 Guardar en dispositivo
               </a>`
            : `<span class="btn-descarga secondary" style="cursor:default; opacity:0.5;">
                 ⚠️ Archivo no disponible aún
               </span>`
          }
        </div>
      </div>
    </div>
  `;

  overlay.classList.add("activo");
  document.body.style.overflow = "hidden";
}

function cerrarModal() {
  const overlay = document.getElementById("modalOverlay");
  if (overlay) overlay.classList.remove("activo");
  document.body.style.overflow = "";
}

/* ── Menú Móvil ── */
function setupMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navbarLinks = document.getElementById('navbarLinks');

  if (menuToggle && navbarLinks) {
    // Abrir/Cerrar menú
    menuToggle.addEventListener('click', () => {
      navbarLinks.classList.toggle('mostrar');
    });

    // Cerrar menú al hacer clic en cualquier enlace
    const links = navbarLinks.querySelectorAll('.nav-item');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navbarLinks.classList.remove('mostrar');
      });
    });
  }
}