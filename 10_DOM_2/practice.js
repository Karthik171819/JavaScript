//create new btn el and insert the btn as a first el in the body tag
let newbtn = document.createElement("button");
newbtn.innerText = "Click me!";

newbtn.style.color = "white";
newbtn.style.backgroundColor = "red";


//inserting btn in a body
document.querySelector("body").prepend(newbtn);