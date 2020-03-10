/*
var x1 = 5
var x2 = 'hello'
var x3
var x4 = null
x2 = null
// reference a non exist variable x5
//x5 = 888
console.log(x1, x2, x3, x4)

var x = 5
var y = 3.14
var z = true
var p = 'hello'
var q = "hello"
var t = [1, 2, 3]
console.log(typeof x, typeof y, typeof z, typeof p, typeof q)
console.log(typeof t)

var x1 = {}
var x2 = []
var x3 = [1, 2, 3]
function x4() { }
var x5
var x6 = null
console.log(typeof x1, typeof x2, typeof x3, typeof x4,
    typeof x5, typeof x6, typeof undefined, typeof null)
console.log(Array.isArray(x1), Array.isArray(x2),
    Array.isArray(x3), Array.isArray(x4))

console.log(512 * 512)
console.log(2147483647 + 9999999999)
console.log(0.4 + 0.2)
console.log(0.11 + 0.12 == 0.23)
console.log(1 - 0.4 == 0.6)
console.log(1 - 0.5 == 0.5)
console.log(1 - 0.75 == 0.25)
console.log(1 - 0.3 + 0.1 == 0.8)

console.log(5 / 0, -5 / 0, 5 / 0 == Infinity,
    -5 / 0 == -Infinity, Infinity == -Infinity)
console.log(parseInt('ddd'))
console.log(5 == NaN, parseInt('ddd') == NaN, isNaN(parseInt('ddd')))
console.log(isFinite(5 / 3), isFinite(5 / 0), isFinite(-5 / 0))

// 0, "", NaN, null, undefined

var elements = [0, "", NaN, null, undefined]
console.log("type of elements:", typeof elements, Array.isArray(elements))

elements.forEach(evaluate)
function evaluate(value, index, array) {
    if (value) {
        console.log(index, value, "return true")
    } else {
        console.log(index, value, "return false")
    }
}
console.log(typeof evaluate)
console.log("### method2 ###")
elements.forEach((value, index, array) => {
    if (value) {
        console.log(index, value, "return true")
    } else {
        console.log(index, value, "return false")
    }
})

var x1 = 'pqrst'
var x2 = "pqrst"
// var x3
//var x3 = null
console.log(typeof x1, x1.length)
console.log(typeof x2, x2.length)
//console.log(typeof x3, x3.length)
var x3 = "abcdefg1234567中文輸入也沒有問題"
// x3.forEach((v, i, a) => {
//     console.log(v)
// })
x3.split('').forEach(e => {
    console.log(e)
})

console.log("I have " + 1 + 2 + " computers")
console.log(1 + 2 + " computers are mine")
console.log("Sunday".indexOf("day"))
console.log("Sunday".indexOf("DAY"))
console.log("Sunday".substr(3,3))
console.log("Sunday".slice(3,6))
var x1 = "Sunday,Monday,Tuesday,Wednesday".split(",")
console.log(typeof x1,Array.isArray(x1), x1)
console.log(x1[0],x1[1],x1[2],x1[3],x1[4],x1[5])
console.log(x1[-1],x1[-5], x1[100])
var y1 = "\t\n\r\t    abc def ghi   \t\n"
console.log(y1)
console.log(y1.trim())

var e1 = "Firebase, Foo, foo, function, xyz".replace(/[Ffx]/g, 'q')
console.log(e1)
var e2 = "Firebase, Foo, foo, function, xyz".replace(/f/g,'q')
console.log(e2)
var e3 = "Firebase, Foo, foo, function, xyz".replace(/f/gi,'q')
console.log(e3)
var e4 = "Foo, foo, Ffoo".replace(new RegExp("[Ff]","g"),"q")
console.log(e4)

var o1 = {}
var o2 = {
    name: "NodeJS", duration: 14, period: ["Monday", "Tuesday"]
}
var o3 = {}
console.log(typeof o1, typeof o2)
console.log(o1, o2)
console.log(o2.name,o3.name)
o3["name"]="POOP"
o3["duration"]=35
o3["period"]=["Saturday"]
console.log(o2.name,o3.name)
console.log("object property count for o2:",Object.keys(o2).length)
console.log("object property count for o3:",Object.keys(o3).length)
delete o3.name
console.log(o2.name,o3.name)
delete o2.name
console.log(o2.name,o3.name)
console.log("object property count for o2:",Object.keys(o2).length)
console.log("object property count for o3:",Object.keys(o3).length)

var x1 = {name:'Mark Ho',role:'engineer',grade:6}
var j1 = JSON.stringify(x1)
var x2 = ['Sunday','Monday','Tuesday']
var j2 = JSON.stringify(x2)
console.log(typeof x1, typeof j1, typeof x2, typeof j2)
console.log(x1, j1)
console.log(x2, j2)
var o1 = JSON.parse(j1)
var o2 = JSON.parse(j2)
console.log(Array.isArray(o1), typeof o1, o1)
console.log(Array.isArray(o2), typeof o2, o2)

var a1 = ['a', 'b', 'c', 'd', 'e', 'f']
var a2 = Array.from('abcdef')
var a3 = 'abcdef'.split('')
console.log(a1, a2, a3)
console.log(Array.isArray(a1), Array.isArray(a2)
    , Array.isArray(a3))
var a4 = new Array()
a4.push('a')
a4.push('b')
a4.push('c')
a4.push('d')
console.log(a4, Array.isArray(a4))
// push, pop
console.log(a1.pop(), a1)
a1.push('G')
console.log(a1)
console.log(a2.shift(), a2)
a2.unshift('A')
console.log(a2)

var a1 = [1, 2, 3, 4, 5, 6, 7, 8]
var r1 = a1.join()
console.log(typeof r1, r1)
var a2 = ['red', 'yellow', 'blue']
var r2 = a2.join()
console.log(typeof r2, r2)
var r3 = a2.join('-')
console.log(r3)
var a3 = ['www', 'uuu', 'com', 'tw']
var r4 = a3.join('.')
console.log(r4)
array4 = Array.from('HelloWorld')
console.log(array4.sort())
var sum = 0
a1.forEach(function (element) { sum += element }, this)
console.log("summation of a1=", sum)

var util = require('util')
console.log(123 == '123', 25.4 == '25.4', 0 == '0')
console.log(123 === '123', 25.4 === '25.4', 0 === '0')
var a1 = [null, undefined, 0, false, NaN, '']
for (i = 0; i < a1.length; i++) {
    for (j = i + 1; j < a1.length; j++) {
        result = util.format('%s == %s? %s', a1[i], a1[j], a1[i] == a1[j])
        console.log(result)
        //console.log('is', a1[i], '===', a1[j], '==>',a1[i] === a1[j])
        console.log('------------')
    }
}

var x = 123
var y = new Number(123)
console.log(typeof x, typeof y)
console.log(x == y, x === y)

function echoMe(name) {
    console.log("echo name:",name)
}
echoMe("Mark")
echoMe()
echoMe(undefined)
echoMe(null)
echoMe('p','q','r')
echoMe(['p','q','r'])

function mySum() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
console.log(mySum())
console.log(mySum(1, 2, 3))
console.log(mySum('1', '2', '3'))
var x1 = function (a, b) {
    return a * b
}
console.log(x1(3, 5))

var token = 'abc'
var y = function () {
    var token = 'def'
    console.log('inside', token)
}
console.log('first outside', token)
y()
console.log('second outside', token)
var x1 = function (x, y) {
    return x * y
}
var x2 = (x, y) => { return x * y }
var x3 = (x, y) => x * y
console.log(x1(3, 4))
console.log(x2(6, 7))
console.log(x3(8, 9))

var x1 = [null, undefined, 0, false, "", NaN]
x1.forEach(e => console.log(e ? "true" : "false"))
var x2 = [2, 4, 6, 8]
for (index in x2) {
    console.log('index=', index, " ,value=", x2[index])
}
for (item of x2) {
    console.log('value=', item)
}
var x3 = {
    courseName: "NoJS",
    duration: 14,
    location: "Taipei"
}
for (k in x3) {
    console.log(k, "/", x3[k])
}

function Car() {
    // field
    this.speed = 0
    this.number = ""
    this.fuel = 0
    // method
    this.setSpeed = function (speed) { this.speed = speed }
    this.isOverSpeed = function (speedLimit) {
        return this.speed > speedLimit
    }
}
var myCar1 = new Car()
console.log(typeof myCar1, typeof Car)
myCar1.setSpeed(60)
myCar1.number = "AAA-1234"
console.log(myCar1.number + " has speed:" + myCar1.speed)
console.log(myCar1.isOverSpeed(100), myCar1.isOverSpeed(50))
*/
function Car() {
}
// field
Car.prototype.speed = 0
Car.prototype.number = ""
Car.prototype.fuel = 0
// method
Car.prototype.setSpeed = function (speed) { Car.prototype.speed = speed }
Car.prototype.isOverSpeed = function (speedLimit) {
    return Car.prototype.speed > speedLimit
}
function HybridCar() {

}
HybridCar.prototype = new Car()
HybridCar.prototype.__proto__ = Car.prototype
HybridCar.prototype.batteryLimit = 50000
HybridCar.prototype.totalLength = function () {
    return this.fuel * 21 + this.batteryLimit / 500
}

var myCar1 = new Car()
console.log(typeof myCar1, typeof Car)
myCar1.setSpeed(60)
myCar1.number = "AAA-1234"
console.log(myCar1.number + " has speed:" + myCar1.speed)
console.log(myCar1.isOverSpeed(100), myCar1.isOverSpeed(50))
//
var myCar2 = new HybridCar()
console.log(typeof myCar2, typeof HybridCar)
myCar2.setSpeed(60)
myCar2.number = "DDD-5678"
console.log(myCar2.number + " has speed:" + myCar2.speed)
console.log(myCar2.isOverSpeed(100), myCar2.isOverSpeed(50))
myCar2.fuel = 70
console.log("myCar2 total length=",myCar2.totalLength())