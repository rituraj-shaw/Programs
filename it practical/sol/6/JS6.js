const body = document.querySelector('body');
let i = 1, size = 10;
const m = 10;

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const id = setInterval(function () {
    i++;
    size += 2;
    const container = document.createElement("div");
    for (let j = 1; j <= 10; j++) {
        const input = `${i * j}  `;
        container.innerText += input;
    }
    container.style.color = makeRandColor();
    container.style.fontSize = `${size}px`;
    body.appendChild(container);
    if (i === m) {
        clearInterval(id);
    }
}, 5000);