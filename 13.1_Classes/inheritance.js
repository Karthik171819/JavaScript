//why we use inheritance mainly to reduce the redundacy of code

//parent class
class Person {
    constructor() {
        this.species = "Homo phones";
    }
    eat() {
        console.log("eating");
    }

    sleep() {
        console.log("sleeping");
    }

    work() {
        console.log("parent class work method");
    }
}

//child class
class Engineer extends Person {
    work() {
        console.log("solve problem, innovation");
    }
}

//child class
class Doctor extends Person {
    work() {
        console.log("checking patient condition, operation and prescribing");
    }
}

//NOTE: Here work() is Method Overriding means when parent and child class have both same method name while executing the child class method will be used

let object = new Engineer();
console.log(object);
object.work();
object.sleep();
object.species;

//creating objectn for doctor
let doctorobj = new Doctor ();
console.log(doctorobj);
doctorobj.work();
doctorobj.sleep();
doctorobj.species;



