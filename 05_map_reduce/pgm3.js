const myNUms = [1,2,3]
// const myTotal = myNUms.reduce(function(acc,currval){
//     console.log(`the acc value is ${acc} and the currval is ${currval}`)
//     return acc + currval;
// },0) // comma k baad jo v value dete hai wo value acc ko assign ho jata hai 
// console.log(myTotal)


const myTotal = myNUms.reduce((acc,curr)=> acc+curr,0)
console.log(myTotal)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const total = shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(total)
