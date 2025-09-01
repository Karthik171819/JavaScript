//creating new element
let newbtn = document.createElement("button");
newbtn.innerText = "click me!";
console.log(newbtn);

//appending new element btn end of the node(inside)
let div = document.querySelector("div");
div.append(newbtn);

//suppose i need to be btn at first (inside)
div.prepend(newbtn);

//adds before the node (outside)
div.before(newbtn);

//adds after the node (outside)
div.after(newbtn);