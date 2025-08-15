// if
// if(/*anycondition*/){

// }
const isUserLoggedin = true;
if(isUserLoggedin){

}
const temp = 40;
// if(temp<50){
//     console.log("less than 50")
// }
// console.log("temp > 50")
if(temp===40){
    console.log("less than 50")
}else{
console.log("temp > 50")
}
//operators used >,<,>=,<=,==,!=,===(checks equality and data type also), !==
const score =200;
if(score>100){
    const power = "fly"
    console.log(`User power :${power}`)
}
// console.log(`User power:${power}`)
//var use kroge toh scope ka jhanjhat khtm ho jata hai javascript mein 
//isilie safety k lie code maintainability k lie hmlog let ya const ka use krte hai hmesha

const balance = 1200
// if(balance<500) console.log("true"),
// console.log("test done") // unreadable code
// if(balance<500){
//     console.log("false")
// } else if(balance<750){
//     console.log("false1")
// }
// else {
//     console.log("true")
// }
const UserLoggedin = true;
const debitcard = true;
const LoggedInFormGoogle = false
const loggedinformemail = true
if(UserLoggedin && debitcard){
    console.log("Allow to buy course")
}
if(LoggedInFormGoogle || loggedinformemail){
    console.log("user logged in")
}