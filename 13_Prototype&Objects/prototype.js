const employe = {
    calcTax() {
        console.log("toatal tax discount 10%")
    },
};

const john = {
    salary: 50000,
};

const john1 = {
    salary: 60000,
};

const john2 = {
    salary: 70000,
    calcTax() {
        console.log("total tax discount 20%");
    }
};

john.__proto__ = employe;
john1.__proto__ = employe;
john2.__proto__ = employe;
