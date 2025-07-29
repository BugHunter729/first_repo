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

/*
SUMMARRY:

1. Array is written in brackets [  ].
2.Array data type is an object.
3.Array can contain different data types . i.e string,number,boolean,array etc.
4. Array is zero based indexing. It starts with zero.
5. Once changed its original value will also change beacause it is non primitive (refrence) type.

ARRAY METHODs :

1.Push = adds value to last of an array.
2. Pop = removes last value of an array.
3. Unshift = adds value at first of an array.
4.Shift = removes first value of an array.
5. Includes = checks true or false.
6. IndexOf = checks the position of value in number form.
7.Join = converts to string.
8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.

 */

