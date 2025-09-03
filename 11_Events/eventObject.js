let btn = document.querySelector("#btn");

btn.onclick =(e) => { //we can give apart from e also its a parameter
    console.log(e);
    console.log(e.type);
    console.log(e.clientX, e.clientY);
    console.log(e.target);
};