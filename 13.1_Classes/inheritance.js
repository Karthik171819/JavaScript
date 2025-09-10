//why we use inheritance mainly to reduce the redundacy of code

//parent class
class Person {
    eat() {
        console.log("eating");
    }

    sleep() {
        console.log("sleeping");
    }
}

//child class
class Engineer extends Person {
    work() {
        console.log("solve problem, innovation");
    }
}

let object = new Engineer();
console.log(object);
object.work();
object.sleep();
