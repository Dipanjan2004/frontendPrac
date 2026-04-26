let inc = document.querySelector("#inc")
let dec = document.querySelector("#dec")
let num=document.querySelector("#box h2")

let count=0
inc.addEventListener('click',function(){
    count=count+1;
    num.innerHTML=count
})

dec.addEventListener('click',function(){
    count=count-1;
    num.innerHTML=count
})