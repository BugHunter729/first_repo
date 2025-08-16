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