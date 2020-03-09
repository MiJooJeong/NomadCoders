// 6.0 Introduction to Spread
// Spread : Unpack data in array or object.

const friends = [1, 2, 3, 4];
const family = ["a", "b", "c"];

console.log([...friends, ...family]);

const sexy = {
    name: "nico",
    age: 24
};

const hello = {
    sexy: true,
    hello: "hello"
}

console.log({ ...sexy, ...hello })


// 6.1 Spread Applications
const names = ["nico", "lynn"];

const newnames = ["dal", ...names];

console.log(newnames);

const nico = {
    username: "nico"
};

console.log({ ...nico, password: 123 })
console.log(nico)

const first = ["mon", "tue", "wed"];

const weekend = ["sat", "sun"];

const fullWeek = [...first, "thu", "fri", ...weekend];

console.log(fullWeek);

const lastName = prompt("Last name");

const user = {
    username: "nico",
    age: 24,
    ...(lastName !== "" && { lastName })
}

console.log(user)


// 6.2 Intro to Rest Parameters
// Rest : Put it in parameter and create an array.
const infiniteArgs = (...args) => console.log(args);

infiniteArgs("1", 2, true, "lalala", [1, 2, 3, 4]);

const bestFriendMaker = (firstOne, ...rest) => {
    console.log(`My best friend is ${firstOne}`);
    console.log(rest);
};

bestFriendMaker("nic", "lynn", "dall", "guy");


// 6.3 Rest + Spread + Destructure Magic
// Case 1. Clearing or Cleaning up objects
const user = {
    NAME: "nico",
    age: 24,
    password: 12345
};

// user["password"] = null;

const killPassword = ({ password, ...rest }) => rest;

const cleanUser = killPassword(user);

console.log(user);
console.log(cleanUser);

// Case 2. Set default values
const setCountry = ({ country = "KR", ...rest }) => ({ country, ...rest })

console.log(setCountry(user));

// Case 3. Rename property
const rename = ({ NAME: name, ...rest }) => ({ name, ...rest });

console.log(rename(user));
