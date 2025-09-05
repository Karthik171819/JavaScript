const employe = {
    calcTax() {
        console.log("toatal tax discount 10%")
    },
};

const john = {
    salary: 50000,
    calcTax() {
        console.log("total tax 20%");
    }
};

john.__proto__ = employe;

