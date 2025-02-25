const clock = document.querySelector('.clock')
const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const digitalClock = document.querySelector('.digital-clock')
const date = document.querySelector('.date')
const dateFormat = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
const setNumbersOnClock = () => {
    for(let i=1;i<=12;++i){
        const div = document.createElement('div')
        div.classList.add('number')
        div.innerHTML = `<span>${i}</span>`
        div.style = `--rotation : ${30*i}deg`
        clock.appendChild(div)
    }
}
setNumbersOnClock()
const padNum = (num)=>{
    return num<10 ? `0${num}` : `${num}`
}

const renderClock = () => {
    const currDate = new Date()
    const hr = currDate.getHours() % 12 || 12
    const min = currDate.getMinutes()
    const sec = currDate.getSeconds()
    const todayDate = dateFormat.format(currDate)
    digitalClock.textContent = `${padNum(hr)}:${padNum(min)}:${padNum(sec)}`
    date.textContent = todayDate
    if(sec!==0){
        second.style.transition =''
        hour.style.transition =''
        minute.style.transition =''
    }
    hour.style.transform = `rotate(${hr*30+(min*.5)}deg)`
    minute.style.transform = `rotate(${min*6+(sec*.1)}deg)`
    second.style.transform = `rotate(${sec*6}deg)`
    if(sec===0){
        second.style.transition = 'None';
        hour.style.transition = 'None';
        minute.style.transition = 'None';
    }
}

setInterval(renderClock, 1000)
renderClock()