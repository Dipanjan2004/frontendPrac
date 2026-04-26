const inc = document.querySelector("#inc")
const dec = document.querySelector("#dec")
const num=document.querySelector("#box h2")
const reset=document.querySelector("#reset")

let count=0
function render(){
    
    num.textContent=count
    if(count<0){
        num.style.color="red"
    }
    else{
        num.style.color="white"
    }
}
inc.addEventListener('click',function(){
    count=count+1;
    render()
})

dec.addEventListener('click',function(){
    count=count-1;
    render()
})

reset.addEventListener('click',function(){
    count=0
    render()
})
