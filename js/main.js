//image changer
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'https://cdn.freebiesupply.com/logos/large/2x/firefox-logo-png-transparent.png') {
    myImage.setAttribute ('src','https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f69489b-a407-4a6f-b325-850d61b52fd3/d242y6k-353e1300-cf5c-450d-be7e-9d36e6a89d31.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8zZjY5NDg5Yi1hNDA3LTRhNmYtYjMyNS04NTBkNjFiNTJmZDMvZDI0Mnk2ay0zNTNlMTMwMC1jZjVjLTQ1MGQtYmU3ZS05ZDM2ZTZhODlkMzEucG5nIn1dXX0.j1nwmuhzke68NY0SCzxJBhkKie2qpTuzt9_cmljRsPw');
  } else {
    myImage.setAttribute ('src','https://cdn.freebiesupply.com/logos/large/2x/firefox-logo-png-transparent.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}