document.addEventListener('DOMContentLoaded', () => {
    makeCanvas(10);
});


let currentColor = "";

let graphicPlate = document.querySelector(".graphic-canvas");  // turn off drug and drop
graphicPlate.addEventListener('dragstart', (e) => {
    e.preventDefault();
});

let toolPanel = document.querySelector(".tools-panel");

toolPanel.addEventListener('click', (e) => {    //change color brush
    if (currentColor !== undefined) {
        currentColor = e.target.dataset.color;
    }
    e.preventDefault();
});

let inputSize = document.querySelector('.change-size-panel input');

let clearButton = document.querySelector(".clear-button");
clearButton.addEventListener('click', (e) => {

    graphicPlate.innerHTML = ""; //clear old canvas

    makeCanvas(inputSize.value);
});

//make the canvas
function makeCanvas(size) {

    let quantityPixels = size * size;

    for (let i = 0; i < quantityPixels; i++) {
        let newDiv = document.createElement("div");

        newDiv.classList.add("one-pixel");
        newDiv.style.width = (900 / size) + "px";
        newDiv.style.height = (900 / size) + "px";

        newDiv.addEventListener('mouseenter', (e) => {
            if (e.buttons === 1) {
                e.target.style.backgroundColor = currentColor;
            }
        })

        newDiv.addEventListener('mousedown', (e) => {
            e.target.style.backgroundColor = currentColor;
        });

        graphicPlate.insertAdjacentElement("afterbegin", newDiv); //insert dot to the canvas
    }
}


