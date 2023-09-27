function printMessage(text, milliseconds) {
    setTimeout(() => console.log(text), milliseconds);
}

printMessage("Success!", 1000);