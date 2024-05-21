
// // Events other dom properties

// // console.dir function 
// console.log(document.getElementsByTagName("span")[0]) // show the element dom true

// console.dir(document.getElementsByTagName("span")[0]) // show the element as an object with its  all properties show kerwai gh


// // tage name\ node name
// // tage name only exist for elements nods
// console.log(document.body.firstChild.nodeName)
// // node name define for any node ("check , comment, text")
// console.log(document.body.firstElementChild.nodeName)

// // inherhtml and outherhtml
// console.log(first.innerHTML)
// first.inherHTML="<i> hey i am a italic</i>"
console.log(first.inherHTML)

// inherhtml ko hum upadate aur set bhi ker sktai hai  inherhtml  is a valid only for element node . for other node types  we can use nodevalue or data
console.log(document.body.firstChild)
console.log(document.body.firstChild.data)
console.log(document.body.firstChild.nodeValue) 


// // outherhtml main mukmal html bhir ki hoti hai aur is main inherhtml bhi add ker sktai hai
// console.log(first.outherHTML)
// first.outherHTML=<div>where are you from</div>
// console.log(first.outherHTML)


// textcontent kya hai its provides access to the text inside the element. only text minus all the tages
console.log(document.body.textContent)

// the hidden property
first.hidden=false
console.log(first.hidden)
