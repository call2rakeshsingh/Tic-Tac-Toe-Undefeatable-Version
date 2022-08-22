const centerID = document.getElementById("center");
const firstPageID = document.getElementById("firstPage");
const singlePlayerButtonID = document.getElementById("singlePlayerButton1");
const doublePlayerButtonID = document.getElementById("doublePlayerButton1");
const goToHomeButtonID = document.getElementById("goToHomeButton1");
const firstPageButtonsID = document.getElementById("firstPageButtons1");

window.addEventListener('load', (event) => {
    centerID.style.display = "none";
});

let src;

function loadScript(src) {
  let el = document.createElement("script");
  el.src = src;
  el.id = "appendedScript";
  document.getElementById("appendScript").appendChild(el);
}

console.log(document.getElementById("appendScript"));

const button = document.createElement("button");
button.innerText = "Single Player";
button.id = "singlePlayerButton";
let x = button.addEventListener("click", () => {
  firstPageButtonsID.style.display = "none";
  centerID.style.display = "block";
  document.getElementById("goToHomeButton").style.display = "block";
  loadScript("singlePlayerScript.js");

  console.log(document.getElementById("appendScript"));
});
singlePlayerButtonID.appendChild(button);

const button2 = document.createElement("button");
button2.innerText = "Double Player";
button2.id = "doublePlayerButton";

let y = button2.addEventListener("click", () => {
  firstPageButtonsID.style.display = "none";
  goToHomeButtonID.style.display = "block";
  document.getElementById("goToHomeButton").style.display = "block";
  centerID.style.display = "block";
  loadScript("doublePlayerScript.js");
});
doublePlayerButtonID.appendChild(button2);

const button3 = document.createElement("button");
button3.innerText = "Go To Home";
button3.id = "goToHomeButton";

console.log(document.getElementById("appendScript"));

let z = button3.addEventListener("click", () => {
  let text = "Are You Sure You Want To Quit The Game";
  if (confirm(text) == true) {
    resetGame();
    firstPageButtonsID.style.display = "block";
    document.getElementById("goToHomeButton").style.display = "none";
    centerID.style.display = "none";
    console.log(document.getElementById("appendScript"));
    location.reload();
  }

});
goToHomeButtonID.appendChild(button3);




