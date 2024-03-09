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
const grid = document.querySelector('.grid')
const clearBtn = document.querySelector('.resetBtn')
const sizeSlider = document.querySelector('.size-slider')
const sizeValue = document.querySelector('.slide-value')
const grid_cell = document.querySelector('.grid-cell')


// colorPicker.addEventListener("click",()=>console.log("color mode"))
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)
colorPicker.oninput = (e) => setCurrentColor(e.target.value)
colorPicker.onclick = () => setCurrentMode('color')
rainbowBtn.onclick = () => setCurrentMode('rainbow')
neonBtn.onclick = () => setCurrentMode('neon')
clearBtn.onclick = () => {
    clearGrid()
    // createGrid(currentSize)
}



function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
}

function setCurrentColor(newColor) {
    currentColor = newColor
}

function setCurrentMode(newMode) {
    currentMode = newMode
    activateButton(newMode)
}

function setCurrentSize(newSize) {
    currentSize = newSize
}

sketchArea.style.width = sketchArea.style.height = `${gridsize}px`;


function changeBgColor(e) {
    if (currentMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = 'white'
    } else if (currentMode === 'neon') {
        e.target.style.backgroundColor = "black"
    }
}


function createGrid(rows) {
    for (let i = 0; i < (rows * rows); i++) {
        const cell = document.createElement('div');
        cell.style.width = `${(gridsize / rows) - 2}px`;
        cell.style.height = `${(gridsize / rows) - 2}px`;
        cell.classList.add("grid-cell");
        cell.addEventListener('mouseover', changeBgColor);
        sketchArea.appendChild(cell);
    }
}
function clearGrid() {
    sketchArea.innerHTML = ''
    // createGrid(currentSize)
}

function activateButton(newMode) {
    const buttons = [colorPicker,rainbowBtn,neonBtn]
    buttons.forEach(button => {
        if (button) {
            button.classList.remove('active')
        }
    })
    if (newMode === 'rainbow') {
        rainbowBtn.classList.add('active')
    } else if (newMode === 'color') {
        colorPicker.classList.add('active')
    }
    else if (newMode === 'neon') {
        neonBtn.classList.add('active')
    }
}



function changeSize(value) {
    setCurrentSize(value)
    clearGrid()
    createGrid(value)
}


window.onload = () => {
    createGrid(default_size)
    activateButton(default_mode)
}







