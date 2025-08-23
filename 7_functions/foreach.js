var arr = ["pune", "banglore", "chennai", "mumbai"];

arr.forEach((val)=>{
    console.log(val);
});

{
    var arr = [1, 2, 3, 4, 5];
    arr.forEach((val) => {
        console.log(val);
    });
}

//using forEach callback
const array = [0, 1, 2, 3];

const square = (el) =>{
    console.log(el * el);
}
array.forEach(square);