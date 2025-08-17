#porjects related to DOM

##project link

[click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code 

```javascript
console.log("hitesh")
```

## project 1
```javascript

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")


buttons.forEach(function(button){
  console.log(buttons);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    // using if condition
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
      if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
      if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
      if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    //using switch condtion
    // switch(e.target.id){
    //   case 'grey': body.style.backgroundColor = e.target.id
    //   break;
    //   case 'white': body.style.backgroundColor = e.target.id
    //   break;
    //   case 'blue': body.style.backgroundColor = e.target.id
    //   break;
    //   case 'yellow': body.style.backgroundColor = e.target.id
    //   break;
    // }
  })
});
```

## project2
``` javascript
const form = document.querySelector('form')
// this use case will give you empty value
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results  = document.querySelector('#results')
  if(height === ' '||height<0||isNaN(height)){
    results.innerHTML = `please give a valid height ${height}`
  }
  else if(weight === ' '||weight<0||isNaN(weight)){
    results.innerHTML = `please give a valid weight ${weight}`
  }
  else {
    const bmi = (weight /((height*height)/10000)).toFixed(2)
    // // show the results
    // const res = results.innerHTML = `<span>${bmi}</span>`
    if(bmi<18.6){
      results.innerHTML = `<span>your bmi is ${bmi} and you are under weight</span>`
    }
    else if(bmi >= 18.6 && bmi <= 24.9){
      results.innerHTML = `<span>your bmi is ${bmi} and you are normal</span>`
    } else {
      results.innerHTML = `<span>your bmi is ${bmi} and you are overweight</span>`
    }
  }
})
```

## Project 3
``` javascript
const t =  document.querySelector('#clock')
// const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date();
// console.log(date.toLocaleTimeString())
t.innerHTML = date.toLocaleTimeString();
},1000)
```
## project 3
``` javascript 
let random = parseInt(Math.random()*100 +1)

const submit = document.querySelector('#subt')
const userInput =  document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining  = document.querySelector('.lastResult');
const lowhigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuess = []
let numGuess = 1;
let playGame = true;
if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess);
    validateGuess(guess)
  })
}
function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  } else if(guess<1){
    alert('Please enter a valid number')
  }
  else if(guess>100){
    alert('Please enter a valid number')
  }
  else {
    prevGuess.push(guess)
    if(numGuess===11){
      displayGuess(guess)
      displayMessage(`Game Over , Random number was ${random}`)
      endGame()
    }
    else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
  //
}
function checkGuess(guess){
  if(guess===random){
    displayMessage(`You guessed it right`)
    endGame()
  } else if(guess<random){
    displayMessage('The number is too low')
  }
  else if(guess>random){
    displayMessage('The number is too high')
  }
  
  //
}
function displayGuess(guess){
  userInput.value = ' '
  guessSlot.innerHTML+=`${guess} `
  numGuess++;
  remaining.innerHTML = `${11-numGuess}`
}
function displayMessage(message){
  lowhigh.innerHTML = `<h2>${message}</h2>`
  //
}
function newGame (){
  const newGamebutton = document.querySelector('#newgame')
  newGamebutton.addEventListener('click',function(e){
    random = parseInt(Math.random()*100 +1);
    lowhigh.innerHTML = ' '
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = ' '
    remaining.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame= true;
  })
}
function endGame (){
  userInput.value = ' '
  userInput.setAttribute('disabled',' ')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newgame"> Start new game</h2>`
  startOver.appendChild(p)
  playGame = false;
  newGame()
  //
}
```






