const heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]
// heroes.push(dc_heroes)
console.log(heroes)
// console.log(heroes[3][2])

const allheroes = heroes.concat(dc_heroes) //concat return new array doesn't manipulate original array

console.log(allheroes)
// spread operator
const all_new_heroes = [...heroes,...dc_heroes]
console.log(all_new_heroes)
/*
The `concat()` method and the spread operator (`...`) in JavaScript are both used to combine arrays, but they differ in usage and flexibility. 
`concat()` is an array method that merges arrays or values into a new array without modifying the originals, 
using syntax like `arr1.concat(arr2)`. In contrast, the spread operator unpacks array elements and can be used in more 
contexts—such as merging arrays (`[...arr1, ...arr2]`), passing arguments to functions (`Math.max(...nums)`), and cloning objects
 (`{...obj}`)—making it more versatile. Both return new values and do not mutate the originals.
*/
const another_arr = [1,2,3,[[4,5,6],7,[8,9,[10]]]]
const real_const_arr = another_arr.flat(Infinity) //returns a sub array with all  in a single array 
console.log(real_const_arr)
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) // converts string to array
console.log(Array.from({name:"Kavya"}))
//`Array.from({ name: "Kavya" })` returns an empty array 
// because the object is 
// neither iterable nor array-like
// (missing numeric keys and `length`), so to correctly 
// convert the object values to an array, use 
// `Array.from(Object.values({ name: "Kavya" }))` 
// which gives `['Kavya']`.
let score1= 100;
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
