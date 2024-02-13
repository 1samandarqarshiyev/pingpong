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