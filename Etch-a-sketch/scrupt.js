const gridsize = 800;
// let rows = 20;
const default_mode = 'neon'
const default_size = 16
const default_color = 'yellow'


let currentColor = default_color
let currentMode = default_mode
let currentSize = default_size

const sketchArea = document.querySelector('#sketch-area');
const colorPicker = document.querySelector('.color-btn')
const rainbowBtn = document.querySelector(".rainbow-btn")
const neonBtn = document.querySelector('.neon-btn')


function setCurrentColor(newColor) {
    currentColor = newColor
}

function setCurrentMode(newMode) {
    currentMode = newMode
}

function setCurrentSize(newSize){
    currentSize = newSize
}

sketchArea.style.width = sketchArea.style.height = `${gridsize}px`;


function changeBgColor(e) {
    if(currentMode ==='rainbow') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode ==='color') {
        e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = 'yellow'
    }
}


function createGrid(rows) {
    for (let i = 0; i < (rows*rows); i++) { {
            const cell = document.createElement('div');
            cell.style.width = `${(gridsize / rows)-2}px`;
            cell.style.height = `${(gridsize / rows)-2}px`;
            cell.classList.add("grid-cell");
            cell.addEventListener('mouseover',changeBgColor);
            sketchArea.appendChild(cell);
        }
    }
}



createGrid(20);









