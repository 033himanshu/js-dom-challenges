const labels = document.querySelectorAll('label')

for(let label of labels){
    const inputId = label.getAttribute('for')
    const displayId = `${inputId.substr(0, inputId.length - 5)}Display`
    const input = document.querySelector(`#${inputId}`)
    const display = document.querySelector(`#${displayId}`)
    input.addEventListener('input',()=>{
        if(input.value==="")
            display.innerHTML="Not provided"
        else
            display.innerHTML=input.value
    })
}