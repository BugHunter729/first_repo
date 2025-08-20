// //ES6

// class User {
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUser(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new User("chai","kavya@gmail.com","123")
// console.log(chai.encryptPassword())
// console.log(chai.changeUser())

// behind the scenes

// function User(username,email,password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPass = function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUser = function(){
//     return `${this.username.toUpperCase()}`
// }
// const tea = new User("kavya","kavya@jmp","123abc")
// console.log(tea.encryptPass())
// console.log(tea.changeUser())



