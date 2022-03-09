const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d'); // Присваиваем переменной объект с кучей методов для работы с 2d элементами

// c.fillRect(x, y, width, height);
// c.arc(x, y, radius, start, end, direction)

// for (let i = 0; i < 100; i++) {
//     const x = Math.random() * window.innerWidth;
//     const y = Math.random() * window.innerHeight;

//     c.beginPath();
//     c.arc(x, y, 60, 0, Math.PI * 2, false);
//     c.strokeStyle = 'green';
//     c.stroke();
// }

// const step = function() {
//     console.log('Step!!');
// };
// setInterval(step, 100); // Этот метод не подходит, тк выполняется даже при неактивной вкладке
// Также вырастает нагрузка на браузер, если есть несколько анимаций

// Для этих целей в браузере имеется специальный метод - requestAnimationFrame
// Этот метод оптимизирует создание и отображение анимации

class Circle {
    constructor(x, y, radius, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = '#5333ed';
        c.fillStyle = this.color;
        c.fill();
        c.stroke();

        this.update();
    }
    update() {
        if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;
    }
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const colorsArray = [
    '#e26a6a',
    '#d2527f',
    '#f22613',
    '#1e824c',
    '#c8f7c5',
    '#a2ded0',
    '#e87e04',
    '#1f3a93',
    '#013243',
    '#336e7b',
];

const circlesArray = [];

for (let i = 0; i < 1000; i++) {
    let radius = 10;
    let x = Math.random() * (window.innerWidth - radius * 2) + radius;
    let y = Math.random() * (window.innerHeight - radius * 2) + radius;

    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;
    
    const colorIndex = randomInteger(1, colorsArray.length - 1);
    circlesArray.push(new Circle(x, y, radius, dx, dy, colorsArray[colorIndex]));
}

function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, window.innerWidth, window.innerHeight); // Очищает полотно заданного размера
    for (let i = 0; i < circlesArray.length; i++) {
        circlesArray[i].draw();
    }
}

animate();