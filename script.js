function leftSection() {
  document.getElementById("leftOverlay").style.width = "100%";

  setTimeout(function () {
    document.getElementById("main-container").style.display = "none";
    document.getElementById("UX-container").style.display = "none";
    document.getElementById("media-conatiner").style.display = "none";
  }, 1000);
  setTimeout(function () {
    document.getElementById("front-end-container").style.display = "block";
    document.getElementById("body").style.backgroundColor = "#1D1D1D";
    document.getElementById("leftOverlay").style.width = "0%";
  }, 2000);
}

function midSection() {
  document.getElementById("midOverlay").style.height = "100%";

  setTimeout(function () {
    document.getElementById("main-container").style.display = "none";
    document.getElementById("front-end-container").style.display = "none";
    document.getElementById("media-conatiner").style.display = "none";
  }, 1000);
  setTimeout(function () {
    document.getElementById("UX-container").style.display = "block";
    document.getElementById("body").style.backgroundColor = "F8E5F4";
    document.getElementById("midOverlay").style.height = "0%";
  }, 2000);
}

function rightSection() {
  document.getElementById("rightOverlay").style.width = "100%";
  document.getElementById("rightOverlay").style.left = "0";

  setTimeout(function () {
    document.getElementById("main-container").style.display = "none";
    document.getElementById("front-end-container").style.display = "none";
    document.getElementById("UX-container").style.display = "none";
  }, 1000);
  setTimeout(function () {
    document.getElementById("media-conatiner").style.display = "block";
    document.getElementById("rightOverlay").style.width = "0%";
    document.getElementById("body").style.backgroundColor = "E8F1F5";
    document.getElementById("rightOverlay").style.left = "100%";
  }, 2000);
}

function upSection() {
  document.getElementById("upOverlay").style.height = "100%";
  document.getElementById("upOverlay").style.bottom = "0";

  setTimeout(function () {
    document.getElementById("front-end-container").style.display = "none";
    document.getElementById("UX-container").style.display = "none";
    document.getElementById("media-conatiner").style.display = "none";
  }, 1000);
  setTimeout(function () {
    document.getElementById("main-container").style.display = "block";
    document.getElementById("upOverlay").style.height = "0%";
    document.getElementById("body").style.backgroundColor = "#F8F9FB";
    document.getElementById("upOverlay").style.bottom = "100%";
  }, 2000);
}

function contactMe() {
  const contactPage = document.getElementById("contact-me");
  if (contactPage.style.height == "400px") {
    contactPage.style.height = "0px";
  } else {
    contactPage.style.height = "400px";
  }

  setTimeout(function () {
    document
      .getElementById("footer")
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }, 500);
}

/*code form here: https://stackoverflow.com/questions/41632626/how-to-check-how-long-you-hover-an-element-in-pure-javascript */
var startTime, endTime;

function mouseIn() {
  startTime = new Date();
}

function mouseOut() {
  endTime = new Date();
  var timeDiff = endTime - startTime;
  timeDiff /= 1000;
  var seconds = Math.round(timeDiff % 60);
  if (seconds >= 3) {
    document.getElementById("aboutme-image").style.backgroundImage =
      "url(/images/eren.jpg)";
  }
}

//tic tac toe code from here: https://www.youtube.com/watch?v=Rzhcb4M9-0Q
const statusDiv = document.querySelector(".tic-status");
const resetDiv = document.querySelector(".tic-reset");
const cellDivs = document.querySelectorAll(".tic-cell");

const xSymbol = "×";
const oSymbol = "○";

let gameIsLive = true;
let xIsNext = true;
let winner = null;

const letterToSymbol = (letter) => (letter === "x" ? xSymbol : oSymbol);

const handleWin = (letter) => {
  gameIsLive = false;
  if (letter === "x") {
    statusDiv.innerHTML = `${letterToSymbol(letter)} has won!`;
  } else {
    statusDiv.innerHTML = `<span>${letterToSymbol(letter)} has won!</span>`;
  }
};

