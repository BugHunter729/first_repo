//A singleton object in JavaScript is an object that is created only once and provides a single shared instance 
// throughout the program, usually created using object literals like const obj = { key: "value" };.
//This object singleton has only one instance — reused wherever it's referenced.

//Multiple instances in JavaScript are created using constructor functions or classes with the new keyword, 
// allowing each object to have its own separate copy of properties and methods.

//Object literals 
const mysym = Symbol("key1")
const jsuser = {
    name:"Hitesh", 
    "fullname":"kumar",
    [mysym]:"mykey1",
    age:18,
    location:"kochi",
    email:"k@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]
}
console.log(jsuser.email)
console.log(jsuser["fullname"])
console.log(jsuser["email"])
console.log(jsuser[mysym])
console.log(mysym)
jsuser.email = "hitesh@gmail.com"
console.log(jsuser["email"])
// Object.freeze(jsuser) freezes the user u cant change anything in object
jsuser.email="h@gmail.com"
console.log(jsuser.email)
console.log(jsuser)
jsuser.greeting = function(){
    console.log("hello jsuser") //to print any value from an object jsuser we will use string interpolation where we use backticks inside console.log 
    console.log(`hello js user my name is ${this.name}`)
}
console.log(jsuser.greeting())
