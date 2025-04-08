// Функция для создания сетки
function createGrid(size) {
    const container = document.getElementById("container");
    container.innerHTML = ''; // Очищаем контейнер перед созданием новой сетки

    const numberOfSquares = size * size; // Общее количество квадратов
    const squareSize = 960 / size; // Размер одного квадрата

    for (let i = 0; i < numberOfSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Добавляем эффект изменения цвета при наведении
        square.addEventListener('mouseover', function () {
            square.style.backgroundColor = 'blue';
        });

        container.appendChild(square); // Добавляем квадрат в контейнер
    }
}

// Инициализация начальной сетки
createGrid(16);

// Обработчик события для кнопки "Создать новую сетку"
document.getElementById("newGrid").addEventListener("click", function () {
    let newSize = parseInt(prompt("Введите количество квадратов на сторону (до 100):"));

    // Проверка введенного значения
    if (isNaN(newSize) || newSize <= 0) {
        alert("Пожалуйста, введите корректное положительное число.");
        return;
    }

    if (newSize > 100) {
        newSize = 100; // Ограничиваем максимальный размер
    }

    createGrid(newSize); // Создаем новую сетку
});
