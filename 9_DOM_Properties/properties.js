//div access
let div = document.querySelector("div");
console.dir(div);

//its  display the only actual Textcontent
div.innerText; 

//its display the content including HTML tags
div.innerHTML;

//innerHTML
let text = document.querySelector("h3");
text.innerText = "Special Fruits"; //from fruits to special fruits
text.innerHTML = "<i>Special Fruits</i>"