// Primitive 
//7 types : String,Number, Boolean,null,undefined,Symbol,BigInt
//it is a dynamically typed language



//Symbol declaration:
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId)
const bigNumber = 76239498327423759n
console.log(typeof bigNumber)


//Reference Data-types(Non-Primitive)
//Array,Objects,Functions
const heros =  ["shaktiman","hacker","bheem"] ;
//OBject
let myob = {
    name:"kavya",
    age: 22,
}


const myfunc = function(){
    console.log("Hello")
}
console.log(typeof myob)
/*
String - string
Number - number
Boolean - Boolean
Null - object(****)
Undefined - undefined
BigInt - bigint

Non-primitive datatypes:
Array - object
Function - function(object)
Object - object

//https://262.ecma-international.org/5.1/#sec-11.4.3
*/

// Stack(Primitive) , Heap (Non-primitive)


//example
let myutube = "hackerdotcom"
let anothername = myutube   // another copy of myutube is made and assigned to anothername variable

anothername = "chaiaurcode"
console.log(myutube) // ouput hackerdotcom
console.log(anothername) // chaiaurcode

// object
let userone  = {
    email :"kavya@gmail.com",
    roll: 22
}
let usertwo = userone
usertwo.email = "kavya1@gmail.com"
console.log(userone.email,usertwo.email);