
let emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼']
emojis = [...emojis, ...emojis]
let size = emojis.length

let emojiPos = {}
let sameEmojiPos = []
let moves = 0
let time = 0


const movesSpan = document.querySelector('#moves')
const timeSpan = document.querySelector('#time')

const gameContainer = document.querySelector('#gameContainer')

const shuffle = ()=>{
  for (let i = 0; i < size; i++) { 
    const j = Math.floor(Math.random() * size);
    const temp = emojis[i];
    emojis[i] = emojis[j];
    emojis[j] = temp;
  }
}

let currOpen = []
const setMoves = ()=>{
  movesSpan.textContent =  `Moves: ${moves}`
}
const setTime = (time)=>{
  timeSpan.textContent =  `${time}`
}
let interval = null
const restartGame = () => {
  emojiPos = {}
  sameEmojiPos = []
  currOpen = []
  shuffle()
  gameContainer.innerHTML =''
  moves = 0
  time = 0
  for(let i=0;i<size;++i){
    const div = document.createElement('div')
    div.innerHTML = `
        <div class="card-front">?</div>
        <div class="card-back">${emojis[i]}</div>
    `
    div.classList.add('card')
    gameContainer.appendChild(div)
    div.addEventListener('click',()=>{
      if(div.classList.contains('flipped')) return
      div.classList.add('flipped')
      currOpen.push(i)
      if(currOpen.length===2){
        moves += 1
        setMoves()
        let id = sameEmojiPos.indexOf(currOpen.sort((a, b)=>Number(a)<Number(b) ? -1 : 0).toString())
        console.log(id)
        if(id!=-1){
          sameEmojiPos.splice(id, 1)
          if(sameEmojiPos.length===0){
            alert("winn")
            restartGame()
          }
        }else{
          let tempPos = [...currOpen]
          setTimeout(()=>{
            gameContainer.children[tempPos[0]].classList.remove('flipped')
            gameContainer.children[tempPos[1]].classList.remove('flipped')
          }, 500)
        }
        currOpen = []
      }
    })
    if(emojiPos[emojis[i]])
      emojiPos[emojis[i]].push(i)
    else
      emojiPos[emojis[i]]=[i]
  }
  for(let pos of Object.values(emojiPos)){
    sameEmojiPos.push(pos.toString())
  }
  clearInterval(interval)
  interval = setInterval(()=>{
    time += 0.01
    time = Number(time.toFixed(2))
    setTime(time.toFixed(2))
  }, 10)
  setMoves()
}


restartGame()