import { conexionAPI } from "./conexion.js";
const contenedorProductos = document.querySelector("[data-productos]");

contenedorProductos.addEventListener("click",  (event) => {
    
    if (event.target.classList.contains("card-trash")) {
        
        const id = event.target.getAttribute("data-eliminar");
        console.log(id, "presionado");

        try {
            conexionAPI.eliminarProducto(id);
            alert("producto eliminado");
            //window.location.reload();
          } catch (error) {
            console.error("error desde el archivo eliminarProducto",error);
          }

    }
});