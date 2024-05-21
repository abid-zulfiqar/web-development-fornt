
     
//       let marks_class_9 = [61, 72, 83, 94, 75, false, " hai hello "];
//       console.log(marks_class_9)
  
//       // question number 1 , one arrays ki value 
//       console.log(marks_class_9[0])
//       console.log(marks_class_9[1])
//       console.log(marks_class_9[2])
//       console.log(marks_class_9[3])
//       console.log(marks_class_9[6])  // jo value humaisa 0 sa start hoti hai

//       //  question number 2 , finding the length

//       console.log( " length of class 9 is ", marks_class_9.length)   // length humaisha 1 sa start hoti hai


//    //  question number 3 chainging the value 
//      marks_class_9[0]=400;
//       console.log(marks_class_9[0])  // jo value humaisa 0 sa start hoti hai

// // quetion number 4, adding new value 
// marks_class_9[3]=40;
// console.log(marks_class_9[3]) 

// console.log(typeof marks_class_9)  // arrays ki type humaish object hi aa gi



   // arrays methods
 let num=[1, 2, 3, 4, 5, 6];
 console.log(num)
 let b=num.toString();   // number convert to string
 console.log(b)
 let c=num.join("-")
 console.log(c, typeof c) // arrays methods main hum kisi bhi string ko join ker sktai hai


 //  pop arrays methods
   // pop methods kya hai  .. pop method array main sa last number ko nikal dyth hai
//    num.pop()
//    console.log(num)


//    let r=num.pop()  // pop method main jo last number niklain gai us ko add kernai kai lya r k use kerin ga r k matlb return hai
//    console.log(num, r)
    

    //  push arrays methods
//    let d=num.push(30)   // push return the new arrays length 
//    console.log(num, d)
  

     // shift arrays methods
   let s=num.shift()   // first number to show and second number all not show
   console.log(s)
   console.log(s, num)  // kya ya humra first walai array ko show kerin ga? answer.  g kerin g


   // unshift arrrays methods
   let z=num.unshift(23)   // adding new array length and start main number add ker dyth hai
   console.log(z)



   // delete arrays methods
   let w=[1, 2, 3, 4, 5, 6, 23]
   console.log(w.length)
   delete w[5]
   console. log(w)
   console. log(w.length) // arrays main delete kernai kai bad bhi length chainge nhi hoti 

     // concat arrays methods ..  concat humaish dusra arrays ko aik arrays mian add kernai kai lya use kertai hai
     let num1=[1, 2, 3, 4]
     let num2=[5, 6, 7, 8]
     let num3=[10, 11, 12, 13]
     let newarrays=num1.concat(num2,num3)
     console.log(newarrays)
     console.log(newarrays.length)


    
