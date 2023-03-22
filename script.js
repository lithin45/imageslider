const nextElement = document.querySelector('.next')

const prevElement = document.querySelector('.prev')

const imgsElement =document.querySelectorAll('img')

const imageContElement = document.querySelector('.image-container')

let currentImages = 1

let timeout;



nextElement.addEventListener('click', ()=>{
    currentImages++
    clearTimeout(timeout)
    updateImage()
})

prevElement.addEventListener('click', ()=> {
    currentImages--
    clearTimeout(timeout)
    updateImage()
})

updateImage()

function updateImage() {
    if (currentImages > imgsElement.length){
        currentImages = 1
    } else if(currentImages < 1) {
        currentImages = imgsElement.length
    }
    imageContElement.style.transform = `translateX(-${(currentImages - 1) * 500}px)`

    timeout = setTimeout( ()=> {
        currentImages++
        updateImage()
    }, 3000)
}