/*console.log(x2)
//console.log(x1)
x1 = 'hello'
var x2 = 'world'
console.log(typeof x1, typeof x2)
console.log(x1, x2)
function printMessage() {
    console.log( 'inside printmessage',x1, x2)
}
printMessage()

function foo() {
    console.log('inside foo begin:', current)
    var current = 300;
    implyGlobal = 500;
    console.log('inside foo after:', current)
    console.log('inside foo implyglobal=', implyGlobal)
}

foo()
//console.log(current)
console.log(implyGlobal)
implyGlobal += 300
console.log(implyGlobal)
*/
var x1 = 100
x2 = 200
console.log(x1, x2)
console.log(global.x1, global.x2)
delete global.x1
delete global.x2
console.log(x1, x2)