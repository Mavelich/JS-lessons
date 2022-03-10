let counter = document.querySelector('.counter')
const addCount = document.querySelector('#addCountBtn')
const lowerCount = document.querySelector('#lowerCountBtn')

let count = 0

addCount.addEventListener('click', incrementCounter)
lowerCount.addEventListener('click', decrementCounter)

function incrementCounter() {
    count++
    counter.innerHTML = count
    if (count > 0) {
        counter.style.color = '#4caf50'
    }
    if (count === 0) {
        counter.style.color = 'fff'
    }
    counter.animate([{ opacity: '.2' }, { opacity: '1' }], { duration: 700, fill: 'forwards' })
}

function decrementCounter() {
    count--
    counter.innerHTML = count
    if (count < 0) {
        counter.style.color = '#f00'
    }
    if (count === 0) {
        counter.style.color = 'fff'
    }
    counter.animate([{ opacity: '.2' }, { opacity: '1' }], { duration: 700, fill: 'forwards' })
}