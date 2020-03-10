const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        try{
            throw new Error("oops!")
            console.log("no error")
            resolve(1000)
        } catch(e){
            reject(e)
        }
    },2000)
})
console.log("start p1")
p1.then(result=>console.log("OK! result="+result))
.catch(error=>console.error("Found exception:"+error))
console.log("stop p1")