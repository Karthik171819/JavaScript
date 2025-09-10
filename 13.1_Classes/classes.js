//why we use class code template means we can use multiple objects from single class
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
//object 1
let fortuner = new Car();                                    
fortuner.setBrand("fortuner");
console.log(fortuner);
fortuner.start();
fortuner.stop();

//object 2
let innova = new Car();
innova.setBrand("Innova");
console.log(innova);
innova.start();
innova.stop();
