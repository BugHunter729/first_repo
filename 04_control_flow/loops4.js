// const myObject= {
//     js:"javascript",
//     cpp:"c++",
//     py:"python"
// }
// for (const key in myObject){
//     console.log(key) // o/p is all the keys
// }
// for(const key in myObject){
//     console.log(myObject[key]) // o/p is all the key values
// }
// for(const key in myObject){
//     console.log(`${key} shortcut is for  ${myObject[key]}`)
// }
// const programming = ["js","rb","py","java"]
// for(const key in programming){
//     console.log(key) // o/p:- 0,1,2,3
// }
// for(const key in programming){
//     console.log(programming[key]) // js rb py java
// }

// const map = new Map()
// map.set('USA','Unitedstate of america')
// map.set('IN',"India")
// map.set('Fr',"France")
// console.log(map)
// for (const key in map){
//     console.log(key)
// }


const coding = ["js","rb","py","cpp"]
// coding.forEach(function(items){
//     console.log(items)
// })
// coding.forEach( (item) =>{
//     console.log(item)
// })
// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)
// coding.forEach((item,index,arr)=>{
//  console.log(item,index,arr)
// })
const myCoding = [
    {
        languagename:"js",
        extension:".js"
    } ,
    {
        languagename:"py",
        extension:".py"

    },
    {
        languagename:"cpp",
        extension:"c++"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languagename)
})