// ===============================
// MISIÓN A: PANTALLA PRINCIPAL
// ===============================

const pantalla = document.getElementById("pantalla-principal");

pantalla.innerText = "¡SCREAM FOR ME, DGETI!";

pantalla.style.color = "white";


// ===============================
// MISIÓN B: SETLIST
// ===============================

const contenedorSetlist = document.getElementById("caja-canciones");

contenedorSetlist.innerHTML = `
    <ol>
        <li>The Number of the Beast</li>
        <li>Fear of the Dark</li>
        <li>Run to the Hills</li>
    </ol>
`;


// ===============================
// MISIÓN C: AMPLIFICADORES
// ===============================

const amplificador = document.querySelector(".estado-amp");

amplificador.innerText = "🔊 VOLUMEN AL 11 - ¡PREPARADOS PARA EL ROCK!";



/*
Durante la prueba de sonido corrimos el riesgo de un ataque XSS porque
.innerHTML permite insertar código HTML directamente en la página.
Si un hacker metiera etiquetas peligrosas como <script>, ese código podría
ejecutarse en el navegador y afectar el sitio.

En cambio, .innerText es más seguro porque solo muestra texto plano.
Aunque alguien escriba etiquetas o scripts, el navegador no los ejecuta,
solo los muestra como texto normal.
*/