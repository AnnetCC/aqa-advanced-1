// Declaration
function calculateArea(width, height) {
    return width * height;
}

// Expression
const rectangleArea = function(width, height) {
    return width * height;
}

// Arrow
const rectangleAreaArrow = (width, height) => width * height;

console.log("Result of function declaration is " + calculateArea(8,9));
console.log("Result of function expression is " + rectangleArea(8,9));
console.log("Result of arrow function is " + rectangleAreaArrow(8,9));