const boton = document.getElementById("botonInit")

const apretar = () => {
    /*pedimos la cantidad de autos que vana  ingresar */
    console.log("cantidad de posiciones")
    let cantidad = parseInt(prompt("cuantos autos van a ser"))
    console.log(cantidad)
    /* ciclamos el numero cantidad para armar las posiciones */
    console.log("abajo ciclamos la cantidad")
    
    for (i = 1; i <= cantidad; i++) {
        console.log(i)

    const nuevoDiv = document.createElement('div')

    // Creamos un h2 y un botón para anidar dentro del div
    const titulo = document.createElement('h2')
    titulo.textContent = 'Auto ' + i

    const boton = document.createElement('button')
    boton.textContent = 'Timer'
    boton.id = "timer"

    // Añadimos el h2 y el botón dentro del div
    nuevoDiv.appendChild(titulo)
    nuevoDiv.appendChild(boton)

    // Añadimos el nuevo div al contenedor
    contenedor.appendChild(nuevoDiv)

    }
}
boton.addEventListener("click", apretar)

/* Averiguar como hacer para que esto funcione */
const botonAuto = getElementById("timer")

/* esto tenemos que ver como anidarlo dentro del desarrollo anterior */
const apretarBoton = () =>{
    console.log("apretado")
}

botonAuto.addEventListener('click', apretarBoton);