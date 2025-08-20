const userDetails  = {
    username:"Kavya",
    loginCount:"1",
    roll:"02",


    getUserdetails: function(){
        console.log("Got user details from the database")
        console.log(`Username : ${this.username}`)
        console.log(this)
    }


}

// console.log(user.username)
// console.log(user.getUserdetails());
// console.log(this) // {}

function Userinput(username,logincount,roll){
    this.username = username;
    this.loginCount = logincount;
    this.roll = roll;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this;
//  return this; implicitly defined by default you may write 
}
const user1 = new Userinput("hitesh",12,4);
const user2 = new Userinput("Chai aur Code",11,5)
console.log(user1)
console.log(user2)
// How “new” keyword works:-

// 1. "new" keyword creates a new empty object or we can say instance.
// 2. constructor function is called that will have all the arguments
// 3. "this" keyword is injected in a new instance with all the arguments
// 4. We will receive the new object instance with all the arguments


// The reason of getting undefined is because there is a syntactical mistake we have written console.log(user.getUserDetails()); this line does 2 things, first it calls the method getUserDetails on object user, and in that method there we are logging line "got user details from the database" this line is also printed in the output, secondly it is also logging the return value of getUserDetails but our method is not returning some value, so it implicitly logs "undefined" in the output. 

