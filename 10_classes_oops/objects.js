
function multi(num){
    return num*5;
}
multi.power=2;
console.log(typeof multi)
console.log(multi(5))
console.log(multi.power)
console.log(multi.prototype)

function createUser (username,score){
    this.username = username;
    this.score = score;
    // console.log(username)
    // console.log(score)
}
createUser.prototype.increment = function(){
    this.score = score++;
}
createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`)
}
// console.log(createUser("Kavya","100"))
const chai = new createUser("Kavya",100)
const tea = new createUser("Harsh",200)
chai.printMe();
chai.increment();
// console.log(chai," ",tea)

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/



// Basically the summary of the video is : 

//  1) If you want that a method should be accessible or present in all objects in javascript (for ex: arrays, strings, functions,etc) then you can set your own method in the top level Object (because everything is an object in javascript) by using | Object.prototype.{method name} = function(){} | , after doing this you will have the access of your {method.name} from all objects for ex: every array that you declare, every string that you declare and so on. 

// 2) But lets say if you want a certain method that should be accessible only on a certain object ( for example : (this is used in the video) you want a trueLength(){this method returns the true length of an array by trimming all the whitespaces} method to accessed on all String declarations , then you can be like | String.prototype.trueLength = function(){ code that does trimming and return length } | and this will be accessible on all strings . 

// 3) this keyword in javascript refers to the current context of who is calling . matlab this boleto jisne bulaya . example: if you say  | "hemant   ".trueLength() | then how will the trueLength() method knows that on whom it have to perform . so we use this in the trueLength() function definition so it will automatically take the context of by whom the method is callled , boleto jisne bulaya uska kaam hoga.....
