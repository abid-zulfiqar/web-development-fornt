


// let a =1;
// let b =2;
// let c =3;
// console.log("one plus average of a and b is ", 1 + (a + b) / 2 );
// console.log("one plus average of b and c is ", 1 + (b + c) / 2 );
// console.log("one plus average of a and c is ", 1 + (a + c) / 2 );



function onePlusAvg(x, y) {
    console.log("don")
    return Math.round (1 + (x + y) / 2)
    // return 1 + (x + y) / 2
}

let a = 1;
let b = 2;
let c = 3;
console.log("one plus average of a and b is ", onePlusAvg(a, b))
console.log("one plus average of b and c is ", onePlusAvg(b, c))
console.log("one plus average of a and c is ", onePlusAvg(a, c))
