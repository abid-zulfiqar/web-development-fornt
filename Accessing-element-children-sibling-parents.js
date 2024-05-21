// dom collection
// children
console.log(document.body.firstChild)  // first child return
console.log(document.body.lastChild)  //  lastchild return
console.log(document.body.childNodes)  // all child return

// elem.childNodes[0]===elem.firstChild
// elem.childNodes all element ko lai gh
// elem.firstchild first element ko lai gh
elem.childNodes(elem.ChildNodes.length-1)  //===elem.lastChild

let arr=Array.from(document.body.childNodes)  // ager ap aik nodelist ko array main convert kernh chatai hai tu
console.log(arr)