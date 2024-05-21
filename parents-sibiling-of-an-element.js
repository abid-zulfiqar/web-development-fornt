
// sibiling kya hoti hai dom ko manipulation kernai kai lya
// jub hum first child , last child, child node k use kerti hai tu humain input main array nhi milth  aur node list milth hai
// node list main hum arrays kai mathod ko use nhi ker sktai

// dom collection
// dom collection ko hum read ker sktai hai
// ager hum elem-childnodes main aik aur child add ker dai tu vo change ho jai gh
// hum for of loop k use ker kai un per iterate ker sktai hai

// sibiling and the parents
// same parents kai children ko sibiling khtai hai ( jaisai kai <head> <body> k sibiling hai)
// ( <head> <body> k left ) aur ( <body> <head> k right sibiling hoth hai )


console.log(document.body.firstChild)
a = document.body.firstChild
console.log(a.parentNode) // parent node tab hi koi cheez return kerin gh jub wo node hogi aur ager wo coment node y text node ho gh tab bhi wo return kerin gh ( document aik element nhi hai)
console.log(a.parentElement) // ager valid html element ho tu return kerin gh wernh null return kerin gh
console.log(a.firstChild.nextSibling) // ager elements main space ho gi tu nextsibling show nhi hogi aur first sibling show ho gi