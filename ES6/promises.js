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
const practice = new Promise((resolve, reject) => {
    resolve(2);
});

const timesTwo = number => number * 2;

practice
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(() => {
        throw Error("Something is wrong")
    })
    .then(lastNumber => console.log(lastNumber))
    .catch(error => console.log(error));


// 8.4 Promise.all
