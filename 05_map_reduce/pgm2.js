const myNumbers = [1,2,3,4,5,6,7,8,9]
// const newNUms = myNumbers.map((num)=> num+10)
// console.log(newNUms)
// const newNUms = myNumbers.map((num)=>  {return num+10})
// console.log(newNUms)
// myNumbers.forEach((num,i,arr)=>{return arr[i] = num+10});
// console.log(myNumbers)
// const new1 = myNumbers.filter((num)=>{
//     return num>15;
// })
// console.log(new1)

const newNUms = myNumbers.map((num)=>num+10).map((num)=>num+2)
                .filter((num)=>num>16)
console.log(newNUms)