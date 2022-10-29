const disable = 'disable';
const active = 'active';
const serviceLists = document.querySelector('.service-lists')
const serviceList = document.querySelectorAll('.service-list')
const srserviceInfoBlock = document.querySelectorAll('.srservice-info-block')
const infoBlock = document.querySelector('.service-info')

const amazingBlog = document.querySelector('.work-tabs')
const amazingTabs = document.querySelectorAll('.work-tab')
const workBlogs = document.querySelector('.work-blogs')
const workBlog = document.querySelectorAll('.blog')
const workBtn = document.querySelector('.work-btn')
const loader = document.querySelector('.loader')

let arr =Array.from(workBlog)
let flag = 12

serviceLists.addEventListener('click', chengeInfo)
amazingBlog.addEventListener('click', chengBlog)
workBtn.addEventListener('click', cheng)



function chengeInfo(elem){
    if(elem.serviceList !== active){
        serviceList.forEach((e)=>{
            e.classList.remove(active)
            findeInfo(elem.target)
        })
    }
    elem.target.classList.add(active)
}

function findeInfo(item){
    
    for(let i of infoBlock.children){
        if(i.dataset.article === item.dataset.article){
            i.classList.add(active)
            i.classList.remove(disable)
        }else{
            i.classList.remove(active)
            i.classList.add(disable)
        }
    }
}
function chengBlog(elem){
    if(elem.amazingTabs !== active){
        amazingTabs.forEach((e)=>{
            e.classList.remove(active)
            findeBlog(elem.target)
        })
    }
    elem.target.classList.add(active)
}

function cheng(){
    flag = 24
    loader.classList.add(active)
    workBtn.remove(workBtn)
    setTimeout(function(){ workBlog.forEach((i)=>{
        i.classList.add(active)
        i.classList.remove(disable)
    })
    amazingTabs.forEach((elem)=>{
        if(elem.dataset.article === 'all'){
            elem.classList.add(active)
        }else{
            elem.classList.remove(active)
        }
        
    })
    loader.classList.remove(active)
    loader.classList.add(disable)
    }, 3000)
}


function cut(){
     
    if(flag === 12){
        
        arr.splice(12)
        
    }else if(flag === 24){
        arr = workBlog
        
    }

    return arr
}

function findeBlog(item){
    cut ()
    for(let i of arr){
        if(i.dataset.article === item.dataset.article){            
            i.classList.add(active)
            i.classList.remove(disable)
        }else if(item.dataset.article === 'all'){
            i.classList.add(active)
            i.classList.remove(disable)
        }else{
            i.classList.remove(active)
            i.classList.add(disable)
        }            
    }

}


