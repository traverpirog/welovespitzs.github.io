var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/spitz.jpg') {
      myImage.setAttribute ('src','images/spitz2.jpg');
    } else {
      myImage.setAttribute ('src','images/spitz.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
    var myName = prompt('Пожалуйста напиши свое имя: ');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Шпицы рулят! ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Шпицы форева! ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }

