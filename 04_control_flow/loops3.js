//["","",""] 
//[{},{},{}]
// const arr = [1,2,3,4,5]
// for(const num of arr){
//     console.log(num)
// }
// const greet = "hello"
// for(const gret of greet){
//     console.log(gret)
// }

// maps

// for...in works with objects: It iterates over the enumerable properties (keys) of an object. But it doesn't work directly with Map.

// for...of works with iterables: It works with iterable objects like arrays, Map, Set, etc., to iterate over values. However, plain objects are not iterable directly, so for...of doesn't work with them. To iterate over an object's properties, you would need to use Object.keys(), Object.values(), or Object.entries().
const map = new Map()
map.set('USA','Unitedstate of america')
map.set('IN',"India")
map.set('Fr',"France")
console.log(map)
for (const key in map){
    console.log(key)
}
// for(const [key,value] of map){
//     console.log(key,':-',value)
// }


// // objects are generally not iterable but we can iterate by other methods
// const myObject = {
//     'game1': 'nfs',
//     'game2':'gta'
// }
// // for(const [key,value] of myObject){
// //     console.log(key,':-',value)
// // }