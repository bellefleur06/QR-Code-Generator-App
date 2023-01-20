// Get the input text and qr code container elements
var inputText = document.getElementById("input_text");
var qrCodeContainer = document.querySelector(".qr-code");

// Add an event listener to the button
document.querySelector(".button").addEventListener("click", function () {
    // Get the input text value
    var inputValue = inputText.value;

    // Verify that the input text is not empty
    if (inputValue === "") {
        alert("Please enter some text.");
    } else {
        // Remove the existing QR code element
        while (qrCodeContainer.firstChild) {
            qrCodeContainer.removeChild(qrCodeContainer.firstChild);
        }
        // Create a new QR code using the input text
        new QRCode(qrCodeContainer, {
            text: inputValue,
            width: 300,
            height: 300,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }
});

var downloadButton = document.querySelector(".download-button");
var qrCodeContainer = document.querySelector(".qr-code");

// Add an event listener to the download button
downloadButton.addEventListener("click", function () {
    // Get the QR code image element
    var qrCodeImg = qrCodeContainer.querySelector("img");

    // Create a new image element
    var img = new Image();
    img.src = qrCodeImg.src;

    // Create a link element and set its href to the image src
    var a = document.createElement("a");
    a.href = img.src;
    a.download = "qr-code.png";

    // Append the link to the body and trigger the click event
    document.body.appendChild(a);
    a.click();

    // Remove the link element
    document.body.removeChild(a);
});