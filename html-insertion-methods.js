// dom manipulation main kbhi kbhi elements ko insert kernh perth hai
// insertion methods

let a = document.getElementsByTagName('div')[0];
// a.inherHTML=a.inherHTML+"<h1> hello world </h1>"; // hum kis trah element ko creat ker kai y kaam ker sktai hai
let div = document.createElement('div');
div.innerHTML = '<h1>hello world</h1>';
// a.appendChild(div);
// console.log(document.body.append(div)) 
// ager mujai bouht sara elements ko strategically kernh hai tu main document.createElement k use kerth hu

a.append(div) // opened at the end of node
// a.prepend(div) // insert at the bignig of node
// a.before(div) // ager y div y containar kai under hai tu us sa bahir oper a jai gh 
// a.after(div); // ager y div y containar kai under hai tu us sa bahir nichai  a jai gh 
// a.replaceWith(div) // jo hum nai containar bnhya th ub us ki jgh per containar a gya hai


