const clientIco = document.querySelectorAll('.ico-client') //dots
const clientSliderText = document.querySelectorAll('.client-slider-text')//slides

const clientArr = document.querySelector('.ico-clients')
const clientText = document.querySelector('.client-slider')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')

clientArr.addEventListener('click', chooseClient)
prevBtn.addEventListener('click', cutentSlide)
nextBtn.addEventListener('click', plusSlide)

let slideIndex = 0;


function plusSlide(){
    showSlides(slideIndex += 1)
}
function cutentSlide(){
    showSlides(slideIndex -= 1)
}

function showSlides(n){
    let i;
    if(n >= clientSliderText.length){
        slideIndex = 0;
        
    }
    if(n < 0){
        slideIndex = 3
    }
    for(i = 0; i < clientIco.length; i++){
        clientSliderText[i].classList.remove('active')
    }
    for(i = 0; i < clientIco.length; i++){
        clientIco[i].classList.remove('active')
    }
    clientSliderText[slideIndex].classList.add('active')
    clientIco[slideIndex].classList.add('active')
}

function chooseClient(elem){
    
    if(elem.clientIco !== active && elem.target.dataset.article){
        
        clientIco.forEach((e)=>{
            e.classList.remove(active)
            findeClient(elem.target) 
        })
        const arr = Array.from(clientIco)
    let tar = elem.target
    slideIndex = arr.indexOf(tar) 
    }
    elem.target.classList.add(active) 
          
}
function findeClient(item){
    for(let i of clientText.children){
        if(i.dataset.article === item.dataset.article){
            i.classList.add('active')
            
        }else{
            i.classList.remove('active')
            
        }
    }
}


