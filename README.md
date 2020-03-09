https://nodejs.org/en/

https://d3js.org/

https://www.tensorflow.org/js

https://getbootstrap.com/

https://zh-hant.reactjs.org/

https://vuejs.org/

https://angularjs.org/

# download
https://nodejs.org/dist/v12.16.1/node-v12.16.1-x64.msi
https://code.visualstudio.com/
https://www.jetbrains.com/webstorm/

https://bitbucket.org/
https://github.com/

## for reference only
https://visualstudio.microsoft.com/zh-hant/vs/features/collaborate/?rr=https%3A%2F%2Fwww.google.com%2F

https://solidity.readthedocs.io/en/v0.4.24/introduction-to-smart-contracts.html

https://www.trufflesuite.com/

Environment variable


C:\Program Files\nodejs\

## validate environment

```
node --version
npm --version
npx --version
```

## install visual studio

```
node --version
npm --version
npx --version

code --version
```
## https://git-scm.com/download/win
```
node --version
npm --version
npx --version

code --version
git --version

https://github.com/adobe-fonts/source-code-pro

## update source code pro font
```
console.log("Hello world!")
3+5
var x=3+5
x
```
ctrl+c, ctrl+d (quit)

C:\Users\Admin
make a directory:

node_JS14hr_Mar_2020
cmd ==> open a cmd in current directory
code
file ==> open folder
C:\Users\Admin\node_JS14hr_Mar_2020

hello_world.js

console.log('hi this is our first .js file')


## direct execute a file
node hello_world.js

```
console.log('hi this is our first .js file')
3+5
var x=3+5
```
http://johnny-five.io/
```
make sure directory:
C:\Users\Admin\node_JS14hr_Mar_2020

git init

CHANGE ==> +
(STAGED)
simple file first time checkin

## set username, email
git config --global user.name "MarkHo"
git config --global user.email "mark@uuu.com"

cd to your HOME DIRECTORY
more .gitconfig


cd c:\Users\Admin\node_JS14hr_Mar_2020
git status
git log

mkdir lab2_simple_npm
cd lab2_simple_npm
npm init -y


cd c:\Users\Admin\node_JS14hr_Mar_2020
code .


add plugin, add README.md

------------13:00-----------
under github/bitbucket
+
Repository

ucom_nodejs_20200309


cd c:\Users\Admin\node_JS14hr_Mar_2020

git remote add origin https://YOUR_USERNAME@bitbucket.org/YOUR_USERNAME/YOUR_PROJECT_NAME.git
git push -u origin master

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### `node.JS`,`npm`,`javascript`

npm config list

C:\Users\Admin\AppData\Roaming\npm


npm config get prefix

npm install npm --global
npm --version

### update npm packages
```
npm install npm --global
npm --version
```

npm list --global
npm list --global --depth=0

npm install uglify-js --global
npm list --global --depth=0

npx create-react-app lab3_simple_react

cd c:\Users\Admin\node_JS14hr_Mar_2020\lab3_simple_react

check-in code sofar:
practice npm list

commit
push
~~~~~~~~~~~~~~~~~~~~~~~~~
create directory
lab4_uglifyjs


uglify_demo1.js
~~~~~~~~~~~~~~~~~~~~~~~~~
var object1 = {
    "foo":250,
    "bar":300
}
object1.foo += object1.bar;
console.log(object1.foo);

cd c:\Users\Admin\node_JS14hr_Mar_2020\lab4_uglifyjs

node uglify_demo1.js


uglifyjs uglify_demo1.js -c -m --mangle-props

copy/paste to uglify_demo2.js

node uglify_demo2.js

uglifyjs uglify_demo1.js -c -m --mangle-props > demo3.js

https://webpack.js.org/

terminal.integrated.shell.windows

{
    "terminal.integrated.shell.windows": "C:\\Windows\\System32\\cmd.exe"
}
bottom left GEAR
Settings
Text Editor
Font

'Source CodeVariable', 'Courier New', monospace
18
bold

