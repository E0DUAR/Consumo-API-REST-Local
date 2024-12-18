import { conexionAPI } from "./conexion.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(event) {
    event.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try {
        await conexionAPI.crearProducto(nombre, precio, imagen);
        alert("Producto creado correctamente");
    } catch (error) {
        alert("Ha ocurrido un error al crear el producto");
        console.log("Error: ", error);
    }
}

formulario.addEventListener("submit", crearProducto);