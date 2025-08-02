const user = {
    username:"hitesh",
    price:999,

    welcomeMessage: function() {
        console.log(`${this.username},welcome to website`);
        console.log(this)
    }
}
user.welcomeMessage() // o/p:- hitesh,welcome to website
user.username="sam" // context changed
user.welcomeMessage()// o/p:- sam,welcome to website
// console.log(this) // {}
// console.log(this.user) // undefined
// browser k ander global object kon window object kehte hai aur run krta hai  this
// function chai (){
//     let username = "hitesh"
//     console.log(this.username) // output :- undefined
//     console.log(this)
// }
// chai()
// const chai = function ()  {
//     let username = "kavya"
//     console.log(this.username) // undefined
//     console.log(this) //returns global object 
// }
// chai ()

// const chai = () => {
//     let username = "sam"
//     console.log(this.username) // undefined
//     console.log(this) // return empty object
// }
// chai()   

// explicit method
// const addTwo = (num1,num2) => {
//     return num1+num2;
// } // curly braces rhega toh return likhayega 

//other way to use arrow function (implicit method)
// const addThree =(num1,num2,num3) => num1+num2+num3;
// const addTwo = (num1,num2) =>  num1+num2;
// console.log((addThree(4,5,6)))
// console.log(addTwo(4,9));

// how to return an object using arrow function
const addTwo = (num1,num2) => ({username:"kavya"})
console.log(addTwo())