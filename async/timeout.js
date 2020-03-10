setTimeout(() => { console.log("I am ready, can start to work") }, 2000)
console.log("doing something in main thread")

setTimeout(() => {
    console.log("prepare for stage2")
    setTimeout(() => { console.log("prepare for stage3") }, 2000)
}, 2000)

console.log("start working")
