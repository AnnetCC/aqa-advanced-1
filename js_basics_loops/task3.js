import colorPrint from 'chalk';

console.log(colorPrint.bold("Exercise number 3"));

const number = 9;
if (number > 0 && number <= 10) {
// #3.1
    console.log(colorPrint.underline("Exercise number 3.1"));
    for (let index = 1; index <= 10; index++) {
        console.log(`${number} * ${index} = ${number * index}`);
    }

// #3.2
    console.log(colorPrint.underline("Exercise number 3.2"));

    let index = 1;
    while (index < 11) {
        console.log(`${number} * ${index} = ${number * index}`);
        index++;
    }
} else console.log("Number should be from 1 to 10.");
