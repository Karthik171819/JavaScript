let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    console.log("button was clicked -handler 1 ");
});

btn.addEventListener("click", () => {
    console.log("button was clicked -handler 2 ");
});

const handler3 = () =>{
    console.log("button was clicked -handler 3 ");
};

btn.addEventListener("click", (handler3) );

btn.addEventListener("click", () => {
    console.log("button was clicked -handler 4 ");
});

//now i need to remove one of those handler
btn.removeEventListener("click", handler3);