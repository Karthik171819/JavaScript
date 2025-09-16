const URL = "https://api.thecatapi.com/v1/images/0XYvRd7oD";

//lets call api using async- await function
let getData = async () => {
    console.log("gettig data please wait...")
    let response = await fetch(URL);
    console.log(response);
};