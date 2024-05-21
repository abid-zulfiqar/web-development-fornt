

// asynchronous   // wo action hotai hai jin sa main nai a ager koi faislh (eglish main enitiat khatai hai) kya hai tu wo ho jai

// (// asynchronous for example
// console.log("start")
// setTimeout(function() {  // ya jo hum set timeout k function creat kya hai y asynchronous hai is lay is ko bad mai background main execute kya hai
//     console.log("hey i am a good")
// }, 3000);
// console.log("end"))

// (// synchronous // syncronous aik aik ker kai chath hai 
// example of synchronous
//  let a=prompt("whats your name")
//  let b=prompt("hey whats your age")
//  let c=prompt("hey whats your favorite color?")
//  console.log(a+" is "+ b +" year old and has "+ c +" favorite color."))


// call back // jub hum koi function daitai hai tu wo execute ho jai gh jub bhi wo action complete hogh tub

// function loadScript(src, callback) {  // call back hum is lya use kertai y humin function chalnai kai bad bhta dai
//     let script = document.createElement("script")
//     script.src = src
//     script.onload = function () {
//         console.log(" loaded script with SRA: " + src) // main chath hu y run nh keru custom main use keru
//         callback(null,src);
//     }
//     script.onerror=function(){  // onerror function tub use kerin gai jub koi src main koi error ho gh
//         console.log(" Error loading script with src: " + src)
//         callback(new Error(" src got some error "))
//     }
//     document.body.appendChild(script);
// }        //script.onload function hum tub use kertai jub koi chaiz loaded ho aur huamin y bhath dai

//  //  custom main kaisa use kerin  (console.log("loaded script with scr" + src) ) ki jagh per
// function hello(error, src) {  // ager ap chatai  kai hello kai saat src bhi show ho tu (callback) aur hello ki string main + src
//     if(error){
//         console.log(error)
//         return
//     } 
//     alert(" hello world " +src)
// }                           // ager main chath hu kai jub mairi koi script load ho tu in donu main sa koi run ho tu us ko main 
// function goodmorning(src){  
//     alert(" goodmorning "+src)
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" ,goodmorning)


// callback hell

// pyramid of dom

// promise code ko run kerth aur hum (.then , .catch ) k use ker kai user ko  value y error show kerth hai

// promise main (resolve, reject) promise kai biltent function hai jo humin html main jo kuch bhi hoth hai wo sub kuch daith hai
// let promise=new Promise(function(resolve,reject){
//     alert("i am an alert in promise")
//     resolve(56)
// })

// console.log("hello")
// setTimeout(function(){
//     console.log("hello world in 2 second")
// } ,2000)
// console.log("my name is " +"abid")
// console.log(promise)

//promise object do hotai hai 
//promise state
// promise state initially pending hoti hai y tu fulfilled ho skti hai y resolve  aur fulfilled do trah ki hoti hai

// promise result
// promise result intially undifine hoti hai y tu wo resolve hogi y reject hogi ager reject hogi tu error dai gi

// let p = new Promise((resolve, reject) => {
//     console.log("promise is pending")
//     setTimeout(() => {
//         // console.log("i am a promise and i am  resolved") // hum fulfilled array y string kai saat use ker sktai hai
//         resolve(true)
//     }, 5000)
// })
// console.log(p)

// let p2 = new Promise((resolve, reject) => {
//     console.log("promise is pending")
//     setTimeout(() => {
//         // console.log("i am a promise and i am  reject") // hum fulfilled array y string kai saat use ker sktai hai
//         reject(new Error("i am an error"))
//     }, 5000)
// })

// console.log(p, p2)

// p.then((value) => {
//     console.log(value)
// })
// p2.catch((erroe) => {
//     console.log("some error eccurred in p2")
// })

// consumer main hum (then aur catch) ko use kerkai malum ker sktai hai kai promise nai value di y error

// promise chaining main chatai hai kai promise jub fulfilled ho jai tu is k result next .then main show ho aur us k result us kai next .then main show aur is terh hum buot sa .then k use ker sktai hai
// for exemple
// let p3 = new Promise((resolve, reject) => {
//     console.log("resolved after 2 second")
//     setTimeout(() => {
//         resolve(true)
//     }, 2000)
// })
// p3.then((value) => {
//     console.log(value)
//     let p4=new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("promise 2")
//         },2000)
      
