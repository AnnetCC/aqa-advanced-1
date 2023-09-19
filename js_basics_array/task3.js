const array = [10, 20, 30, 40, 50, -10, 0, 378];
const sum = array.reduce((accumulator, currentElement) => accumulator + currentElement,0);

console.log(sum);