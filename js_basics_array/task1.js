const numbers = [2, -5, 0, 7, -3, 0, 10, -8, null, NaN, ""];
let positiveCount = 0, negativeCount = 0, zeroCount = 0;

for (let index = 0; index < numbers.length; index++) {
    let number = numbers[index];
    switch (true) {
        case number > 0:
            positiveCount++;
            break;
        case number === 0:
            zeroCount++;
            break;
        case number < 0:
            negativeCount++;
            break;
        default:
            console.log("Value <" + number + "> is invalid.")
    }
}

console.log("Array contains <" + positiveCount + "> positive numbers.");
console.log("Array contains <" + zeroCount + "> zero numbers.");
console.log("Array contains <" + negativeCount + "> negative numbers.");
