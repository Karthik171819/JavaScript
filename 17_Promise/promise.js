//promise solution of callback hell
let promise = new Promise((resolve, reject) => {
    console.log("I am a Promise");
    resolve(200); //200 means status successed
    reject("failed");
});
console.log(promise);