# Counter Dinamico JS

Un'applicazione contatore semplice, modulare e leggera realizzata con JavaScript puro (Vanilla JS). Questo progetto dimostra come gestire lo stato del DOM e generare elementi dinamicamente tramite configurazione.

## 🚀 Funzionalità

- **Contatore Interattivo**: Incrementa e decrementa il valore visualizzato in tempo reale.
- **Configurazione Modulare**: I pulsanti sono generati dinamicamente da un array di configurazione, rendendo facile l'aggiunta di nuovi valori.
- **Design Moderno**: Interfaccia pulita con layout responsive basato su CSS Grid e Flexbox.
- **Codice Manutenibile**: Struttura del codice organizzata in sezioni logiche (Configurazione, Stato, Helper, UI).

## 🛠️ Tecnologie Utilizzate

- HTML5
- CSS3 (Flexbox & Grid)
- Vanilla JavaScript (ES6+)

## 📂 Struttura del Progetto

```text
/
├── index.html              # Punto di ingresso dell'applicazione
└── assets/
    ├── css/
    │   └── style.css       # Stili dell'applicazione
    └── js/
        └── script.js       # Logica del contatore e configurazione
```

## ⚙️ Personalizzazione

È possibile aggiungere, rimuovere o modificare i pulsanti semplicemente aggiornando l'array `buttonsConfig` all'inizio del file `assets/js/script.js`.

Esempio:

```javascript
const buttonsConfig = [
    { text: '-1', value: -1 },
    { text: '+1', value: 1 },
    // Aggiungi qui nuovi pulsanti, es:
    { text: '+100', value: 100 }
];
```

## 📦 Come Usare

Puoi trovare l'app al seguente sito: https://andrealosenno.github.io/js-project/
