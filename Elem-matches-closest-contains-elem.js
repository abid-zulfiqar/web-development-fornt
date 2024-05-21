
// dom ko search kernai kai yai (matches elem) , (contains elem) , (closest elem) use hotai hai.

//(Elem matches) to check if element matches the given css setector
let id1=document.getElementById("id1")
let sp1=document.getElementById("sp1")

console.log(id1)
console.log(id1.matches(".class"))  // ya false ho gh kyu kai y ( .class ) css main nhi hai
console.log(id1.matches(".box"))

// ( elem closest ) to look for the nearest ancester that matches the given css selecter  
console.log(sp1.closest(".box"))

// ( elem contains ) ager elemB elemA kai inside hai tu true retuen kerin wernh y false return kerin gh aur ager elemB kud elemA hai tu y true return kerin gh
console.log(id1.contains(sp1)) // y true ho gh kyu kai id1 kai under sp1 hai
console.log(sp1.contains(sp1)) // y true ho gh kyu kai sp1 kai under sp1 hai
console.log(sp1.contains(id1)) // y false ho gh kyu kai sp1 kai under id1 nhi hai

