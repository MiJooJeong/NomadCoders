// 8.0 Introduction to Async
// const hello = fetch("http://google.com");

// console.log("something");
// console.log(hello);


// 8.1 Creating Promises
const amISexy = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Yes you are");
    setTimeout(reject, 3000, "You are ugly");
});

// console.log(amISexy);

// setInterval(console.log, 1000, amISexy);


// 8.2 Using Promises
amISexy
    .then(result => console.log(result))
    .catch(error => console.log(error));


// 8.3 Chaining Promises
