//string
let str = "string";
console.log(str);

//finding string length
console.log(str.length);

//strinding indexing
console.log(str[0]);

//Template literal
let literal = `This is a Template Literal`;
console.log(typeof(literal));

//why we use string interpolation live example
let obj = {
    item : "Laptop",
    price : 50000,
} 
console.log(obj.item, obj.price); //it is a raw method
let strinterpolation = `The cost of ${obj.item} is ${obj.price}`; //here price is not highlted it converts a whole string
console.log(strinterpolation);