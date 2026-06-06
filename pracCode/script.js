const main = document.querySelector("main");
const btn = document.querySelector("button");

const h1 = document.querySelector("h1");

// btn.addEventListener('click',()=>{
//     console.log("Button Clicked");
//     h1.innerHTML = "Changing User Name ...";
//     setTimeout(()=>{
//         h1.innerHTML = "I am Dipanjan";
//     }, 3000);
// });
let a=0;
let counter =setInterval(()=>{
    a++;
    console.log(a);
}, 100);

setTimeout(()=>{
    clearInterval(counter);
}, 1000);
