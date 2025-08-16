#porjects related to DOM

##project link

[click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#solution code 

```javascript
console.log("hitesh")
```

##project 1
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