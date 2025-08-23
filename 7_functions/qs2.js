//in given array filtered out the 90+ score
let marks = [ 40, 56, 90, 95, 96, 99, 55, 60, 78, 85, 89, 93,];
let score = marks.filter((val) => {
    return val > 90;
});
console.log(score);