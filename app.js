// ARRAY

// // const mevalar = ['olma🍏', 'gilos🍒', 'uzum🍇', 'nok🍐', 'banan🍌', 'shaftoli🍑', 'apelsin🍊']
// // const [olma, gilos, uzum, nok, banan, shaftoli, apelsin] = ['olma🍏', 'gilos🍒', 'uzum🍇', 'nok🍐', 'banan🍌', 'shaftoli🍑', 'apelsin🍊']
// const [olma, gilos, uzum, ...boshqaMevalar] = ['olma🍏', 'gilos🍒', 'uzum🍇', 'nok🍐', 'banan🍌', 'shaftoli🍑', 'apelsin🍊']


// // const olma = mevalar[0]
// // const gilos = mevalar[1]
// // const uzum = mevalar[2]
// // const nok = mevalar[3]
// // const banan = mevalar[4]
// // const shaftoli = mevalar[5]
// // const apelsin = mevalar[6]

// // console.log(olma, gilos, uzum, nok, banan, shaftoli, apelsin)
// console.log(olma, gilos, uzum, boshqaMevalar)


// OBYEKT

// const personObj = {
//     name: 'Samandar',
//     age: 20,
//     job: 'developer'
// }

// const {name: ism, age, job, from = "Uzbekistan"} = {  // o'zgaruvchilar obkekt ichida mavjud bo'lishi kerak 
//     name: 'Samandar',
//     age: 20,
//     job: 'developer',
//     from: 'USA'
// }

// const {name: ism, ...qolganMalumot} = {  // o'zgaruvchilar obkekt ichida mavjud bo'lishi kerak 
//     name: 'Samandar',
//     age: 20,
//     job: 'developer',
//     from: 'USA'
// }

// // const name = personObj.name
// // const age = personObj.age
// // const job = personObj.job

// // console.log(name, age, job)
// console.log(ism, qolganMalumot)




/// UYGA VAZIFA

const playerOne = document.getElementById('playerOne')
const playerTwo = document.getElementById('playerTwo')
const select = document.getElementById('select')
const playerBtnOne = document.getElementById('playerBtnOne')
const playerBtnTwo = document.getElementById('playerBtnTwo')
const resetBtn = document.getElementById('resetBtn')

function clickBtn1 () {
    if (playerOne.innerHTML < +select.value && playerTwo.innerHTML < +select.value) {
        playerOne.innerHTML++
    }
    if (playerOne.innerHTML == +select.value && playerTwo.innerHTML < +select.value) {
        playerOne.style.color = 'green'
        playerTwo.style.color = 'red'
    }
}

function clickBtn2 () {
    if (playerTwo.innerHTML < +select.value && playerOne.innerHTML < +select.value) {
        playerTwo.innerHTML++
    }
    if (playerTwo.innerHTML == +select.value && playerOne.innerHTML < +select.value) {
        playerTwo.style.color = 'green'
        playerOne.style.color = 'red'
    }
}

function reset () {
    playerOne.innerHTML = 0
    playerTwo.innerHTML = 0
    playerOne.style.color = 'black'
    playerTwo.style.color = 'black'
}

playerBtnOne.addEventListener('click', clickBtn1)
playerBtnTwo.addEventListener('click', clickBtn2)
resetBtn.addEventListener('click', reset)
select.addEventListener('click', reset)