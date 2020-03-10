setTimeout(()=>{
    try{
        throw new Error("oops, happen something in another thread..")
    }catch(e){
        console.warn('got an error:',e)
    }
},2000)
console.log('program terminated')

try {
    setTimeout(() => { throw new Error("HAHA") }, 2000)
} catch (e) {
    console.log("got an error:"+e)
}
console.log("program terminated")
