window.onload = choosePic;

var myPix = new Array("img/2.png","img/3.jpg","img/4.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];