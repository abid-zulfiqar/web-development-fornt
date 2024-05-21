let t=document.body.firstElementChild.firstElementChild
console.log(t) // t k mtlb table hai
console.log(t.rows) // ager ap table ki rows chati hai tu
console.log(t.caption) // reference to caption
console.log(t.tHead) // reference to head
console.log(t.tFoot) // tfoot is k nhi hai
console.log(t.tBodies) // collection of <tbody> elements
console.log(tbody.rows) // collection of <tr> inside
console.log(t.sectionRowIndex) // index of tr inside enclosing element
console.log(tr.cells)  // collection of all th ang td
console.log(tr.rowindex) // row number starting form 0
 console.log(t.rows[0].rowIndex)
console.log(td.cellIndex)  // no of cells inside enclosing <tr>
  
// type of documents aur type of window ya donu object hotai hai