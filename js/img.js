var imageURLs = [
       //"img/1.png", "img/2.png", "img/3.png", "img/4.png"
        "img/a.jpg", "img/b.jpg", "img/c.jpg", "img/d.jpg"
    ];
function getImageTag() {
    "use strict";
    var img = '<img src=\"',
        randomIndex = Math.floor(Math.random() * imageURLs.length);
    img += imageURLs[randomIndex];
    img += '\" alt=\"Some cool pics ;)\"/>';
    return img;
}