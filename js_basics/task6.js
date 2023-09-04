import colorPrint from 'chalk';

const averageGrade = 60;
let text = "";

// #1
console.log(colorPrint.bold("Exercise number 1"));

if (averageGrade < 60) {
    text = "Your mark is fail. You need to increase your results!";
    console.log(colorPrint.red(text));
} else if (averageGrade <= 70) {
    text = "Your mark is close fail. Please, pay attention, you are behind fail!";
    console.log(colorPrint.blue(text));
} else if (averageGrade <= 80) {
    text = "Your mark is improvement needed. It is good, but you can be better!";
    console.log(colorPrint.yellow(text));
} else if (averageGrade <= 90) {
    text = "Your mark is very good. You are behind the best result!";
    console.log(colorPrint.cyan(text));
} else if (averageGrade <= 100) {
    text = "Your mark is excellent. The best result ever!";
    console.log(colorPrint.green(text));
}

// #2
console.log(colorPrint.bold("Exercise number 2"));

switch (true) {
    case averageGrade < 60:
        text = "Your mark is fail. You need to increase your results!";
        console.log(colorPrint.red(text));
        break;
    case averageGrade <= 70:
        text = "Your mark is close fail. Please, pay attention, you are behind fail!";
        console.log(colorPrint.blue(text));
        break;
    case averageGrade <= 80:
        text = "Your mark is improvement needed. It is good, but you can be better!";
        console.log(colorPrint.yellow(text));
        break;
    case averageGrade <= 90:
        text = "Your mark is very good. You are behind the best result!";
        console.log(colorPrint.cyan(text));
        break;
    case averageGrade <= 100:
        text = "Your mark is excellent. The best result ever!";
        console.log(colorPrint.green(text));
        break;
    default:
        console.log("Please, provide valid average grade");
}

// #3
console.log(colorPrint.bold("Exercise number 3"));

const number = 9;
if (number > 0 && number <= 10) {
// #3.1
    console.log(colorPrint.underline("Exercise number 3.1"));
    for (let index = 1; index <= 10; index++) {
        console.log(`${number} * ${index} = ${Math.imul(number, index)}`);
    }

// #3.2
    console.log(colorPrint.underline("Exercise number 3.2"));

    let index = 1;
    while (index < 11) {
        console.log(`${number} * ${index} = ${Math.imul(number, index)}`);
        index++;
    }
} else console.log("Number should be from 1 to 10.");
