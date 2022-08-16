// chapter#1
alert("hello world");

// Chapter#2
var nationality;
nationality = "pak";
var thanx = "Thanks for your input!"
alert(thanx);

// chapter#3
var originalNum = 23;
var numToBeAdded = 7;

// Chapter#4
var newNum = originalNum + numToBeAdded;
alert(newNum);

// chapter#5
var num = 10;
var anotherNum = 1;
var popularNumber = num + anotherNum;
alert(popularNumber);

// chapter#6
var num = 1;
var newNum = num++;
var newNum = num--;
alert(newNum);
var newNum = --num;
alert(newNum);

// chapter#7
var totalCost = (1 + 3) * 4;


// chapter#8
alert("Thanks, " + userName + "!");
var message = "Thanks, ";
var userName = "Susan";
var banger = "!";
var customMess = message + userName + banger;
alert(customMess);

// chapter#9
var question = "Your species?";
var defaultAnswer = "human";
var spec = prompt(question, defaultAnswer);

// chapter#10
var correctAnswer = "Vatican";
if (x === correctAnswer) {
    alert("Correct!");
}

// cahapter#11

if (yourTicketNumber !== 487208) {
    alert("Better luck next time.");
}


//  Chapter#12
var x = prompt("Where does the Pope live?");
if (x === "Vatican") {
    alert("Correct!");
}
if (x !== "Vatican") {
    alert("Wrong answer");
}
if (x === "Vatican") {
    alert("Correct!");
}
else {
    alert("Wrong answer");
}

var correctAnswer = "Vatican";
if (x === correctAnswer) {
    alert("Correct!");
}
else {
    score--;
    userIQ = "problematic";
    alert("Incorrect");
}

// Chaper#13
if (weight > 300 && time < 6) {
    alert("Come to our tryout!");
}
else {
    alert("Come to our cookout!");
}

// 
if (weight > 300 && time < 6 && age > 17 && gender === "male") {
    alert("Come to our tryout!");
}
else {
    alert("Come to our cookout!");
}
// 
if (SAT > avg || GPA > 2.5 || sport === "football") {
    alert("Welcome to Bubba State!");
}
else {
    alert("Have you looked into appliance repair?");
}

//  Chapter@14
if ((x === y || a === b) && c === d) {
    g = h;
}
else {
    e = f;
}

if (c === d) {
    if (x === y) {
        g = h;
    }
    else if (a === b) {
        g = h;
    }
    else {
        e = f;
    }
}
else {
    e = f;
}

// Chapter#15

var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
document.write(cities);

// Chapter#16
var mixedArray = [1, "Bob", "Now is", true];
mixedArray.push("fish", "ferret");
cities.pop();


// Chapter@17
pets.shift();
pets.unshift("fish", "ferret");
var noPets = pets.slice(2, 4);


// Chapter#18
for (var i = 0; i <= 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
        alert("It's one of the cleanest cities");
    }
}

var matchFound = "no";
for (var i = 0; i <= 4; i++);
if (cityToCheck === cleanestCities[i]) {
    matchFound = "yes";
    alert("It's one of the cleanest cities");
}

if (matchFound === "no") {
    alert("It's not on the list");
}

var numElements = cleanestCities.length;
var matchFound = false;
for (var i = 0; i < numElements; i++);
if (cityToCheck === cleanestCities[i]) {
    matchFound = true;
    alert("It's one of the cleanest cities");
    //  break;
}

if (matchFound === false) {
    alert("It's not on the list");
}

//  Chapter@20
var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
    for (var j = 0; j < lastNames.length; j++) {
        fullNames.push(firstNames[i] + lastNames[j]);
    }
}

// Chapter#21
var cityToCheck = prompt("Enter your city");
cityToCheck = cityToCheck.toLowerCase();
var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
for (var i = 0; i <= 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
        alert("It's one of the cleanest cities");
    }
}

// Chapter#22
var month = prompt("Enter a month");
var charsInMonth = month.length;
if (charsInMonth > 3) {
    monthAbbrev = month.slice(0, 3);
}

var str = prompt("Enter some text");
var numChars = str.length;
for (var i = 0; i < numChars; i++) {
    if (str.slice(i, i + 2) === " ") {
        alert("No double spaces!");
        break;
    }
}

