createGrid(16); 

document.getElementById("newGrid").addEventListener("click", function() {
    let newSize = prompt("Введите количество квадратов на сторону (до 100):");

    // Проверяем, что введено число, и ограничиваем его до 100
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize <= 0) {
        alert("Введите корректное число!");
        return;
    }
    if (newSize > 100) {
        newSize = 100;
    }

    // Очищаем контейнер
    document.getElementById("container").innerHTML = '';

    // Создаем новую сетку
    createGrid(newSize);
});

function createGrid(size) {
    const container = document.getElementById("container");

    // Устанавливаем CSS Grid для контейнера
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.classList.add('square');

        // Добавляем обработчик события для изменения цвета при наведении
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = 'blue';
        });

        container.appendChild(square);
    }
}
