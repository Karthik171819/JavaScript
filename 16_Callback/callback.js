//callback - calling a function inside a another function parameter

function sum(a, b){
    console.log(a+b)
}

function calc(a, b, sumCallback) {
    sumCallback(a, b);
}

calc(1, 2, sum); //you should give function name without parameter while callbacking

//arrow function callback

const hello = () => {
    console.log("Hello im callbacked after 4second");
}
setTimeout(hello, 4000);