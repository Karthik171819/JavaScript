//async is actually executes the imp code and it doesnt depend upon any previous and further code

console.log("first sequence");
console.log("second sequence");
console.log("third sequence");
console.log("fourth sequence");

//using arrow function to setTimeout
setTimeout(() => {
    console.log("hello"); // here also parllely executing
}, 5000);

console.log("after the api call"); //actuallly here code doesnot effect like synchronous sequence of execution 