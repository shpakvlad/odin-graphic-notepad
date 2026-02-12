
let graphicPlate = document.querySelector(".graphic");
graphicPlate.addEventListener('dragstart', (e) => {
    e.preventDefault();
});

for (let i = 0; i < 8100; i++) {
    let newDiv = document.createElement("div");

    newDiv.classList.add("one-pixel");
    newDiv.style.width = (900 / 90) + "px";
    newDiv.style.height = (900 / 90) + "px";

     newDiv.addEventListener('mouseenter', (e) => {
         if (e.buttons === 1) {
             e.target.style.backgroundColor = 'red';
         }
     })

    newDiv.addEventListener('mousedown', (e) => {

            e.target.style.backgroundColor = 'red';

    });

    graphicPlate.insertAdjacentElement("afterbegin", newDiv);
}
