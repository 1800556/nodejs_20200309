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
console.log(Array.isArray(o2), typeof o2, o2)*/

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