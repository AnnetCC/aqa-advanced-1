const recursion = num =>  {

    if (num <= 0) {
        return
    }
    console.log("num is " + num);
    recursion(num - 1);
}

recursion(5);