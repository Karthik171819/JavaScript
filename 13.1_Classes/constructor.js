//calling constructor, constructor ini its automatically invoked or called 
class Car {
    constructor(brand, mileage){
        console.log("Constructor called");
        this.brand = brand;
        this.mileage = mileage;
    }

    start(){
        console.log("Car Started");
    }
}

let fortuner = new Car("Toyato", 17); //actually here mileage is 17
fortuner.mileage = 15; //but here im changing to 15
console.log(fortuner);
fortuner.start();
