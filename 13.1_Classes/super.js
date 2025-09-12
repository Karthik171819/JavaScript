//super keyword is used to call the constructor of its parent class to access the parents properties and methods
class Person {
    constructor() {
        console.log("entered parent constructor");
        this.species = "Homo phones";
    }
    eat() {
        console.log("eating");
    }
}

class Engineer extends Person {
    constructor(branch){
        console.log("entered child constructor");
        super(); //invoke the parent class constructor
        console.log("exit child constructor");
        this.branch = branch;
    }
    work() {
        console.log("Experienced engnieeer ");
    }
}

let engObj = new Engineer("CS Engineer");
console.log(engObj);