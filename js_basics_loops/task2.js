import colorPrint from 'chalk';

const averageGrade = 59;
let text = "";

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
