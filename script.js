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
let activCellColor = ``;
document.querySelectorAll('.pixel').forEach((div) => {
    div.addEventListener('mouseover', () => {
        activCellColor = div.style.backgroundColor;
        upadateActivCellElemnt(activCellColor);
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



document.querySelector('.clear').addEventListener('click', () => {
    nowWhatWindow.classList.remove('hidden');
    document.querySelector('.page').innerHTML = ``
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

function upadateActivCellElemnt(activCellColor) {
    let activeRgb = document.querySelector('.activeRgb');
    activeRgb.innerHTML = `${activCellColor}`;
}

document.querySelectorAll('.ctrl').forEach((div) => {
    div.addEventListener('mouseover', () => {
        activCellColor = div.classList[2];
        upadateActivCellElemnt(activCellColor);
    })
})
// let red2 = 0;
// let green2 = 0;
// let blue2 = 0;

// document.querySelectorAll('.pixel').forEach((pixel) => {
//     if (green2 < 255) {
//         green2++;
//     } else {
//         green2 = 0
//     }

//     if (red2 === 255 && green2 === 255 && blue2 === 255) {
//         red2 = 0;
//         green2 = 0;
//         blue2 = 0;
//     }

//     let updatingColor = `rgb(${red2},${green2},${blue2})`;
//     pixel.style.backgroundColor = updatingColor;
// });