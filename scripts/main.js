var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://developer.mozilla.org/en-US/docs/Tools/logo-developer-quantum.png') {
      myImage.setAttribute ('src','https://www.mozilla.org/media/protocol/img/logos/firefox/browser/beta/logo-lg-high-res.fddc5a185d97.png');
    } else {
      myImage.setAttribute ('src','https://developer.mozilla.org/en-US/docs/Tools/logo-developer-quantum.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}