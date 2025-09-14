function getdata(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() =>  {
            console.log("getData", dataId);
            resolve("success");
        }, 2000);
    });
};

//Async-Await
async function fetch(){
    console.log("getting data 1...");
    await getdata(1);

    console.log("getting data 2...");
    await getdata(2);

    console.log("getting data 3...");
    await getdata(3);
};

console.log(fetch());

// console.log(getdata(1));
// console.log(getdata(2));
// console.log(getdata(3));