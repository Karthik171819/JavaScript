//basically awaits need to be call inside a async function only
function api(){
    return new Promise((resolve, reject)  => {
        setTimeout(() => {
            console.log("weather data");
        resolve(200);
        }, 2000);
    });
}

console.log(api());

async function weatherData(){
    await api();
    await api(); //actually here 2times we get the data of api call after first execution of 2s
};