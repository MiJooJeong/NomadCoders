// destructuring : object나 array, 그 외 요소들 안의 변수를 바깥으로 끄집어 내서 사용할 수 있도록 하는 것. 
//                 큰 object에서 특정 변수나 그 안에 속한 작은 object에 접근할 수 있도록 해준다.

// 5.0 Object Destructuring: 가져온 데이터를 수정할 경우 사용 
const settings = {
    notification: {
        // follow: true,
        alerts: true,
        unfollow: false
    },
    color: {
        chosen_color: "dark"
    }
};

const { notification: { follow = false } = {} } = settings;

console.log(follow)


// 5.1 Array Destructuring: 가져온 데이터를 수정하지 않을 경우 
const days = () => ["Mon", "Tue", "Wed"];

const [mon, tue, wed, thu = "Thu"] = days();

console.log(mon, tue, wed, thu);


// 5.2 Renaming
let chosenColor = "blue";

console.log(chosenColor);

({
    color: { chosen_color: chosenColor = "light" }
} = settings);

console.log(chosenColor)


// 5.3 Function Destructuring
function saveSettings({notifications, color: { theme } }) {
    console.log(theme)
}

saveSettings({
    notifications: {
        follow: true,
        alert: true,
        mkt: true   
    },
    color:{
        theme: "blue"
    }
});


// 5.4 Value Shorthands
// const follow_4 = checkFollow();
// const alert_4 = checkAlert();

// object의 key 값과 변수명이 같을때는 shorthand property(단축속성명)을 사용할 수 있다. 
const settings_4 = {
    notification_4:{
        follow, alert
    }
}


// 5.5 Swapping and Skipping
let one = "Two";
let two = "One";

[one, two] = [two, one]
console.log(one, two)

const months = ["Jan", "Feb", "Mar", "Apr", "May"];

const [, , , apr, may] = months;

console.log(apr, may);
