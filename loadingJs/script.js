const main = document.querySelector("main");
const btn = document.querySelector("button");
const inner=document.querySelector(".inner");

btn.addEventListener("click",()=>{
    let count=0;

    let load=setInterval(()=>{
        btn.style.pointerEvents="none";
        count++;
        inner.style.width=count+"%";
    },100)
    setTimeout(()=>{
        clearInterval(load);
    },10000)


})