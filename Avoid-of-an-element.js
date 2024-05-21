
let b =document.body
console.log("first child b is ", b.firstChild) // jub hum first child daiktai hai tu hum child node daik tai hai aur child node aik text nod, comment node y element node ho skth hai
console.log("first element child b is ", b.firstElementChild)  // jub hum first element child liktai hai tub humai element hi milai gh us main chai jitni bhi space ho aur jitnai bhi comment likh do phir bhi element hi milai gh

// color change body in javascript
const changebodycolor=()=>{
    document.body.firstElementChild.style.background="red"
}
