//reduce it is used to return the single line of value
let arr = [1, 2, 3, 4];
let resultArr = arr.reduce((prev_el, curr_el) => {
    return prev_el + curr_el;
});
console.log(`original array [${arr}] sum of an array = ${resultArr}`);


//finding the maximum array element
var arrElements = [ 12, 34, 56, 98, 56, 45, 200];
var result = arrElements.reduce((a, b) =>{
    return a > b ? a : b;
});
console.log(result);


//finding the minimum array element
var arrElements = [ 12, 34, 56, 98, 56, 45, 200];
var result = arrElements.reduce((a, b) =>{
    return a < b ? a : b;
});
console.log(result);


