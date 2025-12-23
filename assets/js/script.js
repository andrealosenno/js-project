document.addEventListener('DOMContentLoaded', () => {
    const appRoot = document.getElementById('app');

    let count = 0;

    const createButton = (text, delta) => {
        const btn = document.createElement('button');
        btn.textContent = text;
        btn.className = 'btn';
        btn.dataset.delta = delta;
        return btn;
    };

    const container = document.createElement('div');
    container.className = 'counter-container';

    const displayValue = document.createElement('span');
    displayValue.textContent = count;
    displayValue.className = 'counter-value';

    container.append(createButton('−', -1), displayValue, createButton('+', 1));

    container.addEventListener('click', ({ target }) => {
        const delta = target.dataset.delta;
        if (delta) displayValue.textContent = (count += +delta);
    });

    appRoot.appendChild(container);
});
