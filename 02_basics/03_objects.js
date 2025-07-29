// singleton
// const tinder = new Object() // singleton object
const tinder = {}
tinder.id ="abc"
tinder.name="kavya"
tinder.isloggedin
// console.log(tinder)
const regularuser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"kavya",
            lastname:"Raj"
        }
    }
}
// console.log(regularuser.fullname?.userfullname.firstname)
const obj1 = {
    1:"21",
    2:"22"
}
const obj2 = {
    3:"31",
    4:"32"
}
// const obj3 = {obj1,obj2} //nesting
// const obj4 = Object.assign(obj1,obj2) // merging
const obj3 = {...obj1,...obj2}
console.log(obj3)
const users = [
    {
        id:1,
        email:"h1@gmail.com"
    },
    {
        id:2,
        email:"h2@gmail.com"
    },
    {
        id:3,
        email:"h3@gmail.com"
    },
    {
        id:4,
        email:"h4@gmail.com"
    }
]
const i = users[1].email
console.log(i)
console.log(tinder)
console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(Object.entries(tinder))
console.log(tinder.hasOwnProperty('name'))
// destructring of object
const course  = {
    coursename:"js",
    price:"1000",
    courseteacher :"kavya"

}
// destructring method 1
const {courseteacher} = course 
console.log(courseteacher)
// destructring method 2
const {courseteacher:instructor }  = course
console.log(instructor)
//json
// {
//     "name":"hitesh",
//     "coursename":"jsinhindi",
//     "price"="400"
// }




