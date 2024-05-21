
let num=[1, 22, 3, 4, 5]
for(i=0; i<num.length; i++){
console.log(num[i])
}

// ager ap her array element kai lya loop use kernh chatai hai tu
// forEach loop
num.forEach((element) =>{
    console.log(element*element)
})


// html main jo aik div mai write hai us per kaam kernai kai lya array form use kertai hai
// array form
let name="harry"
let arr=Array.from(name)
console.log(arr)

// for of loop 
// array kai item ko accsses kernai kai lya for of loop k use kertai hai y short cut terkh hai 
for(let i of num){
    console.log(i)
}

// for in loop
// kisi bhi item ki length key dynai kai lya for in loop use kertai hai
for(let i in num){
    // console.log(i)
    console.log(num[i])
}