//  Chapeter#23
for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 12) === "World War II") {
        text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
    }
}


var firstChar = text.indexOf("World War II");
if (firstChar !== -1) {
    text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
}

// Chapter#24
for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) === "!") {
        alert("Exclamation point found!");
        break;
    }
}
// Chapter#25
var firstChar = text.indexOf("World War II");
if (firstChar !== -1) {
    text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
}

var newText = text.replace("World War II", "the Second World War");

//  chapter#26
scoreAvg = 345.54
var numberOfStars = Math.round(scoreAvg);

// Chapter#27
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
var numberOfStars = Math.floor(improvedNum);

// Chapter#28
var currentAge = prompt("Enter your age.");
var qualifyingAge = parseInt(currentAge) + 1;


// Chapter#29

var integerString = "24"
var num = Number(integerString);

var floatingNumString = "24.9876";
var num = Number(floatingNumString);

// Chapter#30

var str = num.toString();
if (str.charAt(str.length - 1) === "5") {
    str = str.slice(0, str.length - 1) + "6";
}
num = Number(str);
prettyNum = num.toFixed(2)


// Chapter#31

var rightNow = new Date();
var theDay = rightNow.getDay();

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];



// Chapter#32
var dayOfMonth = d.getDate();
var currYr = d.getFullYear();
var currentHrs = d.getHours();
var currMins = d.getMinutes();
var currMills = d.getMilliseconds();


// Chapter#33
var doomsday = new Date("June 30, 2035");
dDiff = Math.floor(dDiff);

// Chapter#34
var d = new Date();
d.setFullYear(2001);
var d = new Date();
d.setMonth(11);
var d = new Date();
d.setDate(15);
var d = new Date();
d.setMilliseconds(867);

// Chapter#35
function tellTime() {
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    alert("Current time: " + theHr + ":" + theMin);
}
// Chapter#36
function greetUser(greeting) {
    alert(greeting);
}

function showMessage(m, string, num); {
    alert(m + string + num);
}

// Chapter#37
function calcTot(merchTot) {
    var orderTot;
    if (merchTot >= 100) {
        orderTot = merchTot;
    }
    else if (merchTot < 50.01) {
        orderTot = merchTot + 5;
    }
    else {
        orderTot = merchTot + 5 + (.03 * (merchTot - 50));
    }
    return orderTot;
}

// Chapter#38
function addNumbers() {
    var theSum = 2 + 2;
    return theSum;
}

// Chapter#39
switch (dayOfWk) {
    case "Sat":
        alert("Whoopee");
        break;
    case "Sun":
        alert("Whoopee");
        break;
    case "Fri":
        alert("TGIF!");
        break;
    default:
        alert("Shoot me now!");
}

// Chapter#40

// default:
//         alert("Shoot me now!");

// Chapter#41
var i = 0;
while (i <= 3) {
    alert(i);
    i++;
}


// Chapter#42
var i = 0;
do {
    alert(i);
    i++;
} while (i <= 3);

// Chapter#43
<script>
 function sayHi() {
 alert("Hello world!")
 }
 function sayBye() {
 alert("Buh-bye!")
 }
 </script>

//  <script src="whatever.js"></script>

// Chapter#44
//  <script src="whatever.js"></script>

// Chapter#45

<a href="JavaScript:void(0)" onClick="alert('Hi');">Click</a>
// Chapter#46

<img src="button-greet.png" onClick="greetTheUser();">
<a href="summary-page.html"><img src="button-sum-pg.png"></a>

// Chapter#47
<img src="before-pic.jpg" onMouseover="src='after-pic.jpg'"
onMouseout="src='before-pic.jpg'">

// Chapter#48
Email:<br>
<input type="text" size="30" onFocus="this.style.backgroundColor='yellow';"></input>

// Chapter#49
<form onSubmit="checkAddress('email');">
Email:
<input type="text" id="email">
<input type="submit" value="Submit">
</form>

// Chapter#50
function fillCity() {
 var cityName;
 var zipEntered = document.getElementById("zip").value;
 switch (zipEntered) { case "60608" :
cityName = "Chicago";
 break;
 case "68114" :
 cityName = "Omaha";
 break;
 case "53212" :
 cityName = "Milwaukee";
 }
 document.getElementById("city").value = cityName;
 }