const checkGameStatus = () => {
  const topLeft = cellDivs[0].classList[2];
  const topMiddle = cellDivs[1].classList[2];
  const topRight = cellDivs[2].classList[2];
  const middleLeft = cellDivs[3].classList[2];
  const middleMiddle = cellDivs[4].classList[2];
  const middleRight = cellDivs[5].classList[2];
  const bottomLeft = cellDivs[6].classList[2];
  const bottomMiddle = cellDivs[7].classList[2];
  const bottomRight = cellDivs[8].classList[2];

  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    handleWin(topLeft);
    cellDivs[0].classList.add("won");
    cellDivs[1].classList.add("won");
    cellDivs[2].classList.add("won");
  } else if (
    middleLeft &&
    middleLeft === middleMiddle &&
    middleLeft === middleRight
  ) {
    handleWin(middleLeft);
    cellDivs[3].classList.add("won");
    cellDivs[4].classList.add("won");
    cellDivs[5].classList.add("won");
  } else if (
    bottomLeft &&
    bottomLeft === bottomMiddle &&
    bottomLeft === bottomRight
  ) {
    handleWin(bottomLeft);
    cellDivs[6].classList.add("won");
    cellDivs[7].classList.add("won");
    cellDivs[8].classList.add("won");
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    handleWin(topLeft);
    cellDivs[0].classList.add("won");
    cellDivs[3].classList.add("won");
    cellDivs[6].classList.add("won");
  } else if (
    topMiddle &&
    topMiddle === middleMiddle &&
    topMiddle === bottomMiddle
  ) {
    handleWin(topMiddle);
    cellDivs[1].classList.add("won");
    cellDivs[4].classList.add("won");
    cellDivs[7].classList.add("won");
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    handleWin(topRight);
    cellDivs[2].classList.add("won");
    cellDivs[5].classList.add("won");
    cellDivs[8].classList.add("won");
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    handleWin(topLeft);
    cellDivs[0].classList.add("won");
    cellDivs[4].classList.add("won");
    cellDivs[8].classList.add("won");
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    handleWin(topRight);
    cellDivs[2].classList.add("won");
    cellDivs[4].classList.add("won");
    cellDivs[6].classList.add("won");
  } else if (
    topLeft &&
    topMiddle &&
    topRight &&
    middleLeft &&
    middleMiddle &&
    middleRight &&
    bottomLeft &&
    bottomMiddle &&
    bottomRight
  ) {
    gameIsLive = false;
    statusDiv.innerHTML = "Game is tied!";
  } else {
    xIsNext = !xIsNext;
    if (xIsNext) {
      statusDiv.innerHTML = `${xSymbol} is next`;
    } else {
      statusDiv.innerHTML = `<span>${oSymbol} is next</span>`;
    }
  }
};

const handleReset = () => {
  xIsNext = true;
  statusDiv.innerHTML = `${xSymbol} is next`;
  for (const cellDiv of cellDivs) {
    cellDiv.classList.remove("x");
    cellDiv.classList.remove("o");
    cellDiv.classList.remove("won");
  }
  gameIsLive = true;
};

const handleCellClick = (e) => {
  const classList = e.target.classList;

  if (!gameIsLive || classList[2] === "x" || classList[2] === "o") {
    return;
  }

  if (xIsNext) {
    classList.add("x");
    checkGameStatus();
  } else {
    classList.add("o");
    checkGameStatus();
  }
};

resetDiv.addEventListener("click", handleReset);

for (const cellDiv of cellDivs) {
  cellDiv.addEventListener("click", handleCellClick);
}

//modal box code from here: https://stackoverflow.com/questions/40645032/creating-multiple-modals-on-a-single-page

// Get the button that opens the modal
var btn = document.querySelectorAll(".front-card");

// All page modals
var modals = document.querySelectorAll(".modal");

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
  };
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function () {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
    }
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
    }
  }
};

//clock js

setInterval(Time, 1000);

const hours = document.querySelector(".hours");
const min = document.querySelector(".minutes");
const sec = document.querySelector(".seconds");

function Time() {
  const timeNow = new Date();
  const secNow = timeNow.getSeconds() / 60;
  const minNow = (secNow + timeNow.getMinutes()) / 60;
  const hoursNow = (minNow + timeNow.getHours()) / 12;

  setArrows(hours, hoursNow);
  setArrows(min, minNow);
  setArrows(sec, secNow);
}

function setArrows(ele, now) {
  ele.style.setProperty("--rotation", now * 360);
}

Time();

//carousel code from here: https://www.youtube.com/watch?v=9HcxHDS2w1s
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides");

    const activeSlides = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlides) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlides.dataset.active;
  });
});

