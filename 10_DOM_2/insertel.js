//creating new element
let newbtn = document.createElement("button");
newbtn.innerText = "click me!";
console.log(newbtn);

//appending new element btn end of the node(inside)
var div = document.querySelector("div");
div.append(newbtn);

//suppose i need to be btn at first (inside)
div.prepend(newbtn);

//adds before the node (outside)
div.before(newbtn);

//adds after the node (outside)
div.after(newbtn);

//creating new heading
let newheading = document.createElement("h5")
newheading.innerHTML = "<i> Hi iam New Heading </i>";
console.log(newheading);

var div = document.querySelector("div");
div.before(newheading);

//remove the paragraph 
let para = document.querySelector("p");
para.remove(); //para sucessfully removed