const check = false;

const promise = new Promise((resolve, reject) => {
    if(check){
        resolve("Done");
    } else {
        reject("Not Done");
    }
});

// console.log(promise);
//to get result and haddle error 

promise
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })