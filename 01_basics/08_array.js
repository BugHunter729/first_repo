const myarray = [0,1,2,3,4,5]
const Heroes = ["doraemon","bheem"]
const myarr = new Array(1,2,3,4);
console.log(myarray[0])
console.log(myarray.length)
console.log(Heroes.length)
// array methods
myarr.push(6)
console.log(myarr)
myarr.pop(7)
console.log(myarr)
myarr.unshift(9)
myarr.unshift(10)

console.log(myarr)
myarr.shift()
console.log(myarr)
console.log(myarr.includes(1))
console.log(myarr.indexOf(9))
const newarr = myarr.join()
console.log(myarr)
console.log(newarr)

//slice , splice
console.log("A",myarr)
const myn1 = myarr.slice(1,3)
console.log(myn1)
console.log("B",myarr)
const myn2 = myarr.splice(0,5) // starting index 0 till count of 5 element (not upto index 5)
console.log(myn2
)
console.log("C",myarr) 



