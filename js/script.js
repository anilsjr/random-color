// Get the container element where color boxes will be added
var container = document.getElementById("color-container");

// Create 30 color boxes and append them to the container
function createColorBoxElement() {
    for (let index = 0; index < 30; index++) {
        var colorBox = document.createElement("div");
        var colorCode = document.createElement("span");

        // Add necessary classes to the color box and color code elements
        colorBox.classList.add("col-5", "col-md-2", "p-3", "d-flex", "justify-content-center", "align-items-center", "color-box", "shadow");
        colorCode.classList.add("color-code");

        // Append the color code element to the color box
        colorBox.appendChild(colorCode);
        // Append the color box to the container
        container.appendChild(colorBox);
    }

    // Select all color box elements
    var colorContainerEls = document.querySelectorAll(".color-box");

    // Function to generate random colors and apply them to the color boxes
    function generateColor() {
        colorContainerEls.forEach(colorBox => {
            var newColorCode = randomColor();
            colorBox.style.backgroundColor = "#" + newColorCode;
            var colorCode = colorBox.querySelector(".color-code");
            colorCode.textContent = "#" + newColorCode;
        });
    }

    // Generate random colors for the color boxes
    generateColor();
}

// Call the function to create color boxes
createColorBoxElement();

// Function to generate a random 6-character hexadecimal color code
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