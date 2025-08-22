//array splice it can change the original array and add, remove, update
//splice(startidx, delcountel, newel);

let arr = [1, 2, 3, 4, 5, 6];
arr.splice(6,0,0);
console.log(arr);

//adding new element
arr.splice(2, 1, 2.1);
console.log(arr);

//delete element
arr.splice(3,1);
console.log(arr);

//replace element 
arr.splice(5, 1, 5.5);
console.log(arr);
