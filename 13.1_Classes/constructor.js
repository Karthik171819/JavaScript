//calling constructor
class Car {
    constructor(brand){
        console.log("Constructor called");
        this.brand = brand;
    }

    start(){
        console.log("Car Started");
    }
}

let fortuner = new Car("Toyato");
console.log(fortuner.brand);
fortuner.start();
