
// Alert k use
// Alert ko hum tab use kertai hai jub user ko hum btai hai kai kub kya aur kha kaisa kernh hai hum console.log ki jgh per alert use ker sktai hai

// alert("hello your script work")

// Promp k use
// Promt k use hum tab kertai jub koi user  koi bhi value user sa as input reseave kernai kai lya y input main value dynai kai lya 

alert("Enter the value of a ! ")
let a=prompt("Enter a here :", "544")
// prompt main hum aik dusri string add ker sktai hai jis ko default value khtai hai
// document.write(a)
a=Number.parseInt(a)  // ager ap chatai hai kai number convert to intiger tu number.parseint k use kerin aur intiger aik data type hota hai
alert("You entered a type of " + (typeof a))  // ager ap alert y consol.log main number ki type daikai gai tu wo aik string ho gi

// Confirm k use// Promt k use hum tab kertai jub koi user 
// Confirm k use hum tab kertai jub koi user kuch delete , copy y cut kerth hai 
write= confirm("do you want to write it do page")
if(write){
    document.write(a)
}
else{
    document.write("please allow me to right")
}