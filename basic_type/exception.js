function oops() {
    throw new Error("something went wrong, oops!")
}
try {
    oops()
    console.log("execution inside try, after oops")
} catch (e) {
    console.log(typeof e)
    console.log("reason:", e.toString())
    console.log(e)
}
oops()
// this line will not be show
console.log("program terminate line---")