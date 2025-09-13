//promise solution of callback hell
let promise = new Promise((resolve, reject) => {
    console.log("I am a Promise");
    resolve("successful");
    reject("failed");
});
console.log(promise);