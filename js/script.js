var container = document.getElementById("color-container");

for (let index = 0; index < 30; index++) {
    var colorBox = document.createElement("div");
    var colorCode = document.createElement("span");

    colorBox.classList.add("col-5", "col-md-2", "p-3", "d-flex", "justify-content-center", "align-items-center", "color-box", "shadow");
    colorCode.classList.add("color-code");

    colorBox.appendChild(colorCode);
    container.appendChild(colorBox);
}

var colorContainerEls = document.querySelectorAll(".color-box");
generateColor();

function generateColor() {
    colorContainerEls.forEach(colorBox => {
        var newColorCode = randomColor();
        colorBox.style.backgroundColor = "#" + newColorCode;
        var colorCode = colorBox.querySelector(".color-code");
        colorCode.textContent = "#" + newColorCode;
    });
}

function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars[randomNum];
    }
    return colorCode;
}