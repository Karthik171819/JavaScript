const URL = "https://api.thecatapi.com/v1/images/0XYvRd7oD";
const factPara = document.querySelector('#fact');
const btn = document.querySelector('#btn');

//lets call api using async- await function
let getData = async () => {
    console.log("gettig data please wait...")
    var response = await fetch(URL);
    console.log(response);

    //json format
    var data = await response.json();
    console.log(data);
};

//using promise method
function getFacts() {
    fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        
    })
}

btn.addEventListener("click", getData);