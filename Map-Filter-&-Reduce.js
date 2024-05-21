// // Map array method
// let num=[11, 22, 33, 45, 44]
// num.map((value)=>{
//     console.log(value)
// })
// // Map humai new array creat kernai main help kerth hai
// let a=num.map((value)=>{
//     console.log(value)
//     return value +1
// })
// console.log(a)

// //for each loop
// let  num1=[1, 3, 4]
// let a1=num1.map((value, indax, array)=>{
//     console.log(value, indax, array)
//     return value +1
//     return value +indax  

// })
// console.log(a1)

// // Filter array method
// let arr2=[11, 22, 33, 1, 3, 8,9]
// let  a2=arr2.filter((a)=>{
// return a<10
// })
// console.log(a2)

// //kya ya methods humra first array ko chainge kertai hai ?  no
// console.log(a2, arr2)


// Reduce methods array

// let arr3=[2, 4, 6, 8]
// let  a3=arr3.reduce((a, a1)=>{
// return a+a1
// })
// console.log(a3)

// hum is ko aisa bhi use ker saktai hai function variable ki terah bnya ja skth hai
let arr3=[2, 4, 6, 8]
const reduce_func=(h1, h2)=>{
    return h1 +h2
}
let newarr3=arr3.reduce(reduce_func)
console.log(newarr3)