class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        return this._email = value.toUpperCase();
    }

    // getters
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value.toUpperCase();
    }
}
const hitesh = new User("k@exaple","abcd")
console.log(hitesh.password);
console.log(hitesh.email)