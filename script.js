
createGrid(16); 

document.getElementById("newGrid").addEventListener("click", function() {

    let newSize = prompt("Введите количество квадратов на сторону (до 100):");

    if (newSize > 100) {
        newSize = 100;
    }

    document.getElementById("container").innerHTML = '';


    createGrid(newSize);
});


function createGrid(size) {
    const container = document.getElementById("container");
    const numberOfSquares = size * size;

    const squareSize = 960 / size; 

    for (let i = 0; i < numberOfSquares; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = 'blue';
        });

        container.appendChild(square);
    }
}
