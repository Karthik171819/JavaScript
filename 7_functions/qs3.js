//create an array  calculate the sum of an array and product an array elements
var arr = [2, 3, 4, 5, 6, 7];
var result = arr.reduce((prev_el, curr_el) =>{
    return prev_el + curr_el ;
});
console.log("sum = ",result);

var arr = [2, 3, 4, 5, 6, 7];
var result = arr.reduce((prev_el, curr_el) =>{
    return prev_el * curr_el ;
});
console.log("factorial =",result);