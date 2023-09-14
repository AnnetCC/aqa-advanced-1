const countDown = num =>  {

    if (num <= 0) {
        return
    }
    console.log("num is " + num);
    countDown(num - 1);
}

countDown(5);