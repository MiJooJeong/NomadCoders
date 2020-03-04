// 2.0 Arrow Functions
const names = ["joo", "marry", "milk"];

function addHeart(item) {
    return item + "💖";
}
const hearts = names.map(item => item + "💖");
// console.log(hearts);


// 2.1 'this' in Arrow Functions
const button = document.querySelector("button");

button.addEventListener("click", function () {
    this.style.backgroundColor = "red";
    console.log("I have been clicked");
});


// 2.2 Arrow Functions in the Real World
const emails = [
    "nco@no.com",
    "naver@google.com",
    "uuuuio@gmail.com",
    "nico@nomad.com",
    "nico@gmail.com"
];

const foundEmail = emails.find(item => item.includes("@gmail.com"))
// console.log(foundEmail)

const noGmail = emails.filter(email => !email.includes("@gmail.com"))
// console.log(noGmail)

const array = emails.map((email, index) => ({
    username: email.split("@")[0],
    index
}));
// console.table(array)


// 2.3 Default Values
// function sayHi(aName = "anon") {
//     return "Hello " + aName
// }
const DEFAULT_NAME = "anon"
const sayHi = (aName = DEFAULT_NAME) => "Hello " + aName;

console.log(sayHi());
