 // Получаем ссылку на холст
 const canvas = document.getElementById("rainCanvas");
 const ctx = canvas.getContext("2d");

 // Устанавливаем размер холста по размеру окна
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;

 // Создаем массив для хранения капель
 let drops = [];
 const numDrops = 500; // Количество капель

 // Заполняем массив каплями
 for (let i = 0; i < numDrops; i++) {
     drops.push({
         x: Math.random() * canvas.width,
         y: Math.random() * canvas.height,
         speed: Math.random() * 15 + 2, // Скорость капли
     });
 }

 // Функция анимации
 function animate() {
     requestAnimationFrame(animate);
     ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем холст

     // Рисуем каждую каплю и перемещаем ее вниз
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
             drop.y = 0 - Math.random() * canvas.height;
             drop.speed = Math.random() * 12 + 2;
         }
     });
 }

 // Запускаем анимацию
 animate();

 // Обновление размеров холста при изменении размеров окна
 window.addEventListener("resize", () => {
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
 });