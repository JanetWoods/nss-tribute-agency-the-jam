//related image, date, location, type of event, collaborators, and where the event occured or to purchase tickets.

const news = [{
    event: "New album release",
    date: "July 20th at 10",
    location: "Nashville",
    type: "concert",
    collaborators: "Brenda Long",
    rating: "7 out of 10",

},
{    
    event: "Dewey walks in on drug usage in batchroom",
    date: "Back in the day",
    location: "Memphis",
    type: "concert",
    collaborators: "Tim Meadows",
    rating: "1 out of 10. You Don't want no part of this Dewey",
    tickets: "Some box office in Memphis"

},
    {
    event: "Dewey cuts his big brother in 2",
    date: "Flashback",
    location: "Barn",
    type: "accident",
    collaborators: "slingblade",
    rating: "9 out of 10. That was funny. No way he would have still been alive",
    tickets: "Doubtful"
  
},
{
    event: "Dewek drives tractor in water",
    date: "Thursday",
    location: "Lake",
    type: "plunge",
    collaborators: "gravity",
    rating: "10 out of 10. Great form goin in the drink",
    tickets: "No way, brah. Too soggy"

  }
]

const saveNewsBase = function (databaseObject, localStorageKey) {
const stringifiedDatabase = JSON.stringify(databaseObject)
localStorage.setItem(localStorageKey, stringifiedDatabase)
}

const loadNewsData = function (localStorageKey) {
const databaseString = localStorage.getItem(localStorageKey)
return JSON.parse(databaseString)
}

saveNewsBase(news, "News")

const newsJSONdata =loadNewsData("News")

console.log(news)

var newsRecap = document.getElementsByClassName("news")[0];
var items = newsJSONdata;

for(var i = 0; i < items.length; i++) {
    var h2 = document.createElement("h2");
    h2.innerHTML = items[i].event;
    newsRecap.appendChild(h2);
    var p = document.createElement("p");
    p.innerHTML = items[i].date;
    newsRecap.appendChild(p);}