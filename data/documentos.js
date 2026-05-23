// =====================================================
//  TODOS JUNTOS POR LA FIE - data/documentos.js
//  Registro de Trabajos, Prácticas y Exámenes
// =====================================================

const baseTrabajos = [
  // ESTE VA A LA SECCIÓN DE TRABAJOS
  {
    id: 1,
    curso: "ECO305", // Economía Regional y Urbana
    titulo: "Trabajo Final - Economía Urbana",
    descripcion: "Análisis del desarrollo territorial y concentración urbana.",
    tipo: "trabajo", // <- ¡Esta palabra lo clasifica!
    fecha: "2025-II",
    portada: "portadas/utrabajofinaleddy.png",
    archivo: "documentos/trabajos/trabajo-final-urbana.pdf" 
  },
  // ESTE VA A LA SECCIÓN DE EXÁMENES
  {
    id: 2,
    curso: "ECO207",
    titulo: "Examen Parcial Resuelto",
    descripcion: "Solucionario de la primera unidad.",
    tipo: "examen", // <- ¡Esta palabra lo clasifica!
    fecha: "2024-II",
    portada: "portadas/practica-monetaria-2025-ii.png",
    archivo: "documentos/evaluaciones/examen-primera-unidad.pdf" 
  }
];