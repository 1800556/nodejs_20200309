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