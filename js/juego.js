/**
 * 2C = Two of Clubs
 * 2D = Two of Diamons
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */


// Esta funcion  crea una nueva baraja
let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

let puntosJugador = 0,
    puntosComputadora = 0;


//Referencias del HTML

const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');


const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

// console.log(btnPedir); // Ver en el DOM

const crearDeck = () => {
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


    // console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck)
    return deck;
};

crearDeck();


//Esta funcion me permite tomar una carta

const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop(); // El pop va a remover el ultimo del arreglo y lo regreesa

    // console.log(deck)
    // console.log(carta); //carta debe ser de la baraja

    return carta;
}

// for( let i = 0; i <= 100; i++ ) {

// pedirCarta();

// }


//pedircarta();
const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10 
            : valor * 1;  
}

// const valor = valorCarta(pedirCarta());
// console.log({valor});

// turno computadora

const turnoComputadora = (puntosMinimos) => {

    const intervalo = setInterval(() => {

        const carta = pedirCarta();

        puntosComputadora += valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        const imgCarta = document.createElement("img");
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if (puntosComputadora >= puntosMinimos || puntosMinimos > 21) {
            clearInterval(intervalo);

            setTimeout(() => {
                if (puntosComputadora === puntosMinimos){
                    alert('Nadie gana :(');
                } else if (puntosMinimos > 21) {
                    alert('Computadora gana');
                } else if (puntosComputadora > 21) {
                    alert('Jugador gana');
                } else {
                    alert('Computadora gana');
                }
            }, 300);
        }

    }, 300); // velocidad de robo
};

//Eventos

btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta ( carta );

    puntosHTML[0].innerText = puntosJugador;

    // <!-- <img class="carta" src="assets/cartas/6C.png" alt=""> -->

    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add( 'carta');
    divCartasJugador.append(imgCarta);

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');

        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora ( puntosJugador );
    } else if (puntosJugador === 21) {
            console.warn('21, genial!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;

            turnoComputadora ( puntosJugador );

        } 
});

btnDetener.addEventListener('click', () => {

        btnPedir.disabled = true;

        btnDetener.disabled = true;

        turnoComputadora(puntosJugador);

});

btnNuevo.addEventListener('click', () => {

    console.clear();

    deck = [];
    deck = crearDeck();

    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';    
    divCartasJugador.innerHTML = '';    

    btnPedir.disabled = false;
    btnDetener.disabled = false;


});


//to do: Borrar

// console.log(16)

// turnoComputadora( 16 );

