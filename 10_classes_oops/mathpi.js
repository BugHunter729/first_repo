// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// Object.defineProperty(Math,"PI",{
//     writable: true,
//     enumerable: true,
//     configurable: true
// }) // you can't do this
// console.log(descriptor)
// console.log(Object.getOwnPropertyDescriptor(Math,"PI"))
// console.log(Math.PI)
// Math.PI = 5;
// console.log(Math.PI)
const chai = {
    name:"masalachai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Code phatt jane k chance function lgakr iterate kroge toh")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"))
Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:true,
})

// console.log(Object.getOwnPropertyDescriptor(chai,"name"))
for(let [key,value] of Object.entries(chai)){
    if(typeof value!== 'function'){
             console.log(`${key} and ${value}`);
    }
    
}

