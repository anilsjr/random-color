// Get the container element where color boxes will be added
var container = document.getElementById("color-container");

// Create 20 color boxes and append them to the container
function createColorBoxElement() {
    for (let index = 0; index < 20; index++) {
        var colorBox = document.createElement("div");
        var colorCode = document.createElement("span");

        // Add necessary classes to the color box and color code elements
        colorBox.classList.add("col-5", "col-md-2", "p-3", "d-flex", "justify-content-center", "align-items-center", "color-box", "shadow");
        colorCode.classList.add("color-code");

        // Append the color code element to the color box
        colorBox.appendChild(colorCode);
        // Append the color box to the container
        container.appendChild(colorBox);

        // Generate random colors for the color boxes
        generateColor(colorBox, colorCode);    
    }

    // Select all color box elements
    var colorContainerEls = document.querySelectorAll(".color-box");
}

// Call the function to create color boxes when the window loads
window.onload = createColorBoxElement;

// Function to generate random colors and apply them to the color boxes
function generateColor(colorBox, colorCode) {
    var newColorCode = randomColor();
    colorBox.style.backgroundColor = "#" + newColorCode;
    colorCode.textContent = "#" + newColorCode;
    
// Add an event listener to the copy button to trigger the copy function on click
    colorBox.addEventListener('click',() => { copyToClipboard(colorCode.textContent)} );

}



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




// Get the copy button and data input elements by their IDs

// Function to copy text to clipboard
async function copyToClipboard(dataInput) {
    try {
        // Write the value of the data input to the clipboard
        await navigator.clipboard.writeText(dataInput);
        console.log('Text copied to clipboard');
        // Show toast message
         showToast(dataInput);
    } catch (err) {
        // Log an error message if the copy operation fails
        console.error('Failed to copy: ', err);
    }
}


// toast message
function showToast(color) {
    const toastMessageBox = document.getElementById('toast-message');
    const toastMessageBody = document.getElementById('toast-message-body');
    toastMessageBody.textContent = `${color} Copied!`;

    // Show the toast message
    toastMessageBox.style.display = 'block';
    toastMessageBody.style.display = 'flex';
    setTimeout(() => {
        toastMessageBox.style.display = 'none';
        toastMessageBody.style.display = 'none';

    }, 1500);
    

}
