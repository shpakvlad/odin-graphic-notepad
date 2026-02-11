
let graphicPlate = document.querySelector(".graphic");

for (let i = 0; i < 100; i++) {
    let newDiv = document.createElement("div");

    newDiv.classList.add("one-pixel");
    newDiv.style.width = (900 / 10) + "px";
    newDiv.style.height = (900 / 10) + "px";

    graphicPlate.insertAdjacentElement("afterbegin", newDiv);
}
