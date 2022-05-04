const database = [
    {
        username: "rhymes man",
        password: "123"
    },
    {
        username: "Fish",
        password: "442"
    },    {
        username: "man up",
        password: "333"
    },
    {
        username: "mary",
        password: "444"
    },
    {
        username: "Unamdi Mazi Ekene",
        password: "222"
    },
    {
        username: "PRINCESS O",
        password: "TO"
    },
    {
        username: "Shade stiches",
        password: "LOVE"
    },
];

const newsfeed = [
    {
        username: "Naomi Joy",
        timeline: "I love rice so much",
    },
    {
        username: "Daneal Kate",
        timeline: "Gate way",
    },
    {
        username: "Joel Karen",
        timeline: "Sleeping",
    },
];
function isUserValid(username,password) {
    for(var i=0; i < database.length; i++) {
        if(database[i].username === username && datebase[i].password === password) {
            return true
        }
    }
    return false
}; 
function signIn(username,password) {
    if(isUserValid(username,password)) {
        console.log(newsfeed);
    } else {
        alert("Sorry,wrong username and password");
    };
};
const userNamePrompt = prompt("What\'s your username");
const passwordPrompt = prompt("What\'s your password");
signIn(userNamePrompt,passwordPrompt); 
