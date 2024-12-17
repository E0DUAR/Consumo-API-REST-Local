export const conexionAPI = {
    conexion, listarProductos
}

async function conexion() {
    const conexion = await fetch('http://192.168.1.34:3001/productos');
    const conexionJSON = await conexion.json();
    return conexionJSON;
}

async function listarProductos() {
  const productos = await conexion();
  return productos;
}

//document.addEventListener('DOMContentLoaded', listarProductos());