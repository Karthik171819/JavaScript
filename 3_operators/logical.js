//logical AND &&
//if two condition is satisfied or true it return true or else false
{
let a = 5;
let b = 5;

let condition1 = a == b;
let condition2 = a >= b;
console.log(condition1 && condition2);
}

//logical OR ||
{
    let a = 2;
    let b = 3;

    console.log("cond1 || cond2 = ", a<b || b>a);
}

//logical NOT !
{
    let a = 5;
    console.log("!(5===5)", !(a === 5)); //actually true here but for NOT operator it is false
}