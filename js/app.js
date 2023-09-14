let herramientaActiva = null; // Variable global para guardar la herramienta activa

class Objeto {
    constructor(nombre, material) {
        this.nombre = nombre;
        this.material = material;
    }

    mostrarEstadisticas() {
        herramientaActiva = this; // Guardar la herramienta activa
        document.getElementById("estadisticas__container").style.display = 'inline';
        document.getElementById("herramienta__datos").style.display = 'inline';
        document.getElementById('nombre').innerText = this.nombre;
        document.getElementById('Material').innerText = this.material;
        document.getElementById('daño').innerText = this.daño;
        document.getElementById('Durabilidad').innerText = this.duracion;
        document.getElementById('Encantamientos').innerText = this.encantamiento;
    }
}

class Herramienta extends Objeto {
    constructor(nombre, material, vidaUtil, daño, encantamiento, id) {
        super(nombre, material);
        this.duracion = vidaUtil;
        this.daño = daño;
        this.encantamiento = encantamiento;
        this.id = id; // Agregar id a la herramienta
    }

    soltar() {
        alert(this.nombre + " Se ha soltado ");
        document.getElementById(this.id).style.display = "none"; // Ocultar la herramienta correcta
        document.getElementById("estadisticas__container").style.display = 'none';
        document.getElementById("herramienta__datos").style.display = 'none';
    }

    atacar(enemigo) {
        alert(`Atacando ${enemigo}`);
    }
}

class Espada extends Herramienta {
    constructor(nombre, material, vidaUtil, afilado, id) {
        super(nombre, material, vidaUtil, afilado, null, id);
        this.afilado = afilado;
    }

    cortarTelaraña() {
        alert("Cortando telaraña sin parametros...");
    }

    cortarTelaraña(objeto) {
        if (objeto === "telaraña") {
            alert("Cortando telaraña con parametros...");
        } else {
            alert("Esto no es una telaraña");
        }
    }
}
class Pico extends Herramienta {
    constructor(nombre, material, vidaUtil, daño, encantamiento) {
        super(nombre, material, vidaUtil, daño, encantamiento);
    }

    picar(material) {
        alert(`Picando ${material}`);
    }
}

class Pala extends Herramienta {
    constructor(nombre, material, vidaUtil, daño, encantamiento) {
        super(nombre, material, vidaUtil, daño, encantamiento);
    }

    cavar() {
        alert("Cavando...");
    }
}

class Azada extends Herramienta {
    constructor(nombre, material, vidaUtil, daño, encantamiento) {
        super(nombre, material, vidaUtil, daño, encantamiento);
    }

    ararTierra() {
        alert("Arando la tierra...");
    }
}

class Armadura extends Objeto{
    constructor(nombre, material, vidaUtil, proteccion){
        super(nombre, material, vidaUtil);
        this.proteccion = proteccion
    }

    quitar(){
        alert("Quitando " + this.nombre);
        document.getElementById("pantalones").addEventListener.style.display = 'none'
    }
}


var espadaDiamante = new Espada(
    'Espada de Diamante',
    'Diamante',
    80,
    30,
    'espada'
);

var hachaHierro = new Herramienta(
    'Hacha de Hierro',
    'Hierro',
    100,
    69,
    "Ninguno",
    'hacha'
);

var picoHierro = new Herramienta(
    'Pico de Oro',
    'Hierro',
    150,
    5,
    "Eficiencia I",
    'pico'
);

var palaDiamante = new Herramienta(
    'Pala de Hierro',
    'Diamante',
    100,
    4,
    "Ninguno",
    'pala'
);

var azadaMadera = new Herramienta(
    'Azada de Piedra',
    'Madera',
    50,
    1,
    "Ninguno",
    'azada'
);

document.getElementById('pico').addEventListener('click', () => {
    picoHierro.mostrarEstadisticas();
});

document.getElementById('pala').addEventListener('click', () => {
    palaDiamante.mostrarEstadisticas();
});

document.getElementById('azada').addEventListener('click', () => {
    azadaMadera.mostrarEstadisticas();
});

document.getElementById('espada').addEventListener('click', () => {
    espadaDiamante.mostrarEstadisticas();
});

document.getElementById('hacha').addEventListener('click', () => {
    hachaHierro.mostrarEstadisticas();
});

document.getElementById('soltar').addEventListener('click', () => {
    if (herramientaActiva) {
        herramientaActiva.soltar();
    }
});

document.addEventListener("keyup", (evento) => {
    if (evento.keyCode === 27) {
        document.getElementById("estadisticas__container").style.display = 'none';
        document.getElementById("herramienta__datos").style.display = 'none';
    }
});