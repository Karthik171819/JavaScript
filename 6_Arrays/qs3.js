//create an array  to store companies.
//remove  the first company from the array
//remove uber and add ola in its place 
//add amazon at the end

let arr = ["bloomberg", "Microsoft", "Uber", "google", "ibm", "netflix"];
console.log("original array",arr);
arr.shift();
console.log(arr); // removed first company

arr.splice(1, 1, "Ola");
console.log(arr); // added array

arr.push("Amzon");
console.log(arr);
