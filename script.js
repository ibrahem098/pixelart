let pixelGrid = ``
let tenPixels = `
    <div class="pixel"></div>
    <div class="pixel"></div>
    <div class="pixel"></div>
    <div class="pixel"></div>
    <div class="pixel"></div>
    <div class="pixel"></div>
    <div class="pixel"></div>
    <div class="pixel"></div>
    <div class="pixel"></div>
    <div class="pixel"></div>
`;
let isMono = false;


// 1850 pixels in the grid.
for (let i = 0; i < 185; i++) {
    pixelGrid += tenPixels;
}
let updatedPixels = 0
document.querySelector('.pixelGrid').innerHTML = pixelGrid;
let selectedColorBox = document.querySelector('.selected');
let selectedColor = 'rgb(0 ,0 ,0)'
document.querySelectorAll('.color').forEach((color) => {
    color.addEventListener('click', () => {
        selectedColor = `${color.classList[1]}`;
        selectedColorBox.classList.remove('rgb(0,0,0)');
        selectedColorBox.style.backgroundColor = `${selectedColor}`;
        if (isMono) {
            document.querySelectorAll('.pixel').forEach((pixel) => {
                pixel.style.backgroundColor = `${selectedColor}`;
            })
            isMono = false
        }
    })
})

let selectedPixel = '';
document.querySelectorAll('.pixel').forEach((div) => {
    div.addEventListener('click', () => {
        div.style.backgroundColor = `${selectedColor}`;
        updatedPixels++
        document.querySelector('.updatedPixels').innerHTML = `<p>updatedPixels: ${updatedPixels}</p>`;
    })
})
document.querySelectorAll('button').forEach((button) => {
    let buttonClolor = button.classList[1]
    button.style.backgroundColor = `${buttonClolor}`;
});

const infoWindow = document.querySelector('.infoWindow');
const nowWhatWindow = document.querySelector('.nowWhatWindow');

document.querySelector('.Help').addEventListener('click', () => {
    infoWindow.classList.remove('hidden');
})
document.querySelector('.Close').addEventListener('click', () => {
    infoWindow.classList.add('hidden');
})
document.querySelector('.Close2').addEventListener('click', () => {
    nowWhatWindow.classList.add('hidden');
})



document.querySelector('.clear').addEventListener('click', () => {
    nowWhatWindow.classList.remove('hidden');
    document.querySelector('.page').innerHTML = ''
})

function fillRandom() {
    document.querySelectorAll('.pixel').forEach((pixel) => {
        let red = (Math.random() * 255);
        let green = (Math.random() * 255);
        let blue = (Math.random() * 255);
        pixel.style.backgroundColor = `rgb(${red},${green},${blue})`
    })
}

function wipe() {
    document.querySelectorAll('.pixel').forEach((pixel) => {
        pixel.style.backgroundColor = `rgb(244, 244, 244)`
    })
}

document.querySelector('.random').addEventListener('click', () => {
    fillRandom()
})
document.querySelector('.wipe').addEventListener('click', () => {
    wipe()
})

// 

function bucket(selectedColor) {
    isMono = true;
};


document.querySelector('.bucket').addEventListener('click', () => {
    bucket(selectedColor);
})