npm search tensorflow
npm search vaadin

npm cache verify


npm install -g --unsafe-perm node-red

cd c:\Users\Admin\.node-red

npm install node-red-node-arduino
node-red

mkdir lab5_npm
cd lab5_npm

npm init --yes

npm install request --save

copy .gitignore from lab3 to lab5

tryme.js

request('http://www.uuu.com.tw', function(){})

var request = require('request');

request('http://www.uuu.com.tw', function (error, response, body) {
    if (!error && response.statusCode==200) {
        console.log(body)
    } else {
        console.log(error)
        console.log(response.statusCode)
        console.log(body)
    }
})

npm uninstall request
npm install request --save

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
{
    "editor.fontFamily": "'Source Code Variable','Courier New', monospace",
    "editor.fontSize": 24
}



lab6_simple_debug.js


var message1 = 'hello world';
var message2 = "hello world";
var message3 = 'h';
var message4 = "h";
console.log(message1);
console.log(message2);
console.log(message3);
console.log(message4);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
lab7_adv_debug.js


https://install.advancedrestclient.com/install
https://www.postman.com/

var http = require('http')
function processRecord(request, response){
    var body = 'Node.JS Tutorial\n'
    var contentLength = body.length
    response.writeHead(200,{
        'Content-Length':contentLength,
        'Content-Type':'text/plain'
    })
    response.end(body)
}
var server = http.createServer(processRecord)
console.log("server created, start listen to port 8765")
server.listen(8765)

GET ==> http://localhost:8765
~~~~~~~~~~~~~~~~~~~~~~~
var http = require('http')
function processRecord(request, response) {
    var body = 'Node.JS Tutorial\n'
    //var contentLength = body.length
    var contentLength = body
    response.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    })
    response.end(body)
}
var server = http.createServer(processRecord)
console.log("server created, start listen to port 8765")
server.listen(8765)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
npm install -g express-generator

cd c:\Users\Admin\node_JS14hr_Mar_2020
express lab8
copy .gitignore fro lab3 to lab8

npm install 

SET DEBUG=lab8:* & npm start


app.js

code complete in app.js


cd C:\Users\Admin\node_JS14hr_Mar_2020\lab3_simple_react
npm start

lab9_basic_type
~~~~~~~~~~~~~~~~~~~~~~~~
var x1 = 5
var x2 = 'hello'
var x3
var x4 = null
x2 = null
// reference a non exist variable x5
//x5 = 888
console.log(x1, x2, x3, x4, x5)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var x = 5
var y = 3.14
var z = true
var p = 'hello'
var q = "hello"
var t = [1,2,3]
console.log(typeof x, typeof y, typeof z, typeof p, typeof q)
console.log(typeof t)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var x1 = {}
var x2 = []
var x3 = [1, 2, 3]

function x4() { }
var x5
var x6=null
console.log(typeof x1, typeof x2, typeof x3, typeof x4, typeof x5,typeof x6,
    typeof undefined, typeof null)
console.log(Array.isArray(x1), Array.isArray(x2), Array.isArray(x3), Array.isArray(x4))

demo4.js

console.log(512*512)
console.log(2147483647+9999999999)
console.log(0.4+0.2)
console.log(0.11+0.12==0.23)
console.log(1-0.4==0.6)
console.log(1-0.5==0.5)
console.log(1-0.75==0.25)
console.log(1-0.3+0.1==0.8)

demo5.js

console.log(5/0, -5/0, 5/0==Infinity, -5/0==-Infinity, Infinity==-Infinity)
var x = "500"
var y = "3.14"
var z = "3.888"
console.log(parseInt(x), parseInt(y), parseInt(z))
console.log(parseFloat(x), parseFloat(y), parseFloat(z))
console.log(parseInt('ddd'))
console.log(5==NaN, parseInt('ddd')==NaN, isNaN(parseInt('ddd')))
console.log(isFinite(5/3), isFinite(5/0), isFinite(-5/0))