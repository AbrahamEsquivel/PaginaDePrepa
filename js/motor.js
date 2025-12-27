// js/motor.js

// 1. Poner el título automáticamente si existe la variable
if (typeof tituloPagina !== 'undefined') {
    const tituloElement = document.getElementById('titulo-principal');
    if (tituloElement) tituloElement.innerText = tituloPagina;
}

const menuContainer = document.getElementById('menu-lateral');
const visor = document.getElementById('visor-contenido');
let consola; // Variable para guardar la referencia a la pantalla negra

// Función auxiliar para imprimir en la consola (Solo para Java)
function imprimir(texto) {
    consola = document.getElementById('consola');
    if (consola) {
        consola.innerText = texto;
    } else {
        console.warn("No se encontró la consola para imprimir.");
    }
}

// Función para limpiar consola (Solo para Java)
window.limpiarConsola = function() {
    consola = document.getElementById('consola');
    if (consola) consola.innerText = "// Listo para ejecutar...";
}

function iniciar() {
    // Verificamos si hay datos cargados
    if (typeof listaContenido === 'undefined') {
        console.error("No se encontró 'listaContenido'. Revisa que cargaste el archivo de datos correcto.");
        return;
    }

    listaContenido.forEach(item => {
        const boton = document.createElement('button');
        boton.innerText = item.titulo;
        
        // Estilos del botón
        boton.style.padding = "15px";
        boton.style.width = "100%";
        boton.style.cursor = "pointer";
        boton.style.textAlign = "left";
        boton.style.border = "none";
        boton.style.borderBottom = "1px solid #444";
        boton.style.background = "transparent";
        boton.style.color = "inherit";
        boton.style.display = "block"; 

        boton.addEventListener('click', () => {
            

            if (typeof item.ejecutar === 'function') {

                visor.innerHTML = `
                    <h2>${item.titulo}</h2>
                    <div id="consola" style="background: #000; color: #0f0; padding: 20px; font-family: monospace; border-radius: 5px; min-height: 200px; white-space: pre-wrap; margin-bottom: 10px;">// Ejecutando...</div>
                    <button onclick="limpiarConsola()" style="padding:5px 10px; cursor:pointer;">Limpiar Pantalla</button>
                `;
                

                try {
                    item.ejecutar(); 
                } catch (error) {
                    imprimir("Error en el código: " + error.message);
                }
            } 
            

            else if (item.contenido) {

                visor.innerHTML = item.contenido;

                visor.scrollTop = 0;
            }

        });

        menuContainer.appendChild(boton);
    });
}


iniciar();