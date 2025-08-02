// let a = 10
// const b = 20
// var c = 30
//var c = 300
let a = 300

if(true){
let a = 10
const b = 20
var c = 30
//console.log("INNER:",a)
}
//console.log(a)
//console.log(b)
//console.log(c)
// the scope is different in console in browser and works differently in code environment (like node)
function one(){
    const username = "kavya"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website) //  cant access website scope issue
    two();
}
one()
if(true) {
    const username = "kavya"
    if(username==="kavya"){
        const website = "youtube"
        //console.log(username+website)
    }
    //console.log(website)
}
//console.log(username)
// ++ interesting++//
console.log(addone(7))
function addone(value){
    return value+1;
}
console.log(addone(5))
// console.log(addtwo(5)) in below case where function is assigned to a variable we cant call the function before initialization but in above case we can call the function before initialization
const addtwo = function(num){
    return num +2;
}
console.log(addtwo(5))