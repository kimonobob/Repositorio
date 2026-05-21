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
    titulo: "Macroeconomics",
    autor: "Robert L. Boylestad",
    categoria: "Macroeconomía",
    anio: 2013,
    portada: "portadas/blanchard.png",
    archivo: "libros/Macroeconomics - Blanchard.pdf",
    descripcion: "libro macro",
    edicion: "6ta Edición"
  },
  {
    id: 4,
    titulo: "Macroeconomía avanzada",
    autor: "David Romer",
    categoria: "Macroeconomía",
    anio: 2006,
    portada: "portadas/romer.png",
    archivo: "libros/macroeconomía avanzada.pdf",
    descripcion: "sirve de base para los estudiantes que quieren dedicarse a la investigación en el campo de la macroeconomía y de la economía monetaria.",
    edicion: "3ra Edición"
  },
  {
    id: 5,
    titulo: "MACROECONOMÍA: ENFOQUES Y MODELOS Ejercicios resueltos",
    autor: "Felix Jiménez",
    categoria: "Macroeconomía",
    anio: 2016,
    portada: "portadas/fjimenez1.png",
    archivo: "libros/ME002_Macro_Enfoques y ejercicios.pdf",
    descripcion: "sirve de base para los estudiantes que quieren dedicarse a la investigación en el campo de la macroeconomía y de la economía monetaria.",
    edicion: "2da Edición"
  },
  {
    id: 6,
    titulo: "APUNTES DE MACROECONOMÍA INTERMEDIA",
    autor: "Felix Jiménez",
    categoria: "Macroeconomía",
    anio: 2020,
    portada: "portadas/fjimenez2.png",
    archivo: "libros/ME006_Apuntes de macro intermedia.pdf",
    descripcion: "texto introductorio de macroeconomía intermedia.",
    edicion: "6ta Edición"
  },
   {
    id: 7,
    titulo: "ECONOMÍA DE LAS POLÍTICAS SOCIALES",
    autor: "Carlos Parodi Trece",
    categoria: "Macroeconomía",
    anio: 1997,
    portada: "portadas/parodi.png",
    archivo: "libros/economia de las politicas sociales.pdf",
    descripcion: "texto introductorio de macroeconomía intermedia.",
    edicion: "1ra Edición"
  },
  {
    id: 7,
    titulo: "Crecimiento Económico Enfoques y Modelos",
    autor: "Felix Jiménez",
    categoria: "Macroeconomía",
    anio: 2011,
    portada: "portadas/fcrecimiento.png",
    archivo: "libros/Crecimiento Económico Enfoques y Modelos - Jiménez.pdf",
    descripcion: "texto de enfoques y modelos teóricos de crecimiento económico.",
    edicion: "1ra Edición"
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
  "Microeconomía",
  "Matemáticas",
  "Estadística",
  "Econometría",
  "Otro"
];