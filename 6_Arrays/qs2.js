//for a given array apply 10%off on them

let price = [250, 645, 300, 900, 50];

let i=0;
for(let item of price){
    console.log(`the value of first item = ${i} is ${price[i]}`);
    let off = item/10;
    price[i] = price[i] - off;
    console.log(`offer price is ${price[i]} `);
    i++;
}

//using for loop
for(let i=0; i<price.length; i++){
    let off = price[i]/10;
    off_price = price[i] - off;
    console.log(price[i]);
}