const name = "kavya"
const repo = 60
// console.log(name+repo+"Value")  this is outdated
console.log(`Hello my name is ${name} & my repo count is ${repo}`);
const gameName = new String('kavya-it')
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3))
console.log(gameName.indexOf('-'))
const newString = gameName.substring(-8,4)
console.log(newString)
const anotherString  = gameName.slice(-8,4)
console.log(anotherString)
const newString1 = "         hitesh      "
console.log(newString1)
console.log(newString1.trim())
const url = "https://hitesh.com/hitesh%20choudhary"
const url1= url.replace('%20','-')
console.log(url1)
console.log(url1.includes('-'))
console.log(gameName.split('-'))
