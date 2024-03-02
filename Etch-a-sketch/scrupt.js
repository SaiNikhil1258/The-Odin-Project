const gridsize = 800;
let rows = 14;


const sketchArea = document.querySelector('#sketch-area');

sketchArea.style.width = `${gridsize}px`;
sketchArea.style.height = `${gridsize}px`;

function createGrid() {
    for (let i = 0; i < (rows*rows); i++) { {
            const cell = document.createElement('div');
            cell.style.width = `${(gridsize / rows)-2}px`;
            cell.style.height = `${(gridsize / rows)-2}px`;
            cell.classList.add("grid-cell");
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = 'black';
            });
            sketchArea.appendChild(cell);
        }
    }
}

createGrid();









