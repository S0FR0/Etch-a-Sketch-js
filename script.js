const container = document.getElementById('container');

const GRIDSIZE = 600;

container.style.width = `${GRIDSIZE}px`;
container.style.height = `${GRIDSIZE}px`;

const btn = document.getElementById('btn');

let col

function createGridCells(size) {

    while (container.firstChild){
        container.removeChild(container.firstChild)
    }

    for(let i = 0; i < (size * size); i++){
        
        const gridCell = document.createElement('div');

        gridCell.style.cssText = `height: ${GRIDSIZE / size - 2}px; width: ${GRIDSIZE / size - 2}px;`;
        gridCell.classList.add('cell');

        container.appendChild(gridCell);
    }
}

btn.addEventListener('click', () => {
    col = Number(prompt('Enter value: '))
    if (col > 100)
        alert('Hell nah go lower!');
    else
        createGridCells(col)
    const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
    cell.addEventListener('mouseenter', () => {
        let red = Math.random() * 255;
        let green = Math.random() * 255;
        let blue = Math.random() * 255;
        cell.style.background = `rgb(${red},${green},${blue})`
        })
    })   
});