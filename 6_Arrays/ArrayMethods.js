//push - adding a element in an array at last
let veg = ["potato", "onion", "brinjal", "tomato"];
console.log(veg);

//push() element
veg.push("Beans", "carrot");
console.log(veg);

//pop() delete an element from an array at last
veg.pop();
console.log(veg); //carrot ddeleted

//toString()
console.log(veg.toString());

//concat array
let marvel = ["ironman", "spiderman", "thor"];
let dc = ["superman", "batman"];
let combine = marvel.concat(dc);

console.log("concat array", combine);