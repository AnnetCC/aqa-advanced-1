import colorPrint from 'chalk';

const averageGrade = 98;
let text = "";

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
