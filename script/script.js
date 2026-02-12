
let currentColor = "";

let graphicPlate = document.querySelector(".graphic");  // turn off drug and drop
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

let clearButton = document.querySelector(".clear-button");
clearButton.addEventListener('click', (e) => {

});

//make the canvas
for (let i = 0; i < 8100; i++) {
    let newDiv = document.createElement("div");

    newDiv.classList.add("one-pixel");
    newDiv.style.width = (900 / 90) + "px";
    newDiv.style.height = (900 / 90) + "px";

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


