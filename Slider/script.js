const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')
const container = document.querySelector('.images')

let counter = 1

prevBtn.addEventListener('click', prevSlide)
nextBtn.addEventListener('click', nextSlide)

function prevSlide() {
    container.animate([{opacity: '.1'}, {opacity: '1'}], {duration: 1000, fill: 'forwards'})
    if (counter === 1) {
        counter = 5
    }

    counter--

    container.style.backgroundImage = `url(img/image${counter}.jpg`
}

function nextSlide() {
    container.animate([{opacity: '.1'}, {opacity: '1'}], {duration: 1000, fill: 'forwards'})
    if (counter === 4) {
        counter = 0
    }

    counter++

    container.style.backgroundImage = `url(img/image${counter}.jpg`
}