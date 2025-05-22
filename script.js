for (let i = 0; i < 16; i++) {
    let row = createRow();
    for (let j = 0; j < 16; j++) {
        createElement(row);
    }
}

function createRow() {
    let container = document.getElementById('container');
    let row = document.createElement('div');
    row.className = "row";
    container.appendChild(row);
    return row;
}

function createElement(row) {
    let elem = document.createElement('div');
    elem.className = "elem";
    row.appendChild(elem); // ← добавляем в текущий row

    elem.addEventListener('mouseenter', function() {
    // код при наведении мыши на элемент
    elem.style.backgroundColor = 'red';
    });

    elem.addEventListener('mouseleave', () => {
    elem.style.backgroundColor = '';
    });

}