function pageCheck() {
  var url = window.location.href;
  console.log(url)
  var lastPart = url.substr(url.lastIndexOf("/") + 1);
  console.log(lastPart)

  if (lastPart === "index.html#front-end-container" || lastPart === "#front-end-container") {
    // Show your overlay
    leftSection();
  } else if (
    lastPart === "index.html#" ||
    lastPart === "index.html" ||
    lastPart === "#" ||
    lastPart === ""
  ) {
    // Show your overlay
    leftSection();
  } else if (
    lastPart === "index.html#UX-container" ||
    lastPart === "#UX-container"
  ) {
    // Show your overlay
    midSection();
  } else if (
    lastPart === "index.html#media-conatiner" ||
    lastPart === "#media-conatiner"
  ) {
    // Show your overlay
    rightSection();
  }

  /*
  if (

    //window.location.href == "http://127.0.0.1:5501/index.html#front-end-container"
    window.location.href == "../index.html#front-end-container"
  ) {
    leftSection();
  } else if (
    //window.location.href == "http://127.0.0.1:5501/index.html" ||
    //window.location.href == "http://127.0.0.1:5501/index.html#"
    window.location.href == "http://i493594.hera.fhict.nl/newportfolio/index.html#" ||
    window.location.href == "http://i493594.hera.fhict.nl/newportfolio/index.html"
  ) {
    upSection();
  } else if (
    //window.location.href == "http://127.0.0.1:5501/index.html#UX-container"
    window.location.href == "http://i493594.hera.fhict.nl/newportfolio/index.html#UX-container"
  ) {
    midSection();
  } else if (
    //window.location.href == "http://127.0.0.1:5501/index.html#media-conatiner"
    window.location.href == "http://i493594.hera.fhict.nl/newportfolio/index.html#media-conatiner"
  ) {
    rightSection();
  }
  */
}
window.onhashchange = function () {
  pageCheck();
  console.log("hash changed")
};
window.onload = (event) => {
  removeHash();
  draw();
};
function removeHash() {
  history.pushState(
    "",
    document.title,
    window.location.pathname + window.location.search
  );
}

/*code from here: https://www.youtube.com/watch?v=x7WJEmxNlEs */

const startingMinutes = 10;
let countdownTime = startingMinutes * 60;
const countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);
function updateCountdown() {
  const countMinutes = Math.floor(countdownTime / 60);
  let countSeconds = countdownTime % 60;

  countdownEl.innerHTML = `${countMinutes}:${countSeconds}`;
  countdownTime--;
}

/* code from here: https://www.youtube.com/watch?v=oscPp3KghS8 */
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let randomIcon = document.querySelector(".fa-random");
let curr_track = document.createElement("audio");

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

/*drum kit*/
//arrow key code: https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == "38") {
    // up arrow
    console.log("38");
    slap();
  } else if (e.keyCode == "40") {
    // down arrow
    console.log("40");
    warDrum();
  } else if (e.keyCode == "37") {
    // left arrow
    console.log("37");
    punch();
  } else if (e.keyCode == "39") {
    // right arrow
    console.log("39");
    bamboo();
  }

  function slap() {
    var audio = document.getElementById("slap");
    audio.play();
  }
  function punch() {
    var audio = document.getElementById("punch");
    audio.play();
  }
  function warDrum() {
    var audio = document.getElementById("warDrum");
    audio.play();
  }
  function bamboo() {
    var audio = document.getElementById("bambooHit");
    audio.play();
  }
}

/*code for pie chart*/
function draw() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var colors = [
    "#5865f2",
    "#57f287",
    "#fee75c",
    "#ed4245",
    "#eb459e",
    "#CDDC39",
  ];

  var angles = [
    Math.PI * 0.6,
    Math.PI * 0.7,
    Math.PI * 0.4,
    Math.PI * 0.4,
    Math.PI * 0.3,
  ];

  var beginAngle = 0;
  var endAngle = 0;

  for (var i = 0; i < angles.length; i = i + 1) {
    beginAngle = endAngle;
    endAngle = endAngle + angles[i];

    ctx.beginPath();
    ctx.fillStyle = colors[i % colors.length];

    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 120, beginAngle, endAngle);
    ctx.lineTo(200, 200);
    ctx.stroke();

    ctx.fill();
  }
}

/*code for pig latin*/
 let wordsInput = document.getElementById("pig-words");

 function pigWords() {
   var fistLetter = "";
   let wordsVal = wordsInput.value;
   var strSplit = wordsVal.split(" ");
   var newWord = [];

   for (i = 0; i < strSplit.length; i++) {
     fistLetter = strSplit[i].charAt(0) + "ay";
     newWord[i] = strSplit[i].substr(1) + fistLetter;
   }
   document.getElementById("pig").innerHTML = "In pig latin the message is: " + newWord.join(" ");
    var audio = document.getElementById("pig-sound");
    audio.play();
 }