// Declaration
function calculateArea(width, height) {
    return width * height;
}

// Expression
const calculateRectangleArea = function(width, height) {
    return width * height;
}

// Arrow
const getRectangleArea = (width, height) => width * height;

console.log("Result of function declaration is " + calculateArea(8,9));
console.log("Result of function expression is " + calculateRectangleArea(8,9));
console.log("Result of arrow function is " + getRectangleArea(8,9));