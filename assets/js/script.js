document.addEventListener('DOMContentLoaded', () => {
    const appRoot = document.getElementById('app');

    let count = 0;

    const container = document.createElement('div');
    container.className = 'counter-container';

    const btnDecrement = document.createElement('button');
    btnDecrement.innerText = '−';
    btnDecrement.className = 'btn';
    
    const displayValue = document.createElement('span');
    displayValue.innerText = count;
    displayValue.className = 'counter-value';

    const btnIncrement = document.createElement('button');
    btnIncrement.innerText = '+';
    btnIncrement.className = 'btn';

    const updateDisplay = () => {
        displayValue.innerText = count;
    };

    btnDecrement.addEventListener('click', () => {
        count--;
        updateDisplay();
    });

    btnIncrement.addEventListener('click', () => {
        count++;
        updateDisplay();
    });

    container.appendChild(btnDecrement);
    container.appendChild(displayValue);
    container.appendChild(btnIncrement);

    appRoot.appendChild(container);
});