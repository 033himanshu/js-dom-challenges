/**
 * Write your challenge solution here
 */
const bulb = document.querySelector('#bulb')
const btn = document.querySelector('#toggleButton')
const bulbStatus = document.querySelector('#status')

btn.addEventListener('click',  ()=>{
    let btnText = ''
    let statusText = ''
    if(bulb.className.indexOf('off')!=-1){
        bulb.classList.remove('off')
        btnText = 'Off'
        statusText = "On"
    }else{
        bulb.classList.add('off')
        btnText = 'On'
        statusText = 'Off'
    }
    btn.innerHTML = `Turn ${btnText}`
    bulbStatus.innerHTML = `Status: ${statusText}`
})