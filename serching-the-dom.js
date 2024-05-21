
// dom searching kyu kertai hai
// answer jub elements aik dusara kai kereeb hotai hai us waqt humain dom validation ki zururat hoti hai jaisai kai hum ( first child, parents , siblings, next sibling , previous sibling ) y sub humin mil jati hai aur jub humain malum hi nh ho kai element kha hai tub humain dom searching k zerurat hoti hai

//  get started bootstrap main alert  main milai gh

// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

// const alert = (message, type) => {
//   const wrapper = document.createElement('div')
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     '</div>'
//   ].join('')

//   alertPlaceholder.append(wrapper)
// }

// const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//   alertTrigger.addEventListener('click', () => {
//     alert('Nice, you triggered this alert message!', 'success')
//   })
// }


// // change the card tittle color to red
// let ctitle=document.getElementsByClassName("card-title")[0]
// ctitle.style.color="red" // ager ctitle aik element ho tu us main y css add hogi wernh nhi hogi y kaam hum dusara teriqai sa bhi ker sktai hai jaisa ager y card aik sa zayad ho tu


// // document,getElementByIdy
// // this method is used to  get the element with a given "id"  attribute
// let div=document.getElementById('div')
// div.style.color="blue"

// // document,getElementsByClassName  ( returne element with the given css class)
// // this method is used to  get the element with a given "class"  attribute
// let ctitle=document.getElementsByClassName('card-title')
// console.log(ctitle)

// document.querrySellectorAll
let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color="blue"
ctitles[1].style.color="red"
ctitles[2].style.color="green"
console.log(ctitles)

// document.querySlector (is main hum kis bhi aik k color y us k background colr change ker sktai hai)
let ctitle=document.querySelector(".this")
ctitle.style.color="black"


// document,getElementsByTagName (return elemenet with the give tage name)
console.log(document.getElementsByTagName("a"))
// console.log(document.body.getElementsByTagName("a")) // tu mujai body kai all a tag mil jai gai
// console.log(document.querySelector(".card-title").getElementsByTagName("a")) // hum is terh bhi use ker sktai hai card main jitnai bhi a tag ho sub a jai


// document.getElementsByName  ( serchies the element by the name attribute)
console.log(document.getElementsByName("search"))