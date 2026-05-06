# 🃏 Blackjack

Aplicación web del clásico juego de **Blackjack (21)** desarrollada con JavaScript puro, utilizando el patrón módulo para encapsular la lógica del juego.

---

## 🧠 Descripción

Este proyecto implementa una versión simplificada de Blackjack donde un jugador compite contra la computadora.

El juego genera una baraja, permite pedir cartas, detener el turno y ejecuta automáticamente el turno de la computadora en base a la puntuación del jugador.

La lógica está completamente manejada en JavaScript sin frameworks, manipulando directamente el DOM.

---

## ⚙️ Cómo funciona

* Se crea un deck de 52 cartas y se mezcla usando **Lodash**
* El jugador puede:

  * Pedir cartas
  * Detener su turno
* La computadora juega automáticamente hasta:

  * Superar al jugador, o
  * El jugador se pase de 21
* Al finalizar, se muestra el resultado mediante `alert`

---

## 🎮 Reglas implementadas

* Cartas numéricas → valor equivalente (2–10)
* J, Q, K → valen 10
* A (As) → **vale siempre 11** ⚠️ *(no es dinámico)*
* Si un jugador supera 21 → pierde automáticamente

---

## 🛠️ Tecnologías

* HTML5
* CSS3
* JavaScript (Vanilla)
* Lodash (`_.shuffle`)

---

## 📂 Estructura

```id="g0j4kb"
blackjack/
│
├── assets/cartas/     # Imágenes de las cartas
├── css/               # Estilos
├── js/                # Lógica del juego
├── index.html
└── README.md
```

---

## ▶️ Ejecución

1. Clona el repositorio:

```bash id="6o0g1r"
git clone https://github.com/tu-usuario/blackjack.git
```

2. Abre `index.html` en tu navegador.

---

## 🧩 Detalles técnicos

* Uso de IIFE (Immediately Invoked Function Expression) para encapsular variables
* Manejo de estado mediante arrays (`puntosJugadores`)
* Manipulación dinámica del DOM para renderizar cartas
* Uso de `setInterval` para simular el turno de la computadora

---

## ⚠️ Limitaciones actuales

* El As no cambia entre 1 y 11
* El resultado se muestra con `alert`
* Solo permite 1 jugador vs computadora
* Lógica parcialmente acoplada al DOM

---

## 🚧 Posibles mejoras

* [ ] Implementar valor dinámico del As
* [ ] Mostrar resultados en pantalla (sin `alert`)
* [ ] Agregar más jugadores
* [ ] Mejorar UI/UX
* [ ] Separar lógica de juego del DOM

---

## 👨‍💻 Autor

* https://github.com/guidojorgelopinto

---

## 📄 Licencia

Proyecto educativo de libre uso.
