import { conexionAPI } from "./conexion.js";

const contenedorProductos = document.querySelector("[data-productos]");

export async function listarProductos() {
  try {
    const listarProductosAPI = await conexionAPI.listarProductos();

    listarProductosAPI.forEach((producto) => {
      contenedorProductos.appendChild(
        crearProducto(producto.id, producto.nombre, producto.precio, producto.imagen)
      );
    });
  } catch (error) {
    contenedorProductos.innerHTML = `<h2>Ha ocurrido un error al mostrar los productos</h2>`;
    console.log("Error: ", error);
  }
}

function crearProducto(id, nombre, precio, imagen) {
  const producto = document.createElement("div");
  producto.classList.add("card");
  producto.innerHTML = `
  
    <img alt="Placeholder image of a scenic landscape" height="200"
                            src="${imagen}"
                            width="300" />
                        <div class="card-content">
                            <h3 class="card-title">
                                ${nombre}
                            </h3>
                            <div class="card-footer">
                                <span class="card-price">
                                    ${precio}
                                </span>
                                <i class="fas fa-trash card-trash" data-eliminar="${id}"></i>
                            </div>
                        </div>
    `;

  return producto;
}

listarProductos();
