//else-if
let mark = 80;

if(mark < 35){
    console.log("Failed");
}
else if(mark >= 35 && mark <= 75){
    console.log("First Class");
}
else if(mark > 75 && mark <= 100){
    console.log("Distinction");
}
else{
    console.log("Invalid Marks entered");
}