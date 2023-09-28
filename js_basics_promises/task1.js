function printWithDelay(text, milliseconds) {
    setTimeout(() => console.log(text), milliseconds);
}

printWithDelay("Success!", 1000);