let currentColor = "black";

//after content loaded, make canvas
document.addEventListener('DOMContentLoaded', () => {
    makeCanvas(10);
});

// turn off drug and drop
let graphicPlate = document.querySelector(".graphic-canvas");
graphicPlate.addEventListener('dragstart', (e) => {
    e.preventDefault();
});

//change color brush
let currentColorPanel = document.querySelector(".current-color");
let toolPanel = document.querySelector(".tools-panel");
toolPanel.addEventListener('click', (e) => {
    if (currentColor !== undefined) {
        currentColor = e.target.dataset.color;
        currentColorPanel.style.backgroundColor = currentColor;
    }
    e.preventDefault();
});

//clear and change size
let inputSize = document.querySelector('.change-size-panel input');
let clearButton = document.querySelector(".clear-button");
clearButton.addEventListener('click', (e) => {

    graphicPlate.innerHTML = ""; //clear old canvas
    makeCanvas(inputSize.value);
});

//make the canvas
function makeCanvas(size) {

    if (size >= 10 && size <= 90) {

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
    } else {
        alert("Size must be between 10 to 90!");
    }
}


