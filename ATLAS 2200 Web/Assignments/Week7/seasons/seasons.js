/* seasons.js - DOM manipulator for seasons.html */



    
var winter = document.getElementById("winter");
winter.addEventListener("click", SetWinter);

var spring = document.getElementById("spring");
spring.addEventListener("click", SetSpring);
var summer = document.getElementById("summer");
summer.addEventListener("click", SetSummer);
var fall = document.getElementById("fall");
fall.addEventListener("click", SetFall);

function SetWinter() {
    console.log("winter");
    console.log(document.getElementById("seasonName").textContent);
    document.getElementById("seasonName").textContent = "winter";
    document.getElementById("wrapper").style.backgroundImage = "url(winter-wallpaper-8-1280x1024.jpg)";
    document.getElementById("poem-winter").style.display = "block";
    document.getElementById("poem-spring").style.display = "none";
    document.getElementById("poem-summer").style.display = "none";
    document.getElementById("poem-fall").style.display = "none";
    
    document.getElementById("img2").src = "winter.jpeg";
    document.getElementById("img2").style.width = "200px";
    document.getElementsByTagName("header")[0].style.backgroundColor = "white";
    document.getElementById("h1").style.color = "blue";
    document.getElementsByTagName("h1")[0].style.fontFamily = "Roboto";
    
}

function SetSpring() {
    console.log("spring");
    console.log(document.getElementById("seasonName").textContent);
    document.getElementById("seasonName").textContent = "spring";
    document.getElementById("wrapper").style.backgroundImage = "url(spring.jpg)";
    
    document.getElementById("poem-winter").style.display = "none";
    document.getElementById("poem-spring").style.display = "block";
    document.getElementById("poem-summer").style.display = "none";
    document.getElementById("poem-fall").style.display = "none";
    
    document.getElementById("img2").src = "bird.jpg";
    document.getElementById("img2").style.width = "200px";
    document.getElementsByTagName("header")[0].style.backgroundColor = "pink";
    document.getElementById("h1").style.color = "white";
    document.getElementsByTagName("h1")[0].style.fontFamily = "Roboto";
    
}
function SetSummer() {
    console.log("summer");
    console.log(document.getElementById("seasonName").textContent);
    document.getElementById("seasonName").textContent = "summer";
    document.getElementById("wrapper").style.backgroundImage = "url(summer.jpeg)";
    
    document.getElementById("poem-winter").style.display = "none";
    document.getElementById("poem-spring").style.display = "none";
    document.getElementById("poem-summer").style.display = "block";
    document.getElementById("poem-fall").style.display = "none";
    
    document.getElementById("img2").src = "glasses.jpg";
    document.getElementById("img2").style.width = "200px";
    document.getElementsByTagName("header")[0].style.backgroundColor = "yellow";
    document.getElementById("h1").style.color = "black";
    document.getElementsByTagName("h1")[0].style.fontFamily = "Roboto";
    
}
function SetFall() {
    console.log("fall");
    console.log(document.getElementById("seasonName").textContent);
    document.getElementById("seasonName").textContent = "fall";
    document.getElementById("wrapper").style.backgroundImage = "url(fall.jpg)";
    
    document.getElementById("poem-winter").style.display = "none";
    document.getElementById("poem-spring").style.display = "none";
    document.getElementById("poem-summer").style.display = "none";
    document.getElementById("poem-fall").style.display = "block";
    
    document.getElementById("img2").src = "leaves.jpg";
    document.getElementById("img2").style.width = "200px";
    document.getElementsByTagName("header")[0].style.backgroundColor = "red";
    document.getElementById("h1").style.color = "brown";
    document.getElementsByTagName("h1")[0].style.fontFamily = "Roboto";
    
}

