const balance = 100;
console.log(balance)
const score = new Number(100)
console.log(score)
console.log(balance.toString().length);
console.log(balance.toFixed(5))
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3))
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))
console.log(Number.MAX_VALUE)
//++++++++++  Maths ++++++++++++++++//
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.sqrt(169))
console.log(Math.min(4,3,1,8))
console.log(Math.max(4,3,1,8))
console.log(Math.floor(Math.random()*10)+1)
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min);