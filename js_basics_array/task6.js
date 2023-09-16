const numbersList = [1, 10, 14, 2, 4, 5, 43, 34, -10000, 0, 23, 45.78];
const cloneArray = Array.from(numbersList);
cloneArray.sort((a, b) => a - b);
console.log(numbersList);
console.log(cloneArray);