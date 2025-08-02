
function sayname () {
    console.log("K")
console.log("a")
console.log("v")
console.log("y")
console.log("a")

}
//sayname()
// function addnum (number1,number2){
//     console.log(number1+number2);
// }
function addnum(number1,number2){
    // let result = number1+number2
    // return result
    return number1+number2
    console.log("hello") // function m ek baar return likha jaye toh uske baad ka lines execute hee nhi hota kbhi
}
addnum(3,4) //7
addnum(3,"a")//3a
const result = addnum(4,9)
console.log("Result:",result);
function loginusemessage (username) {
    // if username is set like (username="sam") like this then then even if nothing is passed it will print the sam by default 
    // if(username=== undefined){
    //     console.log("please enter username")
    //     return
    // }
    if(!username){ // this also can be used same as above

    }
    return `${username} just logged in`
}
console.log(loginusemessage());
// when empty nothing is passed it print undefined
// when empty string is passed it doesn't print anything // prints just logged in



