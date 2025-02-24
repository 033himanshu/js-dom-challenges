/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];
const track = document.querySelector('#carouselTrack')
const prevBtn = document.querySelector('#prevButton')
const nextBtn = document.querySelector('#nextButton')
const caption = document.querySelector('#caption')
const carouselNav = document.querySelector('#carouselNav') 
//inserting images and indicators
let activeId = 0
const setVisibleImage = (id)=>{
  carouselNav.children[activeId].classList.remove('active')
  carouselNav.children[id].classList.add('active')
  caption.innerHTML = images[id].caption
  track.style.transform = `translateX(${(-id)*100}%)`
  console.log(track.style.transform)
  activeId = id

}
for(let i=0;i<images.length;++i){
    //image insertion
    const div = document.createElement('div')
    div.classList.add('carousel-slide')
    div.style.backgroundImage = `url(${images[i].url})`
    track.appendChild(div)
    // carousel indicator insertion
    const indicator = document.createElement('div')
    indicator.classList.add('carousel-indicator')
    carouselNav.appendChild(indicator)
    indicator.addEventListener('click', ()=>{
      setVisibleImage(i)
    })
}

prevBtn.addEventListener('click',()=>{
  let id = activeId-1
  if(id<0) 
      id = images.length - 1
  setVisibleImage(id)
})
const nextImage = ()=>{
  let id = activeId+1
  if(id==images.length) 
      id = 0
  setVisibleImage(id)
}
nextBtn.addEventListener('click',nextImage)

setVisibleImage(0)



//setting autoplay button
const autoPlayButton = document.querySelector('#autoPlayButton')
const timerDisplay = document.querySelector('#timerDisplay')

let interval;
autoPlayButton.addEventListener('click',()=>{
    if(interval){
      clearInterval(interval)
      timerDisplay.innerHTML=""
      interval=null
      autoPlayButton.innerHTML = 'Start Auto Play'
    }else{
      let time = 5
      interval = setInterval(()=>{
        if(time===0){
          nextImage()
          time = 5
        }
        timerDisplay.innerHTML=`Next Image in ${time} seconds`
        time--
      },1000)
      autoPlayButton.innerHTML = 'Stop Auto Play'
    }
})
