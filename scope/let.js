function varTest() {
    var x = 100;
    console.log("beginning, x=", x);
    if (true) {
        var x = 200;
        //x = 200;
        console.log("inside, x=", x);
    }
    console.log("outside, x=", x);
}
function letTest() {
    let y = 30;
    console.log("beginning, y=", y);
    if (true) {
        let y = 50;
        console.log("inside, y=", y);
    }
    console.log("outside, y=", y);
}

varTest();
letTest();
