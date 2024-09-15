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



for (let i = 0; i < 100; i++) {
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