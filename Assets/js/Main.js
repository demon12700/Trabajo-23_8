document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const btn = document.getElementById("btnTema");
    
    const temaGuardado = localStorage.getItem("tema");

    if (temaGuardado === "oscuro") {
        body.classList.add("dark-mode");
        if (btn) btn.innerText = "☀️ Modo Claro";
    } else {
        body.classList.remove("dark-mode");
        if (btn) btn.innerText = "🌙 Modo Oscuro";
    }

    cambiarPlaneta(0)
});

function alternarModo() {
    const body = document.body;
    const btn = document.getElementById("btnTema");
    
    body.classList.toggle("dark-mode");
    
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("tema", "oscuro");
        if (btn) btn.innerText = "☀️ Modo Claro";
    } else {
        localStorage.setItem("tema", "claro");
        if (btn) btn.innerText = "🌙 Modo Oscuro";
    }
}

// Para Sistemas.html carrusel de Imagenes

const planetas = [
    {
        nombre: "Mercurio",
        imagen: "./Assets/Img/Mercurio.jpg",
        descripcion: "El planeta más cercano al Sol y el más pequeño del sistema solar."
    },
    {
        nombre: "Venus",
        imagen: "./Assets/Img/venus.jpg",
        descripcion: "El segundo planeta desde el Sol y el más caliente debido a su densa atmósfera."
    },
    {
        nombre: "Tierra",
        imagen: "./Assets/Img/Tierra.jpg",
        descripcion: "Nuestra cuna, el único mundo conocido que alberga vida."
    },
    {
        nombre: "Marte",
        imagen: "./Assets/Img/Marte.jpg",
        descripcion: "El planeta rojo, conocido por sus desiertos de óxido de hierro y delgada atmósfera."
    },
    {
        nombre: "Júpiter",
        imagen: "./Assets/Img/Jupiter.jfif",
        descripcion: "El gigante gaseoso más grande de nuestro sistema solar."
    },
    {
        nombre: "Saturno",
        imagen: "./Assets/Img/Saturno.jpg",
        descripcion: "Famoso por su deslumbrante y complejo sistema de anillos."
    },
    {
        nombre: "Urano",
        imagen: "./Assets/Img/Urano.jfif",
        descripcion: "Un gigante de hielo con una inclinación axial extrema."
    },
    {
        nombre: "Neptuno",
        imagen: "./Assets/Img/Neptuno.jfif",
        descripcion: "El planeta más distante del Sol, conocido por sus intensos vientos."
    }
];

let indicePlaneta = 0;

function cambiarPlaneta(direccion) {
    indicePlaneta += direccion;

    if (indicePlaneta < 0) {
        indicePlaneta = planetas.length - 1;
    } else if (indicePlaneta >= planetas.length) {
        indicePlaneta = 0;
    }

    const planetaActual = planetas[indicePlaneta];
    document.getElementById("planetaNombre").innerText = planetaActual.nombre;
    document.getElementById("planetaImg").src = planetaActual.imagen;
    document.getElementById("planetaImg").alt = planetaActual.nombre;
    document.getElementById("planetaDesc").innerText = planetaActual.descripcion;
}