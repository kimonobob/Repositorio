/* ════════════════════════════════════════════════════════
   BASE DE DATOS DE CURSOS EN VIDEO
   Organizado por ÁREAS académicas
════════════════════════════════════════════════════════ */

const CURSOS_DATA = [
  // ──────── ÁREA: MATEMÁTICAS ────────
  {
    id: 1,
    titulo: "Cálculo Diferencial - Límites y Derivadas",
    area: "matematicas",
    profesor: "Dr. Juan Pérez",
    duracion: "45:30",
    vistas: 1250,
    fecha: "2024-01-15",
    thumbnail: "", // Dejar vacío para placeholder
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID", // Cambiar por URL real
    descripcion: "Introducción completa a límites y derivadas con ejemplos prácticos aplicados a ingeniería económica.",
    materialesUrl: "#"
  },
  {
    id: 2,
    titulo: "Álgebra Lineal - Matrices y Determinantes",
    area: "matematicas",
    profesor: "Mg. María González",
    duracion: "52:15",
    vistas: 980,
    fecha: "2024-01-20",
    thumbnail: "",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    descripcion: "Operaciones con matrices, cálculo de determinantes y aplicaciones en sistemas de ecuaciones.",
    materialesUrl: "#"
  },

  // ──────── ÁREA: ECONOMÍA ────────
  {
    id: 3,
    titulo: "Microeconomía - Oferta y Demanda",
    area: "economia",
    profesor: "Dr. Roberto Martínez",
    duracion: "38:45",
    vistas: 2100,
    fecha: "2024-02-01",
    thumbnail: "",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    descripcion: "Análisis completo del mercado: equilibrio, elasticidades y excedentes del consumidor y productor.",
    materialesUrl: "#"
  },
  {
    id: 4,
    titulo: "Macroeconomía - PBI e Inflación",
    area: "economia",
    profesor: "Dr. Laura Ramírez",
    duracion: "41:20",
    vistas: 1750,
    fecha: "2024-02-10",
    thumbnail: "",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    descripcion: "Indicadores macroeconómicos fundamentales y su impacto en la economía nacional.",
    materialesUrl: "#"
  },

   // ──────── ÁREA: ECONOMETRÍA ────────
  {
    id: 3,
    titulo: "Modelo de regreción lineal general (MRLG)",
    area: "econometría",
    profesor: "Roger Laboriano M.",
    duracion: "23:19",
    vistas: 2100,
    fecha: "19-03-2025",
    thumbnail: "",
    videoUrl: "https://www.youtube.com/watch?v=3GKCzyxwbLY",
    descripcion: "teoría y practica del modelo de regreción lineal general",
    materialesUrl: "#"
  },
  {
    id: 4,
    titulo: "Macroeconomía - PBI e Inflación",
    area: "economia",
    profesor: "Dr. Laura Ramírez",
    duracion: "41:20",
    vistas: 1750,
    fecha: "2024-02-10",
    thumbnail: "",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    descripcion: "Indicadores macroeconómicos fundamentales y su impacto en la economía nacional.",
    materialesUrl: "#"
  },

  // ──────── ÁREA: FINANZAS ────────
  {
    id: 5,
    titulo: "Matemática Financiera - Interés Compuesto",
    area: "finanzas",
    profesor: "Mg. Carlos Ruiz",
    duracion: "35:10",
    vistas: 3200,
    fecha: "2024-02-15",
    thumbnail: "",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    descripcion: "Valor del dinero en el tiempo, cálculo de VAN, TIR y períodos de recuperación.",
    materialesUrl: "#"
  },
  {
    id: 6,
    titulo: "Evaluación de Proyectos - Flujo de Caja",
    area: "finanzas",
    profesor: "Dr. Andrés Flores",
    duracion: "48:30",
    vistas: 2850,
    fecha: "2024-02-20",
    thumbnail: "",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    descripcion: "Construcción de flujos de caja proyectados y evaluación económica de inversiones.",
    materialesUrl: "#"
  },

  // ──────── ÁREA: ESTADÍSTICA ────────
  {
    id: 7,
    titulo: "Estadística Descriptiva - Medidas de Tendencia",
    area: "estadistica",
    profesor: "Mg. Pedro Sánchez",
    duracion: "42:00",
    vistas: 1600,
    fecha: "2024-03-01",
    thumbnail: "",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    descripcion: "Cálculo de media, mediana, moda y desviación estándar con aplicaciones prácticas.",
    materialesUrl: "#"
  },
  {
    id: 8,
    titulo: "Probabilidades - Distribuciones Continuas",
    area: "estadistica",
    profesor: "Dr. Ana Torres",
    duracion: "39:45",
    vistas: 1420,
    fecha: "2024-03-05",
    thumbnail: "",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    descripcion: "Distribución normal, exponencial y su aplicación en modelos de riesgo.",
    materialesUrl: "#"
  },

  // ──────── ÁREA: INVESTIGACIÓN DE OPERACIONES ────────
  {
    id: 9,
    titulo: "Programación Lineal - Método Simplex",
    area: "investigacion-operaciones",
    profesor: "Dr. Miguel Vargas",
    duracion: "55:20",
    vistas: 2400,
    fecha: "2024-03-10",
    thumbnail: "",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    descripcion: "Resolución paso a paso del método simplex con ejemplos de maximización y minimización.",
    materialesUrl: "#"
  },
  {
    id: 10,
    titulo: "Teoría de Colas - Modelos de Espera",
    area: "investigacion-operaciones",
    profesor: "Mg. Patricia Castro",
    duracion: "44:15",
    vistas: 1890,
    fecha: "2024-03-15",
    thumbnail: "",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    descripcion: "Análisis de sistemas de colas M/M/1, M/M/c y optimización de servicios.",
    materialesUrl: "#"
  },

  // ──────── ÁREA: CONTABILIDAD ────────
  {
    id: 11,
    titulo: "Contabilidad General - Estados Financieros",
    area: "contabilidad",
    profesor: "CPC. Rosa Mendoza",
    duracion: "50:00",
    vistas: 2650,
    fecha: "2024-03-20",
    thumbnail: "",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    descripcion: "Elaboración del balance general, estado de resultados y flujo de efectivo.",
    materialesUrl: "#"
  },

  // ──────── ÁREA: GESTIÓN ────────
  {
    id: 12,
    titulo: "Gestión de Proyectos - Diagrama de Gantt",
    area: "gestion",
    profesor: "MBA. Jorge Quispe",
    duracion: "37:30",
    vistas: 1950,
    fecha: "2024-03-25",
    thumbnail: "",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    descripcion: "Planificación temporal de proyectos utilizando diagramas de Gantt y ruta crítica.",
    materialesUrl: "#"
  }
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