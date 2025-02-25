const items = document.querySelectorAll('.accordion-item')
let prevItem = null
for(let item of items){
    const button = item.querySelector('button')
    button.addEventListener('click', ()=>{
        if(prevItem){
            prevItem.classList.remove('active')
        }
        if(prevItem!==item){
            item.classList.add('active')
            prevItem = item
        }
    })
}