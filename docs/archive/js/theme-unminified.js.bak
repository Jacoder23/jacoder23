var body = document.getElementsByTagName("BODY")[0];
var h1 = document.getElementsByTagName("h1");
var h2 = document.getElementsByTagName("h2");
var h3 = document.getElementsByTagName("h3");
var zillaSlab = "\"Zilla Slab\", serif";
var consolas = "\"Consolas\", monospace";
var stStyle = document.getElementsByClassName("st-style");

document.body.innerHTML +="<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"><link rel=\"stylesheet\" href=\"css/w3.css\"></link><div class=\"sticky st-style dropdown\">Themes<span class=\"clickable dropdown-content st-style\" onclick=\"lightclassic()\">Light Classic</span><span class=\"clickable dropdown-content st-stylele\" onclick=\"darkclassic()\">Dark Classic</span><span class=\"clickable dropdown-content st-stylele\" onclick=\"terminal()\">Terminal</span></div>  <div class=\"contact\"><a href=\"https://twitter.com/Jacoder234\" class=\"fa fa-twitter\"></a><a href=\"https://www.youtube.com/channel/UCdLQ-aSddS0WPnWQA87JNow/\" class=\"fa fa-youtube\"></a><a href=\"https://www.instagram.com/jacoder23/\" class=\"fa fa-instagram\"></a></div>";

function lightclassic(){
    document.body.style.backgroundImage = null;
    document.body.style.backgroundColor = "#eeeeee";
    document.body.style.color = "#454550";
    try {
        document.getElementById("splashTitle").style.textShadow = "-0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 3px black";
    } catch (err) {}
    for(var i = 0; i < stStyle.length; i++) {
        stStyle[i].style.backgroundColor = "#38384d";
        stStyle[i].style.color = "#FFFFFF";
    }
    for(var i = 0; i < h1.length; i++) {
        h1[i].style.fontFamily = zillaSlab;
    }
    for(var i = 0; i < h2.length; i++) {
        h2[i].style.fontFamily = zillaSlab;
    }
    for(var i = 0; i < h3.length; i++) {
        h3[i].style.fontFamily = zillaSlab;
    }
    localStorage.setItem("theme", "lightclassic");
}

function darkclassic(){
    document.body.style.backgroundImage = null;
    document.body.style.backgroundColor = "#454550";
    document.body.style.color = "#eeeeee";
    try {
        document.getElementById("splashTitle").style.textShadow = "-0.5px 0 white, 0 0.5px white, 0.5px 0 white, 0 2px white";
    } catch (err) {}
    for(var i = 0; i < stStyle.length; i++) {
        stStyle[i].style.backgroundColor = "#FFFFFF";
        stStyle[i].style.color = "#38384d";
    }
    for(var i = 0; i < h1.length; i++) {
        h1[i].style.fontFamily = zillaSlab;
    }
    for(var i = 0; i < h2.length; i++) {
        h2[i].style.fontFamily = zillaSlab;
    }
    for(var i = 0; i < h3.length; i++) {
        h3[i].style.fontFamily = zillaSlab;
    }
    localStorage.setItem("theme", "darkclassic");
}

function terminal(){
    document.body.style.background = "rgb(0,0,0)";
    document.body.style.backgroundImage = "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(20,20,20,1) 100%)";
    document.body.style.color = "#02FF11";
    try {
        document.getElementById("splashTitle").style.textShadow = "-0.5px 0 white, 0 0.5px white, 0.5px 0 white, 0 2px white";
    } catch (err) {}
    for(var i = 0; i < stStyle.length; i++) {
        stStyle[i].style.backgroundColor = "#02FF11";
        stStyle[i].style.color = "#000000";
    }
    for(var i = 0; i < h1.length; i++) {
        h1[i].style.fontFamily = consolas;
    }
    for(var i = 0; i < h2.length; i++) {
        h2[i].style.fontFamily = consolas;
    }
    for(var i = 0; i < h3.length; i++) {
        h3[i].style.fontFamily = consolas;
    }
    localStorage.setItem("theme", "terminal");
}

function themeRetrieve(){
    theme = localStorage.getItem("theme");
    switch(theme){
        case "lightclassic":
            lightclassic();
            break;
        case "darkclassic":
            darkclassic();
            break;
        case "terminal":
            terminal();
            break;
        default:
            terminal();
    }
}

if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    try {
        themeRetrieve()
    }
    catch(err) {
        terminal();
        themeRetrieve();
    }
} else {
    // Sorry! No Web Storage support..
    console.log("Your browser doesn't support Web Storage! If you can read this, then I don't know why you're using such a browser, but good luck.");
}

function pickRand(list){
    var shortStory = ["bucketfulofteeth", "ein", "chessgame", "mouseutopia"];
    switch(list) {
        case "shortStory":
            return shortStory[Math.floor(Math.random() * shortStory.length)] + ".html";
    }
}