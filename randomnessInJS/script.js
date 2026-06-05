const main = document.querySelector('main');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {

    let x=Math.random()*100
    let y=Math.random()*100
    let r=Math.random()*360

    let c1=Math.floor(Math.random()*256)
    let c2=Math.floor(Math.random()*256)
    let c3=Math.floor(Math.random()*256)

    let box = document.createElement('div')
    box.style.height='50px'
    box.style.width='50px'
    box.style.backgroundColor='red'
    box.style.position='absolute'
    box.style.left=x+'%'
    box.style.top=y+'%'
    box.style.rotate=r+'deg'

    box.style.backgroundColor= `rgb(${c1},${c2},${c3})` 


    main.appendChild(box)




})