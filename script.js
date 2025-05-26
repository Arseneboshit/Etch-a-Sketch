// Создаём начальную сетку 16x16
createGrid(16);

function createGrid(size) {
    const container = document.getElementById('container');
    container.innerHTML = ""; // очищаем старую сетку

    for (let i = 0; i < size; i++) {
        let row = createRow(container);
        for (let j = 0; j < size; j++) {
            createElement(row);
        }
    }
}

// Создаём строку и добавляем её в контейнер
function createRow(container) {
    const row = document.createElement('div');
    row.className = "row";
    container.appendChild(row);
    return row;
}

// Создаём ячейку и добавляем ей эффект затемнения
function createElement(row) {
    const elem = document.createElement('div');
    elem.className = "elem";
    row.appendChild(elem);

    // Стартовая степень затемнения
    elem.dataset.darkness = 0;

    elem.addEventListener('mouseenter', function () {
        let current = Number(elem.dataset.darkness);
        if (current < 1) {
            current += 0.1;
            current = Math.min(current, 1); // на всякий случай
            elem.dataset.darkness = current.toFixed(1);
            elem.style.backgroundColor = `rgba(0, 0, 0, ${current})`;
        }
    });
}

// Обработчик кнопки "New Grid"
const gridButton = document.getElementById("newGrid");

gridButton.addEventListener('click', function () {
    let input = prompt("Введите размер сетки (до 100):");
    let size = Number(input);

    if (size && size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert("Введите корректное число от 1 до 100.");
    }
});
