let calendarBlock = document.querySelector('.calendar__dates')
let brigadeList = document.querySelector('.brigade-list')
let taskList = document.querySelector('.tasks__list')

let selectedBrigade

let setTaskEvent = () => {
    let taskBlocks = document.querySelectorAll('.brigade-head')
    taskBlocks.forEach(item => {
        item.addEventListener('click', () => {
            let id = item.getAttribute('data-id')
            let currentBrigade = selectedBrigade.info?.brigades[+id]
            taskList.innerHTML = `
            <div class="tasks__header flex">
                <img src="src/img/${currentBrigade.img}" class="tasks__header-icon" style="background: #${currentBrigade.color}" alt="brigade icon">
                <p>${currentBrigade.name}</p>
            </div>
            `
            currentBrigade.tasks.forEach(el => {
                taskList.innerHTML += `
                <div class="tasks__list-item">
                    ${el.name}
                </div>
                `
            })
        })
    })
}


let createEvents = (daysMatrix) => {
    let calendarElements = document.querySelectorAll('.dates-row__item.active')
    calendarElements.forEach(el => {
        el.addEventListener('click', () => {
            let week = el.getAttribute('data-week')
            let day = el.getAttribute('data-day')

            selectedBrigade = daysMatrix[+week][+day]
            brigadeList.innerHTML = ''
            taskList.innerHTML = ''
            if(selectedBrigade.info?.brigades) {
                selectedBrigade.info?.brigades.forEach((brigade,idx) => {
                    brigadeList.innerHTML += `
                        <div class="brigade-list__item brigade-head" data-id="${idx}">
                            <img src="src/img/${brigade.img}" alt="truck" style="background: #${brigade.color}" class="brigade-head__icon">
                            <div class="brigade-head__name">${brigade.name}</div>
                            <div class="brigade-head__task">${brigade.count}</div>
                        </div>
                `
                    brigade.workers.forEach(worker => {
                        brigadeList.innerHTML += `
                        <div class="brigade-list__item">
                            <img src="src/img/builder.png" alt="builder" class="brigade-list__item-img">
                            <div class="brigade-list__item-text">${worker.name}</div>
                        </div>
                `
                    })
                })
            }
            setTaskEvent(daysMatrix)
        })
    })
}



export default function generateCalendar(daysMatrix) {
    calendarBlock.innerHTML = ''
        daysMatrix.forEach((row,idx) => {
            let element = document.createElement('div')
            element.classList.add('calendar__dates-row')
            element.classList.add('flex')
            row.forEach((item,id) => {
                let rowItem = document.createElement('div')
                rowItem.classList.add('dates-row__item')

                if(item.active)
                    rowItem.classList.add('active')
                else
                    rowItem.classList.add('disabled')

                rowItem.setAttribute('data-week', idx)
                rowItem.setAttribute('data-day', id)

                rowItem.insertAdjacentHTML('beforeend', `<div class="dates-row__item-block">${item.date}</div>`)

                if (item.info?.task && item.active) {
                    let strTask = `
            <div class="dates-row__item-count flex center">
                <img src="src/img/check.png" alt="check image">
                <span>${item.info?.task}</span>
            </div>
            `
                    rowItem.insertAdjacentHTML('beforeend', strTask)
                }

                if (item.info?.brigades && item.info?.brigades.length > 0 && item.active) {
                    let elementBrigades = document.createElement('div')
                    elementBrigades.classList.add('dates-row__item-brigades')
                    elementBrigades.innerHTML += `
                    <div class="dates-row__item-brigades__item" style="background:#65c565">
                        <img src="src/img/safety-hat.png" alt="image brigade">
                        <span>${item.info?.brigades.length}</span>
                    </div>
                    `
                    rowItem.insertAdjacentElement('beforeend', elementBrigades)
                }


                element.insertAdjacentElement('beforeend', rowItem)
            })
            calendarBlock.insertAdjacentElement('beforeend', element)
        })
        createEvents(daysMatrix)
}