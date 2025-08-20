function setUsername(username){
    this.username = username;
}
function createUser(username,email,password){
    setUsername.call(this,username)
    this.email = email
    this.password = password
}
const chai = new createUser("Kavya","kavya@","kavya123")
console.log(chai)
