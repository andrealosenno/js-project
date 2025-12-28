const app = document.getElementById('app');

const buttonsConfig = [
    { text: '-1', value: -1 },
    { text: '+1', value: 1 },
    { text: '-5', value: -5 },
    { text: '+5', value: 5 },
    { text: '-10', value: -10 },
    { text: '+10', value: 10 },
];

let count = 0;

function createElement(tag, props = {}, text = '') {
    const element = document.createElement(tag);
    Object.assign(element, props);
    element.textContent = text;
    return element;
}

const display = createElement('h1', { id: 'counter' }, count);
const buttonContainer = createElement('div', { className: 'buttons-wrapper' });

const updateDisplay = (value) => {
    count += value;
    display.textContent = count;
};

buttonsConfig.forEach(config => {
    const btn = createElement('button', { onclick: () => updateDisplay(config.value) }, config.text);
    buttonContainer.appendChild(btn);
});

app.append(display, buttonContainer);
