import { conexionAPI } from "./conexion.js";

const contenedorProductos = document.querySelector("[data-productos]");

async function listarProductos() {
  try {
    const listarProductosAPI = await conexionAPI.listarProductos();

    listarProductosAPI.forEach((producto) => {
      contenedorProductos.appendChild(
        crearProducto(producto.titulo, producto.precio, producto.imagen)
      );
    });
  } catch (error) {
    contenedorProductos.innerHTML = `<h2>Ha ocurrido un error al mostrar los productos</h2>`;
    console.log("Error: ", error);
  }
}

function crearProducto(titulo, precio, imagen) {
  const producto = document.createElement("div");
  producto.classList.add("card");
  producto.innerHTML = `
  
    <img alt="Placeholder image of a scenic landscape" height="200"
                            src="${imagen}"
                            width="300" />
                        <div class="card-content">
                            <h3 class="card-title">
                                ${titulo}
                            </h3>
                            <div class="card-footer">
                                <span class="card-price">
                                    ${precio}
                                </span>
                                <i class="fas fa-trash card-trash"></i>
                            </div>
                        </div>
    `;

  return producto;
}

listarProductos();
