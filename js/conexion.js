export const conexionAPI = {
  conexion,
  listarProductos,
  crearProducto
};

async function conexion() {
  const conexion = await fetch("http://192.168.1.34:3001/productos");
  const conexionJSON = await conexion.json();
  return conexionJSON;
}

async function listarProductos() {
  const productos = await conexion();
  return productos;
}

async function crearProducto(nombre, precio, imagen) {
  const conexion = await fetch("http://192.168.1.34:3001/productos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombre: nombre,
      precio: `$ ${precio}`,
      imagen: imagen,
    }),
  });

  const conexionJSON = await conexion.json();

  if(!conexion.ok){
    throw new Error("Ha ocurrido un error al enviar el video");
  }

  return conexionJSON;
}
