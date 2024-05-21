
// // settime ko hum tub use kertai hai jub hum kisi bhi javascript ko kuch time kai bad run kertai hai
// console.log ("hello")
// let a=setTimeout(function(){
//     alert("i am set inside of settimeout")
// },2000) // 2000 k mtlb 2sec hai
// // setinterval ko hum tub use kertai hai jub kisi bhi javascript ko bar bar run kernai kai lyai use kartai 
// clearTimeout(a) // clear time ko hum tub use kertai hai jub hum kisi javascript k run show nhi kernh chatai

    // let a = setTimeout(function() {
    //     alert("I am set inside of setTimeout");
    // }, 3000);
    
    // let b = prompt("Do you want to run the setTimeout? (yes/no)");
    
    // if (b === "no") {
    //     clearTimeout(a);
    // } else {
    //     console.log(a)
    // }
    
    // humain aik timer id reutrn main milty hai aur is kai bad hum aik (function, delay, argment, ) dai sktai hai
    // let timerid=setTimeout(function, <delay>, <argment>) dai skttai hai for excemple
    let  sum=(a,b)=> {
        console.log("yes i am runing" +(a+b))
        a+b}
setTimeout( sum, 1000, 1, 2)
// setInterval(function(){
//     alert("setInterval")
// } ,3000)                  // setInterval aik undefine while loop function hai jis main hum jitnai sec dai gai utnai sec kai bad bar bar chalth raigh setinterval kai function ko khtm kernai kai lya clearinterval k funtion use kertai hai