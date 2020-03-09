var request = require('request');

request('http://www.uuu.com.tw', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body)
    } else {
        console.log(error)
        console.log(response.statusCode)
        console.log(body)
    }
})