const INGERSO = []

class Auto {
    constructor(nombre,patente,hora) {
        this.nombre = nombre;
        this.patente = patente;
        this.hora = hora;
    }
}
//aqui una funcion que tome los datos del storage guardados y printee los datos en el navegador " posiciones usadas"


const ingreso = document.getElementById("botonInit");

const nuevoAuto = () => {
    
    
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