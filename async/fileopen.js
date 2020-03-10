"use strict";
var fs = require('fs')
console.log("program start")
fs.open('data\\info.txt', 'r', (error, handle) => {
    if (error) {
        return console.log(error)
    }
    console.log("file open successful, continue")
    var buffer = new Buffer(10000, 0)
    fs.read(handle, buffer, 0, 10000, null, (error, length) => {
        console.log("total:", length, "read")
        const result = buffer.slice(0, length)
        console.log("data read:", result.toString())
        fs.close(handle, () => { })

    })
});
console.log("program finish")