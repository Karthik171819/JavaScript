//filter the elemnts in an array
let arr = [1,2,3,4,5,6,7,8,9];
let resultArr = arr.filter((val) => {
    return val%2 === 0; // mainly it return the boolean based result
});
console.log("original array", arr);
console.log("filtered Array",resultArr); //only even num only will going to be store in new array