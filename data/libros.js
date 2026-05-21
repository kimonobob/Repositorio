// =====================================================
//  ARCHIVO DE LIBROS - TODOS JUNTOS POR LA FIE
//  Agrega tus libros aquí siguiendo el mismo formato
// =====================================================

const libros = [
  {
    id: 1,
    titulo: "Macroeconomía",
    autor: "N. gregory mankiw",
    categoria: "Macroeconomía",
    anio: 2014,
    portada: "portadas/mankiw.png",
    archivo: "libros/Macroeconomía - Mankiw.pdf",
    descripcion: "Fundamentos de circuitos eléctricos para ingeniería.",
    edicion: "8va Edición"
  },
  {
    id: 2,
    titulo: "Macroeconomía - Teoría y Políticas",
    autor: "José De Gregorio",
    categoria: "Macroeconomía",
    anio: 2012,
    portada: "portadas/gregorio.png",
    archivo: "libros/Macroeconomia-De Gregorio.pdf",
    descripcion: "Teoría y políticas",
    edicion: "1da Edición"
  },
  {
    id: 3,
    titulo: "Electrónica: Teoría de Circuitos",
    autor: "Robert L. Boylestad",
    categoria: "Electronica",
    anio: 2011,
    portada: "portadas/electronica-boylestad.jpg",
    archivo: "libros/electronica-boylestad.pdf",
    descripcion: "Dispositivos y teoría de circuitos electrónicos.",
    edicion: "10ma Edición"
  },
  // ──────────────────────────────────────────────────
  // AGREGA MÁS LIBROS AQUÍ con el mismo formato:
  // {
  //   id: 4,
  //   titulo: "Nombre del Libro",
  //   autor: "Nombre del Autor",
  //   categoria: "Electrica" | "Electronica" | "Telecomunicaciones" | "Sistemas" | "Matematicas" | "Otro",
  //   anio: 2024,
  //   portada: "portadas/nombre-imagen.jpg",
  //   archivo: "libros/nombre-archivo.pdf",
  //   descripcion: "Breve descripción del libro.",
  //   edicion: "1ra Edición"
  // },
  // ──────────────────────────────────────────────────
];

// Categorías disponibles (puedes agregar más)
const categorias = [
  "Todos",
  "Macroeconomía",
  "Electronica",
  "Telecomunicaciones",
  "Sistemas",
  "Matematicas",
  "Otro"
];