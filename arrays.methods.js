
// // Arrays methods

//  // question 1, to string methods 
//  let num=[1, 2, 3, 4, 5]
//  let b=num.toString()
//  console.log(b)
//  console.log(b, typeof b)  // is ki type aik string hogi

//  // question 2, join methods
//  let c=num.join("-")  // under score ki jaga per hum (and) bhi use ker sktai hai
//  console.log(c)
//  console.log(c, typeof c) // is ki type aik string hogi


//  //question 3, pop methods
//  let num1=[1, 2, 3, 4]
// //  num1.pop()
// //  console.log(num1)
 
//  let r=num1.pop()   //ager hum koi element remove  kertai hai aur usa wapis lnai kai lya return function k use kertai hai
//  console.log(num1, r)


//  // question 4, push methods
 let a=[7, 1, 2, 8]
 let a1=a.push(56)   // push return the new array length  aur is main hum jo bhi number add kerin gai wo array length kai end main show kerin gh
 console.log(a, a1)

//  // question 5, shift methods
//  let a3=[7, 5, 2, 8]
//  let a4=a3.shift()  // remove an element start of the array aur phaila wali array main first emlement ko remove ker kai show ker dai gh
//  console.log( a4)
//  console.log(a3, a4)


//  // question 6, unshift methods
//  let a5=[7, 9, 2, 8]
//  let a=a5.unshift(22)  // add new element of array start
//  console.log( a)
//  console.log(a5, a)

//  // question 7, delet methods  // delet aik method nhi operator hai
// let num =[1, 2, 4, 3, 5]
// let num1= delete num[2]
// console.log(num)
// console.log(num.length)  // array main ager koi element delete ker dai tu phir bhi us ki length change nhi ho gi


//  // question 8, concat methods
//  let b=[1, 2, 3]  
//  let b1=[4, 5, 6]
//  let b2=[7, 8, 9]
//  let b3=b.concat(b1, b2)   // concat sub arrays ko aik array main join ker dyth hai
//  console.log(b3)
//  console.log(b, b1, b2)


//  // question 9, sort methods
// let c=[34, 32, 22, 11, 1, 44, 55, 121, 245]
// let c1=c.sort()    // sort method acounting main mach honai walai number sa start hota hai 
// console.log(c1)


 //assening order main sort kaisa kerin

// let c2=[34, 32, 22, 11, 1, 44, 55, 121, 245]
// let compare=(a, b)=>{
//   return a-b //(mtlb acounting sa start hogai)
//   // // return b-a // (mtlb acounting main big sa small start)
//   }
// let c3=c2.sort(compare)    // 
// console.log(c3)


//  // question 10, reverse methods
 let d=[30, 31, 221, 11, 1, 44, 55, 121, 245]
//  d.sort(compare)
 d.reverse()
 console.log(d)


 // question 11, splice methods   // arrays main new item ko add kernai kai ly use kertai hai
  // splice method foure hotai hai.  1. kha add kern hai 2. konsa remove kernai hai 3. jo element add kernh hai  4. deleted items ko return kerth hai
// let e=[1, 3, 4, 5, 7, 6, 8, 9, 11]
// e.splice(2, 3, 1021, 1022, 1023, 1024, 1025)
// console.log(e)
// let deletevalue=e.splice(2, 3, 1021, 1022, 1023, 1024, 1025)  // ager ap delete huwi  value ko show kernh chatai ho
// console.log(deletevalue)


 // question 12, slice methods
 // slice orgnal array ko modify nhi kerta balkai aik new array creat kerth hai
// let num4=[2, 3, 5, 7, 1, 8, 96, 44, 33, 23]
// // let newnum=num4.slice(2)
// let newnum=num4.slice(3, 7)  // slice main jo first number hogh wa sa start kerin gh aur second number kai dermiyan wala item ko show kerin gh 
// console.log(newnum)



