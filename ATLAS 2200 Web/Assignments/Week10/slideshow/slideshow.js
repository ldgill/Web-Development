//slideshow.js
var images = [
    "img/pic1.jpg",
    "img/pic2.jpg",
    "img/pic3.jpg",
    "img/pic4.jpg",
    "img/pic5.jpg"
];

var captions = [
    "Image 1",
    "Image 2",
    "Image 3",
    "Image 4",
    "Image 5"
];

console.log("start" + images[0] + " " + captions[0]);

var counter = 0;

function slideshowprev() {
    console.log("prev");
    if (counter > 0) {
    counter--;
    } else {
        counter = images.length - 1;
        console.log("reset counter to 0");
    }
    document.getElementById("slideshow").src = images[counter];
}

function slideshownext() {
    console.log("next");
    if (counter < images.length - 1) {
    counter++;
    } else {
        counter = 0;
        console.log("reset counter to 0");
    }

    document.getElementById("slideshow").src = images[counter];
}