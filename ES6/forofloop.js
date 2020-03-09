// 7.0 For ... of
const friends = ["Nico", "Lynn", "Spring", "Dal", "Rain", "ha", "hu"];

// for
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i])
};

const addHeart = (c, i, a) => console.log(c, i, a);

// forEach
friends.forEach((friend, i) => console.log(friend, i));

// for...of
for (const friend of friends) {
    console.log(friend);
};

for (const letter of "hellloo this is very looooooong") {
    console.log(letter);
};

for (const friend of friends) {
    if(friend == "Dal") {
        break;
    }
    else {
        console.log(friend)
    }
}
