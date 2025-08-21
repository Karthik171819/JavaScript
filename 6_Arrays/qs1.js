//find the avg marks of entire class

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for(let i of marks){
    
    sum = sum+i;
}
    let avg = sum/marks.length;
    console.log(`average marks of the class ${avg}`);


