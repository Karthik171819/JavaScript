class Car {
    start() {
        console.log("car started");
    }

    stop() {
        console.log("car stopped");
    }

    setBrand(brand) {
        this.brand = brand; 
    }
}
let fortuner = new Car();
fortuner.setBrand("fortuner");
console.log(fortuner);
fortuner.start();
fortuner.stop();