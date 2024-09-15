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

// for (let i = 0; i < 100; i++) {
//     pixelGrid += tenPixels;
// }
document.querySelector('.container').innerHTML = pixelGrid;

let selectedColor = 'rgb(0 ,0 ,0)'
document.querySelectorAll('.color').forEach((color) => {
    color.addEventListener('click', () => {
        selectedColor = `${color.classList[1]}`;
    })
})

let selectedPixel = '';
document.querySelectorAll('.pixel').forEach((div) => {
    div.addEventListener('click', () => {
        div.style.backgroundColor = `${selectedColor}`;
    })
})
document.querySelectorAll('button').forEach((button) => {
    let buttonClolor = button.classList[1]
    button.style.backgroundColor = `${buttonClolor}`;
});

document.querySelector('.Help').addEventListener('click', () => {
    document.querySelector('.window').classList.remove('hidden');
})