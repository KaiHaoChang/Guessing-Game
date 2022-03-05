let guessing = document.querySelector('.guestAnwser')
let guestAnwser = document.querySelector('#guestAnwser')
let correctAnwser = document.querySelector('.anwser')
let pickNumber = document.querySelector('.introduction')
let countNumber = document.querySelector('.guessTimes')

// Correct Anwser
let anwser = Math.floor(Math.random()*100+1)
let min = 0, max = 100
let count = 0

guessing.addEventListener('click', function(event){
  let geustAnwserValue = guestAnwser.value
  if (geustAnwserValue < 0 || geustAnwserValue >100) {
    alert('Please guess number from 0 to 100')
  } else if (geustAnwserValue === ''){
    alert('Please guess a number')
  } else {
    // put function here
    playGuess(geustAnwserValue)
  }
})
console.log(anwser)
// function 
function playGuess(guessing){

  if ( anwser === parseInt(guessing) ) {
    count+= 1
    correctAnwser.innerHTML = `The correct Anwser is ${anwser} </br> You win`
    countNumber.innerHTML = `Totally guess ${count} times`
  } else if ( anwser < guessing ) {
    max = guessing
    count+= 1
    pickNumber.innerHTML = `Correct anwser is smaller </br> Please guess a Number from ${min} ~ ${max}`
    countNumber.innerHTML = `Your have guess ${count} times`
  } else if ( anwser > guessing) {
    min = guessing
    count+= 1
    pickNumber.innerHTML = `Correct anwser is larger </br> Please guess a Number from ${min} ~ ${max}`
    countNumber.innerHTML = `Your have guess ${count} times`
  }
}
