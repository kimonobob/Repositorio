/* ════════════════════════════════════════════════════════
   BASE DE DATOS DE CURSOS EN VIDEO
   Organizado por ÁREAS académicas
════════════════════════════════════════════════════════ */

const CURSOS_DATA = [
  // ──────── ÁREA: MATEMÁTICAS ────────
{
    id: 7,
    titulo: "Ecuación diferencial lineal de primer orden - clase 1",
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

  {
    id: 8,
    titulo: "Ecuación diferencial lineal de primer orden  - clase 2",
    area: "matematicas",
    profesor: "Jorge Chavez Fuentes",
    duracion: "55:27",
    vistas: 2691,
    fecha: "2022-11-28",
    thumbnail: "https://img.youtube.com/vi/btjyR1eM8Yg/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/btjyR1eM8Yg",
    descripcion: "continúa hablando sobre las ecuaciones diferenciales lineales de primer orden",
    materialesUrl: "#"
  },

  {
    id: 9,
    titulo: "Ecuación diferencial lineal de primer orden - clase 3",
    area: "matematicas",
    profesor: "Jorge Chavez Fuentes",
    duracion: "01:00:40",
    vistas: 2691,
    fecha: "2022-11-28",
    thumbnail: "https://img.youtube.com/vi/8SEtZhzrtns/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/8SEtZhzrtns",
    descripcion: "continuación sobre el tema de ecuaciones diferenciales lineales de primer orden",
    materialesUrl: "#"
  },
  // ──────── ÁREA: ECONOMÍA ────────
  
  // ──────── ÁREA: Microeconomía ────────

  {
    id: 10,
    titulo: "Introducción a la Microeconomía - clase 1",
    area: "micro",
    profesor: "Yadira Mori",
    duracion: "01:54:19",
    vistas: 26040,
    fecha: "2022-02-01",
    thumbnail: "https://img.youtube.com/vi/sc9dn9dCkzA/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/sc9dn9dCkzA",
    descripcion: "continuación sobre el tema de ecuaciones diferenciales lineales de primer orden",
    materialesUrl: "#"
  },

  {
    id: 11,
    titulo: "Introducción a la Microeconomía Teoría del consumidor - clase 2",
    area: "micro",
    profesor: "Yadira Mori",
    duracion: "01:47:35",
    vistas: 26040,
    fecha: "2022-02-01",
    thumbnail: "https://img.youtube.com/vi/4ouMZ03QCyw/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/4ouMZ03QCyw",
    descripcion: "continuación sobre el tema de ecuaciones diferenciales lineales de primer orden",
    materialesUrl: "#"
  },

  {
    id: 12,
    titulo: "Introducción a la Microeconomía Elección del consumidor - clase 3",
    area: "micro",
    profesor: "Yadira Mori",
    duracion: "01:47:35",
    vistas: 3708,
    fecha: "2022-02-01",
    thumbnail: "https://img.youtube.com/vi/l3Cu32weVKg/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/l3Cu32weVKg",
    descripcion: "Elección del consumidor",
    materialesUrl: "#"
  },

  // ──────── ÁREA: Microeconomía ────────

{
    id: 13,
    titulo: "Introducción a la Macroeconomía - clase 1",
    area: "macro",
    profesor: "Alejandro olivares",
    duracion: "01:56:09",
    vistas: 8011,
    fecha: "2022-03-08",
    thumbnail: "https://img.youtube.com/vi/xxs0Bs9LERw/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/xxs0Bs9LERw",
    descripcion: "conceptos preliminares",
    materialesUrl: "#"
  },

  {
    id: 14,
    titulo: "Introducción a la Macroeconomía - clase 2",
    area: "macro",
    profesor: "Alejandro olivares",
    duracion: "01:56:09",
    vistas: 8011,
    fecha: "2022-03-08",
    thumbnail: "https://img.youtube.com/vi/SJVIo9TQmug/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/SJVIo9TQmug",
    descripcion: "PBI y economía peruana",
    materialesUrl: "#"
  },

  {
    id: 15,
    titulo: "Introducción a la Macroeconomía - clase 3",
    area: "macro",
    profesor: "Alejandro olivares",
    duracion: "02:01:19",
    vistas: 1877,
    fecha: "2022-03-08",
    thumbnail: "https://img.youtube.com/vi/qcr8gmPuO6o/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/qcr8gmPuO6o",
    descripcion: "PBI y economía peruana",
    materialesUrl: "#"
  },

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
  'micro': { nombre: 'Microeconomía', icono: '🏢' },
  'macro': { nombre: 'Macroeconomía', icono: '🌎' },
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