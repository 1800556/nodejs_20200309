/*
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
*/
function scopeTest() {
    var x2 = 5
    var x2 = '500'
    console.log(x2)
    let x3 = 3.14
    //let x3 = 'pi'
    console.log(x3)
}

function scopeTest2() {
    var j = 0;
    for (let i = j; i < 10; i++) {
        //for (var i=j; i<10; i++){
        console.log(i);
    }
    //console.log(i,j);
}

scopeTest()
scopeTest2()
