# 🔢 Counter Dinamico in JavaScript Puro
Un'applicazione web leggera che implementa un contatore numerico interattivo. La particolarità di questo progetto è che l'intera interfaccia utente (UI) non è scritta in HTML statico, ma viene generata dinamicamente tramite manipolazione del DOM in JavaScript.
## 📋 Descrizione
L'applicazione permette all'utente di incrementare o decrementare un valore numerico partendo da 0. Il progetto è stato sviluppato come esercizio di stile per dimostrare la capacità di manipolare il Document Object Model (DOM) senza l'ausilio di framework moderni (come React, Vue, Angular) o librerie di supporto (come jQuery).
## ✨ Funzionalità
- Valore Iniziale: Il contatore parte automaticamente da 0 al caricamento della pagina.
- Interattività:
  - Pulsante (+) per incrementare il valore.
  - Pulsante (−) per decrementare il valore.
- Rendering Dinamico: I pulsanti e il visualizzatore del numero non esistono nel file HTML sorgente; vengono creati, configurati e inseriti nella pagina da JavaScript in fase di esecuzione.
## 🛠️ Requisiti Tecnici
Il progetto rispetta i seguenti vincoli:
- Linguaggio: JavaScript (Vanilla JS/ES6).
- No Framework: Nessun utilizzo di React, Angular, Vue, Svelte, ecc.
- No jQuery: Manipolazione del DOM effettuata esclusivamente con le API native del browser (document.createElement, appendChild, ecc.).
## 📂 Struttura dei File
Il progetto è composto da tre file principali:

```
/
├── index.html    # Contiene solo il contenitore radice (<div id="app"></div>)
├── style.css     # Foglio di stile per il layout e l'estetica
└── script.js     # Logica di business e generazione dell'interfaccia
```

## 🚀 Come Eseguire il Progetto
Puoi eseguire l'applicazione seguendo il seguente link: https://andrealosenno.github.io/js-project/
## 💻 Dettagli sull'Implementazione
Il cuore dell'applicazione risiede nella funzione di inizializzazione che segue questi step logici:

Selezione: Individua il div vuoto nell'HTML.

Creazione: Genera i nodi DOM in memoria:

```
const btnIncrement = document.createElement('button');
const display = document.createElement('span');
```

Ascolto Eventi: Attacca gli Event Listeners ai pulsanti creati dinamicamente.

Iniezione: Inserisce gli elementi nel DOM rendendoli visibili all'utente:

```
container.appendChild(btnIncrement);
```
