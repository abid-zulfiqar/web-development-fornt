// // attribute ko kaisa set  aur taik kya jath hai
// let first = document.getElementById("first");
// console.log(first)

// // Element.hasAttribute ("name") method to check for existence of an attribute
// console.log(first.hasAttribute ("class"))  // y true ho gh kyu kai y class body main hai
// console.log(first.hasAttribute ("style"))  // y flase ho gh kyu kai y style main nhi hai

// // Element.getAttribute ("name")method used to get the value of an attribute 
// let a=first.getAttribute("class")
// console.log(a)

// // Element.setAttribute ("name, value") method used to set the value of an attribute 

// // console.log(first.setAttribute ("hidden" , "true")) 
// console.log(first.setAttribute ("class" , "true sachin"))  // hum kisi bhi dive ki call y id change ker sktai hai


// // Element.removeAttribute ("name") method to remove the attribute form elem
// console.log(first.removeAttribute ("class")) // remove attribute sa hum kisi bhi class y id ko remove ker sktai hai
 
// Element.attribute  method to get the collection of all attribute
console.log(first.attributes)

// data -*  data -* ki jagh per hum us attribute ko add kerin gai jo humain taik kernh hogh attribute  hum apnai custom attribute bnh sktai hai    // ager future main is main game attribute add kya jai tu mairi javascript kaam nhi kerin gi is sa bchnai kai lya humain data-custom attribute bunao aur ager mujai data game k function bnhnh hai tu data-game use keru aur mujai data set kai name sa aik property mil jai gi gis sa main is property k use ker kai sar attribute nikal skth hu 

console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)
