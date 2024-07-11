const INGERSO = []
const precioHora = 1;

class Auto {
    constructor(nombre,patente,hora) {
        this.nombre = nombre;
        this.patente = patente;
        this.hora = hora;
    }
}

//aqui una funcion que tome los datos del storage guardados y printee los datos en el navegador " posiciones usadas"
function disponibilidad (){

    checkstorage();
    if(INGERSO.length <= 19){
        console.log("tienes disponibilidad")
    } else{
        console.log(" el estacionamiento esta lleno")
    }
}

const ingreso = document.getElementById("botonInit");

const nuevoAuto = () => {
    disponibilidad();
    
    
    this.nombre = document.getElementById("nuevo--nombre").value;
    this.patente = document.getElementById("matricula--Numero").value;
    const hora = new Date().toLocaleTimeString(); 
    
    const nuevoIngreso = new Auto (nombre, patente, hora)
    
    INGERSO.push(nuevoIngreso);
    console.log(INGERSO);
    setStorage();
}

function setStorage(){
    localStorage.setItem("autos",JSON.stringify(INGERSO));
}

ingreso.addEventListener("click", nuevoAuto);

function checkstorage(){
    let storage = localStorage.getItem("autos")
    let autos = JSON.parse(storage)
}
