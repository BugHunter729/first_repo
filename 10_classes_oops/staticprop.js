class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }
    static createId(){ // no one can access this
        return `123`;
    }
}
const  harsh = new User("harsh")
// console.log(harsh.createId())
class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email;
    }
}
const iphone = new Teacher("kav","k@gmail.com")
iphone.logMe()
// console.log(iphone.createId())
