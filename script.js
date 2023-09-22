function obtenerUrlImagenAleatoria() {
    const imagenesFlores = [
        'https://i.ibb.co/VW6j1Sp/margarita.png',
        'https://i.ibb.co/qkGK9yM/girasol3.png',
        'https://i.ibb.co/XZGB6H5/girasol2.png',
        'https://i.ibb.co/854thcB/girasol.png',
        'https://i.ibb.co/ZdcyVdb/flor.png'
    ];
    const indiceAleatorio = Math.floor(Math.random() * imagenesFlores.length);
    return imagenesFlores[indiceAleatorio];
}

function explotarRegalo() {
    const mensajeInicial = document.getElementById("mensaje-inicial");
    const regalo = document.getElementById("regalo");
    const mensajeFinal = document.getElementById("mensaje-final");
    const lluviaFlores = document.getElementById("lluvia-flores");

    mensajeInicial.style.display = "none";
    regalo.style.display = "none";
    mensajeFinal.style.display = "block";

    // Utiliza setInterval para generar flores continuamente
    const generadorFlores = setInterval(function() {
        for (let i = 0; i < 10; i++) { // Genera 10 flores en cada intervalo
            const flor = document.createElement("div");
            flor.classList.add("flor");

            // Genera posiciones aleatorias en la ventana
            const posicionX = Math.random() * window.innerWidth;
            const posicionY = -50; // Comienza desde arriba de la ventana

            // Configura la posición inicial
            flor.style.left = posicionX + "px";
            flor.style.top = posicionY + "px";

            // Configura la imagen de la flor
            flor.style.backgroundImage = `url('${obtenerUrlImagenAleatoria()}')`;

            // Agrega la flor a la lluvia
            lluviaFlores.appendChild(flor);

            // Elimina las flores después de un tiempo para evitar sobrecarga
            setTimeout(() => {
                lluviaFlores.removeChild(flor);
            }, 5000); // Duración de las flores en pantalla en milisegundos (5 segundos)
        }
    }, 1000); // Intervalo de generación en milisegundos (por ejemplo, cada 1 segundo)
}
