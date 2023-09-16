const array = [10, 20, 30, 40, 50, -10, 0, 378];
let sum = array.reduce((accumulator, currentElement) => accumulator + currentElement);

console.log(sum);