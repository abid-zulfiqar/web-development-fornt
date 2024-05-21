

// console.log(console) // console kai all methods ko see kernai kai lai use kerin
// console.log("heloo harry")
// console.assert(5>55)  // assert ager ture hogh tu error nhi dai gh wernh errro dai gh
// console.clear // matlb sub kuch remove ker dai
console.warn("your dail wrong password try again")
console.info("hey this is an emportent info")

// console.tabel
obj={a:1, b:2, c:3}
console.table(obj)

// console.time  
// forloop aur while loop kai time ko compaire kero
console.time("forlop")
for(let a=0; a<5; a++ ){
    console.log(220)
}
console.timeEnd("forlop")

// while loop time 
console.time("whileloop")
let a=0;
while(a<5){
    console.log(220)
    a++
}
console.timeEnd("whileloop")
