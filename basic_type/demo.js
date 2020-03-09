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
