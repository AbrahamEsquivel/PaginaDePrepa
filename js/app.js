

const menuContainer = document.getElementById('menu-lateral');
const visor = document.getElementById('visor-contenido');

function cargarMenu() {
    listaDeGuias.forEach(guia => {

        const boton = document.createElement('button');
        boton.innerText = guia.titulo;
        
        boton.addEventListener('click', () => {
            mostrarGuia(guia);
        });

        menuContainer.appendChild(boton);
    });
}

function mostrarGuia(guia) {

    visor.innerHTML = guia.contenido;
    
    visor.scrollTop = 0; 
}

cargarMenu();