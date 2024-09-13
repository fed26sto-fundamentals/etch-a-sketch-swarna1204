const gridContainer = document.getElementById('grid-container');
const resetButton = document.getElementById('reset');

let gridSize = 16;

function createGrid(size) {
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.addEventListener('mouseover', changeColor);
        gridContainer.appendChild(cell);
    }
}

function changeColor(e) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = "#" + randomColor;
}

function resetGrid() {
    let newSize = prompt('Enter the number of squares per side for the new grid (max 100):');
    newSize = parseInt(newSize);
    if (newSize && newSize > 0 && newSize <= 100) {
        gridSize = newSize;
        createGrid(gridSize);
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }
}

resetButton.addEventListener('click', resetGrid);

// Initial grid creation
createGrid(gridSize);