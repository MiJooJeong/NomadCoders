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
function sayHiFn(aName = "anon") {
    return "Hello " + aName
}


// 3.0 Sexy Strings
const DEFAULT_NAME = "anon"
const sayHi = (aName = DEFAULT_NAME) => `Hello ${aName} lovely to have you`;

// console.log(sayHi());

const add = (a, b) => a + b;

// console.log(`hello how are you ${add(6, 6)}`);


// 3.1 HTML Fragments
const wrapper1 = document.querySelector(".wrapper-1");

// const addWelcome = () => {
//     const div = document.createElement("div");
//     const h1 = document.createElement("h1");
//     h1.innerText = "Hello";
//     div.append(h1);
//     wrapper.append(div)
// };

const addWelcome = () => {
    const div = `
        <div class="hello">
            <h1 class="title">Hello</h1>
        </div>
    `;
    wrapper1.innerHTML = div;
};

setTimeout(addWelcome, 2000);


// 3.2 HTML Fragments part two
const wrapper2 = document.querySelector(".wrapper-2");

const friends = ["me", "lynn", "dal", "mark"];

const ul = document.createElement("ul");
const list = `
    <h1>People I love</h1>
        <ul>
            ${friends.map(friend => `<li>${friend} 💖</li>`).join("")}
        </ul>
`

wrapper2.innerHTML = list;


// 3.3 Cloning Styled Components
const styled = aElement => {
    const el = document.createElement(aElement);
    return args => {
        const styles = args[0];
        el.style = styles;
        return el;
    };
};

const title = styled("h1")`
    background-color: purple;
    color: green;
`;

const subtitle = styled("span")`
    color: brown;
`;

title.innerText = "We just cloned";
subtitle.innerText = "styled Components";

document.body.append(title, subtitle)


// 3.4 More String Improvements!
// includes
const isEmail = email => email.includes("@");

console.log(isEmail("hello@email.com"));

// repeat
const CC_LAST_NUMBER = "6060";

const displayNumber = `${"*".repeat(12)}${CC_LAST_NUMBER}`;

console.log(displayNumber);

// startsWith, endsWith
const name = "Mr. Nicolas"

console.log(name.startsWith("Mr"));
console.log(name.endsWith("Nicolas"));
