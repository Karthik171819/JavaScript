//callback - calling a function inside a another function parameter

function sum(a, b){
    console.log(a+b)
}

function calc(a, b, sumCallback) {
    sumCallback(a, b);
}

calc(1, 2, sum); //you should give function name without parameter while callbacking