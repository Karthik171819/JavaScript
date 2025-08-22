//create a function and take string argument and returns the number of vowels in a string
 let count = 0;
function vowels(str){
    for(let char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" 
        || char === "A" || char === "E" || char === "I" || char === "O" || char === "U" ){
            count ++;
        }
    }
    return count;
}
let result = vowels("Iron man aA eu bye");
console.log(result);