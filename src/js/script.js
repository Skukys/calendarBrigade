let daysBlock = document.querySelector('.calendar__days')
let monthText = document.querySelector('.calendar__change-month')
let arrowRight = document.querySelector('.calendar__change-arrow.right')
let arrowLeft = document.querySelector('.calendar__change-arrow.left')

import createMatrix from './generateDates.js'
import generateCalendar from './generateCalendar.js'

let days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
days.forEach(item => daysBlock.innerHTML += `<div class="calendar__days-item">${item}</div>`)


let date = new Date()

let updateDateTitle = () => {
    monthText.innerHTML = months[date.getMonth()] + ' ' + date.getFullYear()
}

updateDateTitle()

arrowRight.addEventListener('click', () => {
    if (date.getMonth() !== 11) date = new Date(date.getFullYear(), date.getMonth() + 1, 1)
    else date = new Date(date.getFullYear() + 1, 0, 1)
    updateDateTitle()
    let daysMatrix = createMatrix(date.getTime())
    generateCalendar(daysMatrix)
})

arrowLeft.addEventListener('click', () => {
    if (date.getMonth() !== 0) date = new Date(date.getFullYear(), date.getMonth() - 1, 1)
    else date = new Date(date.getFullYear() - 1, 11, 1)
    updateDateTitle()
    let daysMatrix = createMatrix(date.getTime())
    generateCalendar(daysMatrix)
})

let daysMatrix = createMatrix(date.getTime())
generateCalendar(daysMatrix)