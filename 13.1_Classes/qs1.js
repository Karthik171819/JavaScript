class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("viewData");
    }
}

let userObj1 = new User("abc", "abc@gmail.com");
let userObj2 = new User("def", "def@gmail.com");
console.log(userObj1);
console.log(userObj2);
