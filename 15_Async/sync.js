//synchronization - Executes the instruction one by one actually the next instruction execution  is depending on previous one
console.log("first sequence");
console.log("second sequence");
console.log("third sequence");
console.log("fourth sequence");

function hello() {
    console.log("hello");
}
setTimeout(hello, 4000) //4000ms is equal to 4s