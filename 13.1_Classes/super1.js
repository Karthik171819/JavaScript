class Person {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log("eat");
    }
}

class Engineer extends Person {
    constructor(name) {
        super(name);
    }
    work() {
        super.eat();
    }
}

let engObj = new Engineer("karthik");
console.log(engObj.work());