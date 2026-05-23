/* ════════════════════════════════════════════════════════
   BASE DE DATOS DE CURSOS EN VIDEO
   Organizado por ÁREAS académicas
════════════════════════════════════════════════════════ */

const CURSOS_DATA = [
  // ──────── ÁREA: MATEMÁTICAS ────────
{
    id: 7,
    titulo: "Ecuación diferencial lineal",
    area: "matematicas",
    profesor: "Jorge Chavez Fuentes",
    duracion: "01:43:53",
    vistas: 15688,
    fecha: "2022-11-28",
    thumbnail: "https://img.youtube.com/vi/PQ5_ztDXMto/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/PQ5_ztDXMto",
    descripcion: "la clase comienza en el minuto 30:40 del video",
    materialesUrl: "#"
  },
  // ──────── ÁREA: ECONOMÍA ────────
  
   // ──────── ÁREA: ECONOMETRÍA ────────
  {
    id: 1,
    titulo: "Modelo de regreción lineal general (MRLG)",
    area: "econometría",
    profesor: "Roger Laboriano M.",
    duracion: "23:19",
    vistas: 66,
    fecha: "2025-03-19",
    thumbnail: "https://img.youtube.com/vi/3GKCzyxwbLY/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/3GKCzyxwbLY",
    descripcion: "teoría y practica del modelo de regreción lineal general",
    materialesUrl: "#"
  },
  // ──────── ÁREA: FINANZAS ────────
{
    id: 2,
    titulo: "Estados Financieros: Introducción",
    area: "finanzas",
    profesor: "Carlos barriga",
    duracion: "07:49",
    vistas: 226,
    fecha: "2025-03-19",
    thumbnail: "https://img.youtube.com/vi/sZn4YRa0EiQ/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/sZn4YRa0EiQ",
    descripcion: "introducción sobre los estados financieros",
    materialesUrl: "#"
  },

  {
    id: 3,
    titulo: "Estados Financieros: Balance general",
    area: "finanzas",
    profesor: "Carlos barriga",
    duracion: "14:03",
    vistas: 95,
    fecha: "2022-11-28",
    thumbnail: "https://img.youtube.com/vi/NZmup-P9ytE/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/NZmup-P9ytE",
    descripcion: "balance general",
    materialesUrl: "#"
  },

  {
    id: 4,
    titulo: "Estados Financieros: Estado de resutlados",
    area: "finanzas",
    profesor: "Carlos barriga",
    duracion: "09:35",
    vistas: 54,
    fecha: "2022-11-28",
    thumbnail: "https://img.youtube.com/vi/xnPQRWzvcFk/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/xnPQRWzvcFk",
    descripcion: "Estado de resultados",
    materialesUrl: "#"
  },

  {
    id: 5,
    titulo: "Estados Financieros: Estado de flujo de efectivo",
    area: "finanzas",
    profesor: "Carlos barriga",
    duracion: "11:19",
    vistas: 54,
    fecha: "2022-11-28",
    thumbnail: "https://img.youtube.com/vi/R-iYSTZ9bXI/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/R-iYSTZ9bXI",
    descripcion: "Estados Financieros: Estado de flujo de efectivo",
    materialesUrl: "#"
  },

  {
    id: 6,
    titulo: "Estados Financieros: Estado de patrimonio",
    area: "finanzas",
    profesor: "Carlos barriga",
    duracion: "06:46",
    vistas: 38,
    fecha: "2022-11-28",
    thumbnail: "https://img.youtube.com/vi/YqLqT4H5BhQ/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/YqLqT4H5BhQ",
    descripcion: "Estados Financieros: Estado de patrimonio",
    materialesUrl: "#"
  },
  // ──────── ÁREA: ESTADÍSTICA ────────

  // ──────── ÁREA: INVESTIGACIÓN DE OPERACIONES ────────

  // ──────── ÁREA: CONTABILIDAD ────────

  // ──────── ÁREA: GESTIÓN ────────
];

// Definición de áreas con iconos y nombres
const AREAS = {
  'todas': { nombre: 'Todos los cursos', icono: '📚' },
  'matematicas': { nombre: 'Matemáticas', icono: '📐' },
  'economia': { nombre: 'Economía', icono: '📊' },
  'econometría': { nombre: 'Econometría', icono: '📈' },
  'finanzas': { nombre: 'Finanzas', icono: '💰' },
  'estadistica': { nombre: 'Estadística', icono: '📈' },
  'investigacion-operaciones': { nombre: 'Inv. Operaciones', icono: '🔬' },
  'contabilidad': { nombre: 'Contabilidad', icono: '💼' },
  'gestion': { nombre: 'Gestión', icono: '⚙️' }
};

// Exportar para usar en otros archivos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CURSOS_DATA, AREAS };
}