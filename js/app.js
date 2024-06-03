const canvas = document.getElementById("rainCanvas");
const ctx = canvas.getContext("2d");

// Установка разрешения холста
canvas.width = 800; // Ширина
canvas.height = 600; // Высота

// Функция для получения размеров окна
function getWindowSize() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
}

// Обновление размеров холста при изменении размеров окна
function updateCanvasSize() {
    const { width, height } = getWindowSize();
    canvas.width = width;
    canvas.height = height;
}

window.addEventListener("resize", () => {
    updateCanvasSize();
});

// Получение начальных размеров окна
updateCanvasSize();

let drops = [];
const numDrops = 500; // Количество капель

for (let i = 0; i < numDrops; i++) {
    drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 5 + 2, // Скорость капли
    });
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем холст

    drops.forEach((drop) => {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + 10); // Длина капли
        ctx.strokeStyle = "#fff"; // Цвет капли
        ctx.lineWidth = 0.2; // Толщина линии
        ctx.stroke();

        drop.y += drop.speed; // Увеличиваем координату y для перемещения капли вниз

        // Если капля достигает нижней границы холста, переместить ее вверх и начать снова
        if (drop.y > canvas.height) {
            drop.y = 0;
            drop.x = Math.random() * canvas.width; // Перемещаем каплю в случайную позицию по горизонтали
            drop.speed = Math.random() * 5 + 2; // Обновляем скорость капли
        }
    });
}

// Запускаем анимацию
animate();

// Обновляем координаты капель при прокрутке страницы
window.addEventListener("scroll", () => {
    drops.forEach((drop) => {
        drop.y -= window.scrollY; // Учитываем прокрутку по оси Y
    });
});


