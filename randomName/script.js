const main = document.querySelector("main");
const btn = document.querySelector("button");

let array = ["Hi How are you?", "Hello World!", "Welcome to JavaScript!", "Have a great day!", "Keep coding!", "Stay positive!", "Believe in yourself!", "You can do it!", "Never give up!", "Dream big!"];



btn.addEventListener("click", () => {
    let a = Math.floor(Math.random() * array.length);

    let x=Math.random()*100;
    let y=Math.random()*100;
    let r=Math.random()*360;
    let s=Math.random()*3;

    
    
    let h1 = document.createElement("h1");
    h1.innerHTML = array[a];
    h1.style.color = "white";
    h1.style.position = "absolute";

    h1.style.left = x + "%";
    h1.style.top = y + "%";
    h1.style.rotate = r + "deg";
    h1.style.scale = s;
    main.appendChild(h1);

    console.log(array[a]);
});