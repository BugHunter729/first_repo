let myName  = "hitesh       "
let mychannel = "chai       "
// console.log(myName.length)

let myHeroes = [
    "spiderman",
    "batman"
]

let heroPower = {
    thor :"hammer",
    spiderman: "sling",
    getspiderPower: function(){
            console.log(`Spidy power is ${this.spiderman}`)
    }
}
Object.prototype.hitesh = function(){
    console.log("hitesh is present in all objects")
}
Array.prototype.heyhitesh = function(){
    console.log("Hitesh says hello!")
}
 
// heroPower.hitesh()
// myHeroes.hitesh()
// myHeroes.heyhitesh()
// heroPower.heyhitesh() // can't access upper priority object

// inheritance

const user = {
    username:"kavya",
    email: "kavya@example.com"

}
const Teacher = {
    makeVideo: true,
}

const TeachingSupport  = {
    isAvailable: false
}

const TAsupoort = {
    makeAssignment: 'JS Assignment',
    fullname: true,
    // __proto__: TeachingSupport
}
// Teacher: __proto__ = user

Object.setPrototypeOf(TeachingSupport,Teacher)
String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}
myName.truelength();
mychannel.truelength();
"kavyaaa".truelength();