//     })
//     return p4;
// })
// .then((value)=>{
// console.log("we are don ")
// return 2;
// })
// .then((value)=>{
//     console.log("yes we are good")
// })



// // loadscript function in promise  for exemple
// let loadScript=(src)=>{
//     return new Promise((resolve, reject)=>{
//     let script=document.createElement("script")
//     script.type="text/javascript"
//     script.src=src;
//     document.body.appendChild(script)
//     script.onload=()=>{
// resolve("script has loaded sir")
//     }
//     script.onerror=()=>{
//     reject(0)
//     }
// })
// }
// let p1=loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
// p1.then((value)=>{
//     console.log(value)
//     loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
// })
// .then((value)=>{
//     console.log("second script has loaded")
// })
// .catch((error)=>{
//     console.log("we are ")
// })



// multipal handlers a promise 
// promise jub fulfilled ho tu code run ho us kai saat aik aur code run ho aisa hum multipal handler kai saat ker sktai hai

// let p1=new Promise((resolve, reject)=>{
//     alert("hey i am a resolve")
//     setTimeout(() => {
//         resolve(1);
//     }, 2000);
// })
// p1.then(()=>{
//     console.log("hello every one")
//         return new Promise((resolve, reject)=>{
// setTimeout(() => {
//     resolve(4)
// },6000);
//     })
// })
// .then((value)=>{
//     console.log(value)
// })

// p1.then(()=>{
//     console.log("congratulation this promise is now resovle")

// })

// the promise api methods

// let p1=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("value 1")
//     },7000)
// })

// let p2=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // resolve("value 2")
//         reject(new Error("error"))
//     },2000)
// })
// let p3=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("value 3")
//     },3000)
// })

// p1.then((value)=>{
//     console.log(value)
// })
// p2.then((value)=>{
//     console.log(value)
// })
// p3.then((value)=>{
//     console.log(value)
// })

// ager ap alg alg liknai ki bhjai aik saat use kernai kai lya hum promise api y promise all k use kertai hai

 // promise.all main jis k sub sa zydh time hogh utnai time kai bad sub aik saat show hogi 

// let promise_all=Promise.all([p1, p2, p3])
// promise_all.then((value)=>{
//     console.log(promise_all)
// })

// promise.allsettled  promise.all main ager aik bhi promise reject ker dai tu promise.all nhi challai gi aur error show kerin gi is sa bchnai kai lya promise.allsettled k use kertai hai

// let promise_all=Promise.allSettled([p1, p2, p3])
// promise_all.then((value)=>{
//     console.log(promise_all)
// })


// promise.race ( ager hum value1 k timer zydh aur value2 k timer kum dai tu first value2 show kerin gh aur ager hum value2 ko reject ker dai tu error show kerin gh )

// let promise_all=Promise.race([p1, p2, p3])
// promise_all.then((value)=>{
//     console.log(promise_all)
// })


// promise.any ( ager hum asi value chatai jo resolve ho aur error show nh kerin tu aur ager promise main value1 k timer zydh aur value2 ko reject ker dya hai tu promise.any main agle value ko show kerwai gh )

// let promise_all=Promise.any([p1, p2, p3])
// promise_all.then((value)=>{
//     console.log(promise_all)
// })

// promise.resolve(value) make a resolved promise with the given value
// let promise_all=Promise.resolve(6)
// promise_all.then((value)=>{
//     console.log(promise_all)
// })

// promise.resolve(erroe) make a reject promise with the given error
// let promise_all=Promise.reject(new Error ("hey"))
// promise_all.then((value)=>{
//     console.log(promise_all)
// })

// async await (hum sub sa phailai aik function declare kertai hai us kai under jo bhi code hoth hai us ko wait kerwtai hai hum kisi bhi function ko async bnh sktai hai aur us main promise ko waite kerwa sktai hai )

async function harry (){
let delhiWeather=new Promise((resolve, reject)=>{
    setTimeout(()=>{
resolve('data 1')
    },1000)
})
let banglorWeather=new Promise((resolve, reject)=>{
    setTimeout(()=>{
resolve('data 2')
    },2000)
})

// delhiW.then(alert)
// banglorW.then(alert)

// hum us ko aik variable main ly sktai hai
//  for excample
console.log("fetching delhi weather please wait ..")
let delhiW =await delhiWeather
console.log("fetching banglor weather please wait ..")
let banglorW =await banglorWeather
return [delhiW, banglorW]

}
console.log("wellcome to p control room")
 let a=harry()
 console.log(a)