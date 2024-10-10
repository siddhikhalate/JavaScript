class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}siddhi`
    }

    set password(value){
        this._password = value
    }
}

const siddhi = new User("h@siddhi.ai", "abc")
console.log(siddhi.email);