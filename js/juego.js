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

//Referencias del HTML

const btnPedir = document.querySelector('#btnPedir');
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

//Eventos



