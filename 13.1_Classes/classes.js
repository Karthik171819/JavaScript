class Car {
    start() {
        console.log("car started");
    }

    stop() {
        console.log("car stopped");
    }

    setBrand(brand) {
        this.brand = brand; //here this.brand and brand is different varaiable this.brand is from class property anotherone is function argument
    }
}
let fortuner = new Car();
fortuner.setBrand("fortuner");
console.log(fortuner);
fortuner.start();
fortuner.stop();