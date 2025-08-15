const userEmail = [] 
// when [] output is got user email 
// when empty string value like "" output is dont have user email

if(userEmail){
    console.log("Got user email")
}
else {
    console.log("dont have user email")
}
//falsy values :- false,0,-0,Big Int 0n,"",undefined,NaN,
//truthy values:- true,1,"0",'false'," ",[],{},function(){},
// checking if array is empty or not
if(userEmail.length===0){
    console.log("Array is empty")
}
const emptyObj = {}
// checking if object is empty or not
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}
// if false ==0 then o/p is true
//if false=='' then o/p is true
//if 0=='' then o/p is true
// Nullish Coalescing Operator (??) : null undefined
// let val1;
// // val1=10??3
// // val1 = null ??10
// // val1 = undefined ?? 10
// val1 = null ?? 10 ?? 20
// console.log(val1)


//ternary operator
// condition ? true :false
const iceTeaPrice = 100
iceTeaPrice>=80 ? console.log("more than 80") : console.log("less than 80")
