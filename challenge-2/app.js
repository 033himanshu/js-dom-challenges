/**
 * Write your challenge solution here
 */
const heading = document.querySelector('#mainHeading')

const buttons =document.querySelectorAll('button')

for(let button of buttons){
    button.addEventListener('click',(event)=>{
        if(event.target.id=='resetButton')
            heading.style.color = "#000000"
        else
            heading.style.color = getComputedStyle(event.target).backgroundColor
    })
}