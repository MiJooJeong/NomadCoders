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
const p1 = new Promise(resolve => {
    setTimeout(resolve, 5000, "First");
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, "I hate JS");
});

const p3 = new Promise(resolve => {
    setTimeout(resolve, 3000, "Third");
});

const motherPromise = Promise.all([p1, p2, p3]);

motherPromise
    .then(values => console.log(values))
    .catch(err => console.log(err));


// 8.5 Promise.race
const pr1 = new Promise(resolve => {
    setTimeout(resolve, 10000, "First");
});

const pr2 = new Promise((resolve, reject) => {
    setTimeout(reject, 5000, "I hate JS");
});

const pr3 = new Promise(resolve => {
    setTimeout(resolve, 3000, "Third");
});

Promise.race([pr1, pr2, pr3])
    .then(values => console.log(values))
    .catch(err => console.log(err));


// 8.6 .finally
const f1 = new Promise((resolve, reject) => {
    setTimeout(reject, 5000, "First");
})
    .then(value => console.log(value))
    .catch(e => console.log(`${e}❌`))
    .finally(() => console.log("Im done"));


// 8.7 Real world Promises
fetch("https://google.com")
    .then(response => console.log(response))
    .catch(e => console.log(`❌ ${e}`))

fetch("https://yts.mx/api/v2/list_movies.json")
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(json => console.log(json))
    .catch(e => console.log(`❌ ${e}`));

    
// API 제공 사이트 : https://jsonplaceholder.typicode.com/
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));
