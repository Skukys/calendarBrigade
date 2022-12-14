const matrix = [
    {
        date: '2',
        task: 6,
        brigades: [
            {
                img: 'truck.png',
                count: 4,
                color: 'da6666',
                name: 'Бригада 1',
                workers: [
                    {name: 'Работник 1'},
                    {name: 'Работник 2'},
                    {name: 'Работник 3'},
                    {name: 'Работник 4'},
                ],
                tasks: [
                    {name: 'Задание 1', status: 'open'},
                    {name: 'Задание 2', status: 'open'},
                    {name: 'Задание 3', status: 'open'},
                ]
            },
            {
                img: 'safety-hat.png',
                count: 2,
                color: '65c565',
                name: 'Бригада 2',
                workers: [
                    {name: 'Работник 1'},
                    {name: 'Работник 2'},
                    {name: 'Работник 3'},
                    {name: 'Работник 4'},
                ],
                tasks: [
                    {name: 'Задание 1', status: 'open'},
                    {name: 'Задание 2', status: 'open'},
                    {name: 'Задание 3', status: 'open'},
                ]
            },
        ]
    },
    {
        date: '15',
        task: 2,
        brigades: [
            {
                img: 'truck.png',
                count: 4,
                color: 'da6666',
                name: 'Бригада 1',
                workers: [
                    {name: 'Работник 1'},
                    {name: 'Работник 2'},
                    {name: 'Работник 3'},
                    {name: 'Работник 4'},
                ],
                tasks: [
                    {name: 'Задание 1', status: 'open'},
                    {name: 'Задание 2', status: 'open'},
                    {name: 'Задание 3', status: 'open'},
                ]
            },
            {
                img: 'safety-hat.png',
                count: 2,
                color: '65c565',
                name: 'Бригада 2',
                workers: [
                    {name: 'Работник 1'},
                    {name: 'Работник 2'},
                    {name: 'Работник 3'},
                    {name: 'Работник 4'},
                ],
                tasks: [
                    {name: 'Задание 1', status: 'open'},
                    {name: 'Задание 2', status: 'open'},
                    {name: 'Задание 3', status: 'open'},
                ]
            },
        ]
    },
    {
        date: '22',
        task: 2,
        brigades: [
            {
                img: 'truck.png',
                count: 4,
                color: 'da6666',
                name: 'Бригада 1',
                workers: [
                    {name: 'Работник 1'},
                    {name: 'Работник 2'},
                    {name: 'Работник 3'},
                    {name: 'Работник 4'},
                ],
                tasks: [
                    {name: 'Задание 1', status: 'open'},
                    {name: 'Задание 2', status: 'open'},
                    {name: 'Задание 3', status: 'open'},
                ]
            },
            {
                img: 'safety-hat.png',
                count: 2,
                color: '65c565',
                name: 'Бригада 2',
                workers: [
                    {name: 'Работник 1'},
                    {name: 'Работник 2'},
                    {name: 'Работник 3'},
                    {name: 'Работник 4'},
                ],
                tasks: [
                    {name: 'Задание 1', status: 'open'},
                    {name: 'Задание 2', status: 'open'},
                    {name: 'Задание 3', status: 'open'},
                ]
            },
        ]
    },
    {
        date: '24',
        task: 2,
        brigades: [
            {
                img: 'truck.png',
                count: 4,
                color: 'da6666',
                name: 'Бригада 1',
                workers: [
                    {name: 'Работник 1'},
                    {name: 'Работник 2'},
                    {name: 'Работник 3'},
                    {name: 'Работник 4'},
                ],
                tasks: [
                    {name: 'Задание 1', status: 'open'},
                    {name: 'Задание 2', status: 'open'},
                    {name: 'Задание 3', status: 'open'},
                ]
            },
            {
                img: 'safety-hat.png',
                count: 2,
                color: '65c565',
                name: 'Бригада 2',
                workers: [
                    {name: 'Работник 1'},
                    {name: 'Работник 2'},
                    {name: 'Работник 3'},
                    {name: 'Работник 4'},
                ],
                tasks: [
                    {name: 'Задание 1', status: 'open'},
                    {name: 'Задание 2', status: 'open'},
                    {name: 'Задание 3', status: 'open'},
                ]
            },
        ]
    },
    {
            date: '27',
            task: 4,
            brigades: [
                {
                    img: 'truck.png',
                    count: 4,
                    color: 'da6666',
                    name: 'Бригада 1',
                    workers: [
                        {name: 'Работник 1'},
                        {name: 'Работник 2'},
                        {name: 'Работник 3'},
                        {name: 'Работник 4'},
                    ],
                    tasks: [
                        {name: 'Задание 1', status: 'open'},
                        {name: 'Задание 2', status: 'open'},
                        {name: 'Задание 3', status: 'open'},
                    ]
                },
                {
                    img: 'safety-hat.png',
                    count: 2,
                    color: '65c565',
                    name: 'Бригада 2',
                    workers: [
                        {name: 'Работник 1'},
                        {name: 'Работник 2'},
                        {name: 'Работник 3'},
                        {name: 'Работник 4'},
                    ],
                    tasks: [
                        {name: 'Задание 1', status: 'open'},
                        {name: 'Задание 2', status: 'open'},
                        {name: 'Задание 3', status: 'open'},
                    ]
                },
            ]
        },
]

const matrixDate = [
    [{date:'',active: false},{date:'',active: false},{date:'',active: false},{date:'',active: false},{date:'',active: false},{date:'',active: false},{date:'',active: false}],
    [{date:'',active: false},{date:'',active: false},{date:'',active: false},{date:'',active: false},{date:'',active: false},{date:'',active: false},{date:'',active: false}],
    [{date:'',active: false},{date:'',active: false},{date:'',active: false},{date:'',active: false},{date:'',active: false},{date:'',active: false},{date:'',active: false}],
    [{date:'',active: false},{date:'',active: false},{date:'',active: false},{date:'',active: false},{date:'',active: false},{date:'',active: false},{date:'',active: false}],
    [{date:'',active: false},{date:'',active: false},{date:'',active: false},{date:'',active: false},{date:'',active: false},{date:'',active: false},{date:'',active: false}],
]


let clearMatrix = () => {
    matrixDate.forEach((item,idx) => {
        item.forEach((el,id) => matrixDate[idx][id] = {date:'',active:false})
    })
}
function generateMatrix(dateTime) {
    
    clearMatrix()


    let date = new Date(dateTime)
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    let currentDate = new Date()
    let count = 1
    let checked = false



    for (let i = 0; i < 35; i++) {
        let matrixRow = Math.floor(i / 7)
        let itemRow = i -(matrixRow * 7)
        date.setDate(count)
        if(((date.getDay() === i + 1) || date.getDay() === 0) && !checked) {
            checked = true
            matrixDate[matrixRow][itemRow].date = date.getDate().toString()
        }

        if(checked && (date >= currentDate)) {
            matrixDate[matrixRow][itemRow].active = true
        }


        if(count <= lastDay.getDate() && checked) {
            matrixDate[matrixRow][itemRow].date = date.getDate().toString()
        }

        if(checked)
            count++
    }

    return matrixDate
}

export default function createMatrix(date){
    let res = generateMatrix(date)

    matrix.forEach((item,id) => {
        matrixDate.forEach((el,idx) => {
            let elId = el.findIndex(day => day.date === item.date)
            if(elId !== -1){
                res[idx][elId].info = item
                res[idx][elId].active = true
            }
        })
    })
    return res
}