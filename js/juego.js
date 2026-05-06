//Patron modulo

(() => {
    "use strict";

    // Esta funcion  crea una nueva baraja
    let deck = [];
    const tipos = ["C", "D", "H", "S"],
        especiales = ["A", "J", "Q", "K"];

    let puntosJugadores = [];

    //Referencias del HTML

    const btnPedir = document.querySelector("#btnPedir"),
        btnDetener = document.querySelector("#btnDetener"),
        btnNuevo = document.querySelector("#btnNuevo");

    const divCartasJugadores = document.querySelectorAll(".divCartas"),
        puntosHTML = document.querySelectorAll("small");

    //Inicializa el juego
    const inicialiazarJuego = (numJugadores = 2) => {
        deck = crearDeck();

        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach((elem) => (elem.innerText = 0));
        divCartasJugadores.forEach((elem) => (elem.innerHTML = ""));

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    };

    // console.log(btnPedir); // Ver en el DOM

    const crearDeck = () => {
        deck = [];
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }

        for (let tipo of tipos) {
            for (let esp of especiales) {
                deck.push(esp + tipo);
            }
        }
        return _.shuffle(deck);
    };

    //Esta funcion me permite tomar una carta

    const pedirCarta = () => {
        if (deck.length === 0) {
            throw "No hay cartas en el deck";
        }
        return deck.pop();
    };

    //eSTA FUNCION SIRVE PARA OBTENER EL VALOR DE LA CARTA
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
    };

    const acumularPuntos = (turno, carta) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    };

    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement("img");
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add("carta");
        divCartasJugadores[turno].append(imgCarta);
    };

    const determinarGanador = () => {
        const [puntosMinimos, puntosComputadora] = puntosJugadores;

        setTimeout(() => {
            if (puntosComputadora === puntosMinimos) {
                alert("Nadie gana :(");
            } else if (puntosMinimos > 21) {
                alert("Computadora gana");
            } else if (puntosComputadora > 21) {
                alert("Jugador gana");
            } else {
                alert("Computadora gana");
            }
        }, 300);
    };

    // turno computadora

    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;

        const intervalo = setInterval(() => {
            const carta = pedirCarta();
            const puntosComputadora = acumularPuntos(
                puntosJugadores.length - 1,
                carta,
            );

            crearCarta(carta, puntosJugadores.length - 1); // const imgCarta = document.createElement("img");

            // 🔥 condición correcta
            if (puntosComputadora >= puntosMinimos || puntosMinimos > 21) {
                clearInterval(intervalo);
            }
        }, 300);
        determinarGanador();
    };

    //Eventos

    btnPedir.addEventListener("click", () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(0, carta);

        crearCarta(carta, 0);

        if (puntosJugador > 21) {
            console.warn("Lo siento mucho, perdiste");

            btnPedir.disabled = true;
            btnDetener.disabled = true;

            turnoComputadora(puntosJugador);
        } else if (puntosJugador === 21) {
            console.warn("21, genial!");
            btnPedir.disabled = true;
            btnDetener.disabled = true;

            turnoComputadora(puntosJugadores[0]);
        }
    });

    btnDetener.addEventListener("click", () => {
        btnPedir.disabled = true;

        btnDetener.disabled = true;

        turnoComputadora(puntosJugadores[0]);
    });

    btnNuevo.addEventListener("click", () => {
        inicialiazarJuego();
    });
})();
