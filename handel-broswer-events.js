 //  ager ap chatai hai kai maira click kernai per koi kaap ho aur us kai saat dusrh bhi kaap ho ager ap nai (a ,b) eventlistner banai hai aur ap chatai hai kai un main sa aik eventlistner kaap kerin tu ap alg alg eventlistner lg ker multipal handler use ker sktai hai

//  addEventListener
// (addEventlistener is used to assign multiple handlers to an event)

//  removeEventListener
// removeEventListener handler must be the same function object for this to work

let x=function(e){
    console.log(e.target) // jis function per hum click kerin gai us ko show kerwai gh
    alert("hello world1!")
    }
    let y=function(e){
        console.log(e) // is main jo bhi object ho gai wo sub show kerin gh
        console.log(e.type) // pointer event mil jai gh
        console.log(e.currentTarget) // kis element nai is element ko handle kya aue ager ap kisi bhi box per event use ker rhai hai tu wo us kai under kai elements per bhi work kerin gh
        console.log(e.clientX)
        console.log(e.clientY) // ager ap daiknh chatai hai kia user nai kha per click kya hai tu ( e.clientx) aur (e.clienty) k use kerin
        alert("hello world2!")
        }
    btn.addEventListener('click',x)
    btn.addEventListener('click',y)

    let a=prompt("what is your favorite number?")
    if(a==2){
        btn.removeEventListener('click',x)
    }


    // events object