global.coffee = 'hot latte'
global.juice = 'lemonade'
tea = 'earl gray'
function printSomething(name){
    console.time(global[name])
    console.log(global[name])
    console.warn(global[name])
    console.error(global[name])
    console.timeEnd(global[name])
}
console.time('TOTAL')
printSomething('coffee')
printSomething('juice')
printSomething('hello')
printSomething('tea')
console.timeEnd('TOTAL')