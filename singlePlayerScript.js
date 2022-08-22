const turnChangeMusic = new Audio("ting.mp3");
const resetGameMusic = new Audio("resetGame.mp3");
const gameWinMusic = new Audio("gameWinMusic.wav");
const gameDrawMusic = new Audio("gameDrawMusic.wav");

// Targeting HTML Elements
const congratulationsID = document.getElementById("cong");
const winnerNameID = document.getElementById("winnerName");
const turnOfXID = document.getElementById("turnOfX");
const turnOf0ID = document.getElementById("turnOf0");
const boxClass = document.getElementsByClassName("box");

// Targeting HTML Elements for winner color
const boxText1ID = document.getElementById("boxText1");
const boxText2ID = document.getElementById("boxText2");
const boxText3ID = document.getElementById("boxText3");
const boxText4ID = document.getElementById("boxText4");
const boxText5ID = document.getElementById("boxText5");
const boxText6ID = document.getElementById("boxText6");
const boxText7ID = document.getElementById("boxText7");
const boxText8ID = document.getElementById("boxText8");
const boxText9ID = document.getElementById("boxText9");

//color code naming
const toggleColorName = "rgb(251, 0, 255)";
const toggleResetColorName = "rgb(167, 60, 255)";
const gameDrawColor = "rgb(255, 60, 102)";
const resetButtonInitialColor = "rgb(112, 45, 255)";
const resetButtonPlayAgainColor = "rgb(251, 0, 247)";
const gameWinCongratulationsColor = "rgb(131, 0, 124)";
const colorOfX = "blue";
const colorOf0 = "green";
const colorOfBoxHover = "rgba(237, 165, 255,1)";
const colorResetOfBoxHover = "rgba(237, 165, 255,0)";
const winnerHilightedTextColor = "red";
const winnerHilightedBackgroundColor = "rgb(254, 255, 183)";

//Winner font size
const winnerFontSize = "7vh";
const winnerResetFontSize = "6vh";

let div1, div2, div3; //for winning logic.

let count = 1; //for toggle between X and Y

//Function for toggle between X and Y
/******************************************************* */

/****************************************************** */
function changeTurn(control) {

  if (document.getElementById(control.id).innerHTML != "") {
    return;
  }

  if (count <= 5 && count != 12) {
    

  
    if (count % 1 == 0 && count != 12) {
      document.getElementById(control.id).style.color = colorOfX;
      document.getElementById(control.id).innerHTML = "X";
      turnOf0ID.style.backgroundColor = toggleColorName;
      turnOfXID.style.backgroundColor = toggleResetColorName;
      turnOf0ID.innerText = "Player 2";
      turnOfXID.innerText = "";
  
      turnChangeMusic.play();
    }
  
    count++;
  

  /* ************************************************************** */
  
  
  /* ******************************************** */
}


 

  if (
    count != 12 &&
    (gameWinner("boxText1", "boxText2", "boxText3") ||
    gameWinner("boxText4", "boxText5", "boxText6") ||
    gameWinner("boxText7", "boxText8", "boxText9") ||
    gameWinner("boxText1", "boxText4", "boxText7") ||
    gameWinner("boxText2", "boxText5", "boxText8") ||
    gameWinner("boxText3", "boxText6", "boxText9") ||
    gameWinner("boxText1", "boxText5", "boxText9") ||
    gameWinner("boxText3", "boxText5", "boxText7")))
     {
      console.log("inside you are the winner")
        winnerNameID.innerText = "You are the Winner";
      
      winnerNameID.style.color = "rgb(251, 0, 255)";
      turnOf0ID.innerText = "";
      turnOfXID.innerText = "";
      turnOf0ID.style.backgroundColor = toggleResetColorName;
      turnOfXID.style.backgroundColor = toggleResetColorName;
      congratulationsID.style.display = "flex";
      congratulationsID.innerText = "Congratulations!!!";

    congratulationsID.style.backgroundColor = gameWinCongratulationsColor;
    document.getElementById("reset").innerText = "Play Again!!!";
    document.getElementById("reset").style.backgroundColor =
      resetButtonPlayAgainColor;

      gameDrawMusic.pause();
    gameWinMusic.play();
    count = 12;
    
  }    


  
  

  if(count != 12){computerTurn()}
  
  
  console.log(count)
  if (
    count != 12 &&
    (gameWinner("boxText1", "boxText2", "boxText3") ||
    gameWinner("boxText4", "boxText5", "boxText6") ||
    gameWinner("boxText7", "boxText8", "boxText9") ||
    gameWinner("boxText1", "boxText4", "boxText7") ||
    gameWinner("boxText2", "boxText5", "boxText8") ||
    gameWinner("boxText3", "boxText6", "boxText9") ||
    gameWinner("boxText1", "boxText5", "boxText9") ||
    gameWinner("boxText3", "boxText5", "boxText7")))
     {
      console.log("inside you are the winner")
        winnerNameID.innerText = "Computer is the Winner";
      
      winnerNameID.style.color = "rgb(251, 0, 255)";
      turnOf0ID.innerText = "";
      turnOfXID.innerText = "";
      turnOf0ID.style.backgroundColor = toggleResetColorName;
      turnOfXID.style.backgroundColor = toggleResetColorName;
      congratulationsID.style.display = "flex";
      congratulationsID.innerText = "Congratulations!!!";

    congratulationsID.style.backgroundColor = gameWinCongratulationsColor;
    document.getElementById("reset").innerText = "Play Again!!!";
    document.getElementById("reset").style.backgroundColor =
      resetButtonPlayAgainColor;

      gameDrawMusic.pause();
    gameWinMusic.play();
    count = 12;
    
  }  

  if (checkAllBox() && count != 12) {
    winnerNameID.innerText = "Game Draw";
    winnerNameID.style.color = gameDrawColor;
    turnOf0ID.innerText = "";
    turnOfXID.innerText = "";
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.style.backgroundColor = toggleResetColorName;
    congratulationsID.style.display = "flex";
    congratulationsID.innerText = "Opps!!!";
    document.getElementById("reset").innerText = "Play Again!!!";
    document.getElementById("reset").style.backgroundColor =
      resetButtonPlayAgainColor;
    gameWinMusic.pause();
    gameDrawMusic.play();

    count = 12;
  }

  

  //for highlight winner

  if (gameWinner("boxText1", "boxText2", "boxText3")) {
    boxText1ID.style.color = winnerHilightedTextColor;
    boxText1ID.style.backgroundColor = winnerHilightedBackgroundColor;
    boxText2ID.style.color = winnerHilightedTextColor;
    boxText2ID.style.backgroundColor = winnerHilightedBackgroundColor;
    boxText3ID.style.color = winnerHilightedTextColor;
    boxText3ID.style.backgroundColor = winnerHilightedBackgroundColor;
    boxText1ID.style.fontWeight = "bolder";
    boxText2ID.style.fontWeight = "bolder";
    boxText3ID.style.fontWeight = "bolder";
  } else if (gameWinner("boxText4", "boxText5", "boxText6")) {
    boxText4ID.style.color = winnerHilightedTextColor;
    boxText4ID.style.backgroundColor = winnerHilightedBackgroundColor;
    boxText5ID.style.color = winnerHilightedTextColor;
    boxText5ID.style.backgroundColor = winnerHilightedBackgroundColor;
    boxText6ID.style.color = winnerHilightedTextColor;
    boxText6ID.style.backgroundColor = winnerHilightedBackgroundColor;
    boxText4ID.style.fontWeight = "bolder";
    boxText5ID.style.fontWeight = "bolder";
    boxText6ID.style.fontWeight = "bolder";
  } else if (gameWinner("boxText7", "boxText8", "boxText9")) {
    boxText7ID.style.color = winnerHilightedTextColor;
    boxText7ID.style.backgroundColor = winnerHilightedBackgroundColor;
    boxText8ID.style.color = winnerHilightedTextColor;
    boxText8ID.style.backgroundColor = winnerHilightedBackgroundColor;
    boxText9ID.style.color = winnerHilightedTextColor;
    boxText9ID.style.backgroundColor = winnerHilightedBackgroundColor;
    boxText7ID.style.fontWeight = "bolder";
    boxText8ID.style.fontWeight = "bolder";
    boxText9ID.style.fontWeight = "bolder";
  } else if (gameWinner("boxText1", "boxText4", "boxText7")) {
    boxText1ID.style.color = winnerHilightedTextColor;
    boxText1ID.style.backgroundColor = winnerHilightedBackgroundColor;
    boxText4ID.style.color = winnerHilightedTextColor;
    boxText4ID.style.backgroundColor = winnerHilightedBackgroundColor;
    boxText7ID.style.color = winnerHilightedTextColor;
    boxText7ID.style.backgroundColor = winnerHilightedBackgroundColor;
    boxText1ID.style.fontWeight = "bolder";
    boxText4ID.style.fontWeight = "bolder";
    boxText7ID.style.fontWeight = "bolder";
  } else if (gameWinner("boxText2", "boxText5", "boxText8")) {
    boxText2ID.style.color = winnerHilightedTextColor;
    boxText2ID.style.backgroundColor = winnerHilightedBackgroundColor;
    boxText5ID.style.color = winnerHilightedTextColor;
    boxText5ID.style.backgroundColor = winnerHilightedBackgroundColor;
    boxText8ID.style.color = winnerHilightedTextColor;
    boxText8ID.style.backgroundColor = winnerHilightedBackgroundColor;
    boxText2ID.style.fontWeight = "bolder";
    boxText5ID.style.fontWeight = "bolder";
    boxText8ID.style.fontWeight = "bolder";
  } else if (gameWinner("boxText3", "boxText6", "boxText9")) {
    boxText3ID.style.color = winnerHilightedTextColor;
    boxText3ID.style.backgroundColor = winnerHilightedBackgroundColor;
    boxText6ID.style.color = winnerHilightedTextColor;
    boxText6ID.style.backgroundColor = winnerHilightedBackgroundColor;
    boxText9ID.style.color = winnerHilightedTextColor;
    boxText9ID.style.backgroundColor = winnerHilightedBackgroundColor;
    boxText3ID.style.fontWeight = "bolder";
    boxText6ID.style.fontWeight = "bolder";
    boxText9ID.style.fontWeight = "bolder";
  } else if (gameWinner("boxText1", "boxText5", "boxText9")) {
    boxText1ID.style.color = winnerHilightedTextColor;
    boxText1ID.style.backgroundColor = winnerHilightedBackgroundColor;
    boxText5ID.style.color = winnerHilightedTextColor;
    boxText5ID.style.backgroundColor = winnerHilightedBackgroundColor;
    boxText9ID.style.color = winnerHilightedTextColor;
    boxText9ID.style.backgroundColor = winnerHilightedBackgroundColor;
    boxText1ID.style.fontWeight = "bolder";
    boxText5ID.style.fontWeight = "bolder";
    boxText9ID.style.fontWeight = "bolder";
  } else if (gameWinner("boxText3", "boxText5", "boxText7")) {
    boxText3ID.style.color = winnerHilightedTextColor;
    boxText3ID.style.backgroundColor = winnerHilightedBackgroundColor;
    boxText5ID.style.color = winnerHilightedTextColor;
    boxText5ID.style.backgroundColor = winnerHilightedBackgroundColor;
    boxText7ID.style.color = winnerHilightedTextColor;
    boxText7ID.style.backgroundColor = winnerHilightedBackgroundColor;
    boxText3ID.style.fontWeight = "bolder";
    boxText5ID.style.fontWeight = "bolder";
    boxText7ID.style.fontWeight = "bolder";
  }
}

let txt = "";

//Function for Check Game Draw Condition
function checkAllBox() {
  for (let i = 1; i < 10; i++)
    if (document.getElementById("boxText" + i).innerText != "") {
      txt = true;
    } else {
      return false;
    }
  return txt;
}

//Funtion to Reset The Game.
function resetGame() {
  for (let i = 1; i < 10; i++) {
    document.getElementById("boxText" + i).innerText = "";
    document.getElementById("boxText" + i).style.backgroundColor = "white";
    document.getElementById("boxText" + i).style.fontWeight = "bold";
  }
  congratulationsID.innerText = "";
  congratulationsID.style.display = "none";
  turnOf0ID.style.backgroundColor = toggleResetColorName;
  winnerNameID.innerText = "";
  turnOf0ID.innerText = "";
  turnOfXID.innerText = "Player 1";
  turnOfXID.style.backgroundColor = toggleColorName;
  congratulationsID.style.backgroundColor = gameDrawColor;
  document.getElementById("reset").innerText = "Reset";
  document.getElementById("reset").style.backgroundColor =
    resetButtonInitialColor;
  winnerNameID.innerText = "Head";
  winnerNameID.style.color = "white";
  count = 1;

  gameDrawMusic.pause();
  gameDrawMusic.currentTime = 0;
  gameWinMusic.pause();
  gameWinMusic.currentTime = 0;
  resetGameMusic.play();
}

//Function to check win condition
function gameWinner(div1, div2, div3) {
  if (
    document.getElementById(div1).innerText != "" &&
    document.getElementById(div1).innerText ==
      document.getElementById(div2).innerText &&
    document.getElementById(div2).innerText ==
      document.getElementById(div3).innerText
  ) {
    return true;
  }
}

function forComputerTurn() {
  if (
    boxText1ID != "" ||
    boxText2ID != "" ||
    boxText3ID != "" ||
    boxText4ID != "" ||
    boxText5ID != "" ||
    boxText6ID != "" ||
    boxText7ID != "" ||
    boxText8ID != "" ||
    (boxText9ID != "")
  ) {
    return true;
  }
}

function computerTurn() {
  //Computer winner in Row 1...
  if (
    boxText1ID.innerText == "0" &&
    boxText2ID.innerText == "0" &&
    boxText3ID.innerText == "" &&
    forComputerTurn == true
  ) {
    document.getElementById("boxText3").innerText = "0";
    document.getElementById("boxText3").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";
    turnChangeMusic.play();
  } else if (
    boxText2ID.innerText == "0" &&
    boxText3ID.innerText == "0" &&
    boxText1ID.innerText == ""
  ) {
    document.getElementById("boxText1").innerText = "0";
    document.getElementById("boxText1").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText1ID.innerText == "0" &&
    boxText3ID.innerText == "0" &&
    boxText2ID.innerText == ""
  ) {
    document.getElementById("boxText2").innerText = "0";
    document.getElementById("boxText2").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  }

  //Computer winner in Row 2...
  else if (
    boxText4ID.innerText == "0" &&
    boxText5ID.innerText == "0" &&
    boxText6ID.innerText == ""
  ) {
    document.getElementById("boxText6").innerText = "0";
    document.getElementById("boxText6").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText5ID.innerText == "0" &&
    boxText6ID.innerText == "0" &&
    boxText4ID.innerText == ""
  ) {
    document.getElementById("boxText4").innerText = "0";
    document.getElementById("boxText4").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText4ID.innerText == "0" &&
    boxText6ID.innerText == "0" &&
    boxText5ID.innerText == ""
  ) {
    document.getElementById("boxText5").innerText = "0";
    document.getElementById("boxText5").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  }

  //Computer winner in Row 3...
  else if (
    boxText7ID.innerText == "0" &&
    boxText8ID.innerText == "0" &&
    boxText9ID.innerText == ""
  ) {
    document.getElementById("boxText9").innerText = "0";
    document.getElementById("boxText9").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText8ID.innerText == "0" &&
    boxText9ID.innerText == "0" &&
    boxText7ID.innerText == ""
  ) {
    document.getElementById("boxText7").innerText = "0";
    document.getElementById("boxText7").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText7ID.innerText == "0" &&
    boxText9ID.innerText == "0" &&
    boxText8ID.innerText == ""
  ) {
    document.getElementById("boxText8").innerText = "0";
    document.getElementById("boxText8").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  }

  //Computer winner in Column 1...
  else if (
    boxText1ID.innerText == "0" &&
    boxText4ID.innerText == "0" &&
    boxText7ID.innerText == ""
  ) {
    document.getElementById("boxText7").innerText = "0";
    document.getElementById("boxText7").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText4ID.innerText == "0" &&
    boxText7ID.innerText == "0" &&
    boxText1ID.innerText == ""
  ) {
    document.getElementById("boxText1").innerText = "0";
    document.getElementById("boxText1").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText1ID.innerText == "0" &&
    boxText7ID.innerText == "0" &&
    boxText4ID.innerText == ""
  ) {
    document.getElementById("boxText4").innerText = "0";
    document.getElementById("boxText4").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  }

  //Computer winner in Column 2...
  else if (
    boxText2ID.innerText == "0" &&
    boxText5ID.innerText == "0" &&
    boxText8ID.innerText == ""
  ) {
    document.getElementById("boxText8").innerText = "0";
    document.getElementById("boxText8").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText5ID.innerText == "0" &&
    boxText8ID.innerText == "0" &&
    boxText2ID.innerText == ""
  ) {
    document.getElementById("boxText2").innerText = "0";
    document.getElementById("boxText2").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText2ID.innerText == "0" &&
    boxText8ID.innerText == "0" &&
    boxText5ID.innerText == ""
  ) {
    document.getElementById("boxText5").innerText = "0";
    document.getElementById("boxText5").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  }

  //Computer winner in Column 3...
  else if (
    boxText3ID.innerText == "0" &&
    boxText6ID.innerText == "0" &&
    boxText9ID.innerText == ""
  ) {
    document.getElementById("boxText9").innerText = "0";
    document.getElementById("boxText9").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText6ID.innerText == "0" &&
    boxText9ID.innerText == "0" &&
    boxText3ID.innerText == ""
  ) {
    document.getElementById("boxText3").innerText = "0";
    document.getElementById("boxText3").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText3ID.innerText == "0" &&
    boxText9ID.innerText == "0" &&
    boxText6ID.innerText == ""
  ) {
    document.getElementById("boxText6").innerText = "0";
    document.getElementById("boxText6").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  }

  //Computer winner in Cross 1...
  else if (
    boxText1ID.innerText == "0" &&
    boxText5ID.innerText == "0" &&
    boxText9ID.innerText == ""
  ) {
    document.getElementById("boxText9").innerText = "0";
    document.getElementById("boxText9").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText5ID.innerText == "0" &&
    boxText9ID.innerText == "0" &&
    boxText1ID.innerText == ""
  ) {
    document.getElementById("boxText1").innerText = "0";
    document.getElementById("boxText1").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText1ID.innerText == "0" &&
    boxText9ID.innerText == "0" &&
    boxText5ID.innerText == ""
  ) {
    document.getElementById("boxText5").innerText = "0";
    document.getElementById("boxText5").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  }
  //Computer winner in Cross 2...
  else if (
    boxText3ID.innerText == "0" &&
    boxText5ID.innerText == "0" &&
    boxText7ID.innerText == ""
  ) {
    document.getElementById("boxText7").innerText = "0";
    document.getElementById("boxText7").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText5ID.innerText == "0" &&
    boxText7ID.innerText == "0" &&
    boxText3ID.innerText == ""
  ) {
    document.getElementById("boxText3").innerText = "0";
    document.getElementById("boxText3").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText3ID.innerText == "0" &&
    boxText7ID.innerText == "0" &&
    boxText5ID.innerText == ""
  ) {
    document.getElementById("boxText5").innerText = "0";
    document.getElementById("boxText5").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  }

  //Block Player 1 to win in Row 1...
  else if (
    boxText1ID.innerText == "X" &&
    boxText2ID.innerText == "X" &&
    boxText3ID.innerText == ""
  ) {
    document.getElementById("boxText3").innerText = "0";
    document.getElementById("boxText3").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText2ID.innerText == "X" &&
    boxText3ID.innerText == "X" &&
    boxText1ID.innerText == ""
  ) {
    document.getElementById("boxText1").innerText = "0";
    document.getElementById("boxText1").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText1ID.innerText == "X" &&
    boxText3ID.innerText == "X" &&
    boxText2ID.innerText == ""
  ) {
    document.getElementById("boxText2").innerText = "0";
    document.getElementById("boxText2").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  }

  //Block Player 1 to win in Row 2...
  else if (
    boxText4ID.innerText == "X" &&
    boxText5ID.innerText == "X" &&
    boxText6ID.innerText == ""
  ) {
    document.getElementById("boxText6").innerText = "0";
    document.getElementById("boxText6").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText5ID.innerText == "X" &&
    boxText6ID.innerText == "X" &&
    boxText4ID.innerText == ""
  ) {
    document.getElementById("boxText4").innerText = "0";
    document.getElementById("boxText4").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText4ID.innerText == "X" &&
    boxText6ID.innerText == "X" &&
    boxText5ID.innerText == ""
  ) {
    document.getElementById("boxText5").innerText = "0";
    document.getElementById("boxText5").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  }

  //Block Player 1 to win in Row 3...
  else if (
    boxText7ID.innerText == "X" &&
    boxText8ID.innerText == "X" &&
    boxText9ID.innerText == ""
  ) {
    document.getElementById("boxText9").innerText = "0";
    document.getElementById("boxText9").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText8ID.innerText == "X" &&
    boxText9ID.innerText == "X" &&
    boxText7ID.innerText == ""
  ) {
    document.getElementById("boxText7").innerText = "0";
    document.getElementById("boxText7").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText7ID.innerText == "X" &&
    boxText9ID.innerText == "X" &&
    boxText8ID.innerText == ""
  ) {
    document.getElementById("boxText8").innerText = "0";
    document.getElementById("boxText8").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  }

  //Block Player 1 to win in Column 1...
  else if (
    boxText1ID.innerText == "X" &&
    boxText4ID.innerText == "X" &&
    boxText7ID.innerText == ""
  ) {
    document.getElementById("boxText7").innerText = "0";
    document.getElementById("boxText7").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText4ID.innerText == "X" &&
    boxText7ID.innerText == "X" &&
    boxText1ID.innerText == ""
  ) {
    document.getElementById("boxText1").innerText = "0";
    document.getElementById("boxText1").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText1ID.innerText == "X" &&
    boxText7ID.innerText == "X" &&
    boxText4ID.innerText == ""
  ) {
    document.getElementById("boxText4").innerText = "0";
    document.getElementById("boxText4").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  }

  //Block Player 1 to win in Column 2...
  else if (
    boxText2ID.innerText == "X" &&
    boxText5ID.innerText == "X" &&
    boxText8ID.innerText == ""
  ) {
    document.getElementById("boxText8").innerText = "0";
    document.getElementById("boxText8").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText5ID.innerText == "X" &&
    boxText8ID.innerText == "X" &&
    boxText2ID.innerText == ""
  ) {
    document.getElementById("boxText2").innerText = "0";
    document.getElementById("boxText2").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText2ID.innerText == "X" &&
    boxText8ID.innerText == "X" &&
    boxText5ID.innerText == ""
  ) {
    document.getElementById("boxText5").innerText = "0";
    document.getElementById("boxText5").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  }

  //Block Player 1 to win in Column 3...
  else if (
    boxText3ID.innerText == "X" &&
    boxText6ID.innerText == "X" &&
    boxText9ID.innerText == ""
  ) {
    document.getElementById("boxText9").innerText = "0";
    document.getElementById("boxText9").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText6ID.innerText == "X" &&
    boxText9ID.innerText == "X" &&
    boxText3ID.innerText == ""
  ) {
    document.getElementById("boxText3").innerText = "0";
    document.getElementById("boxText3").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText3ID.innerText == "X" &&
    boxText9ID.innerText == "X" &&
    boxText6ID.innerText == ""
  ) {
    document.getElementById("boxText6").innerText = "0";
    document.getElementById("boxText6").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  }

  //Block Player 1 to win in Cross 1...
  else if (
    boxText1ID.innerText == "X" &&
    boxText5ID.innerText == "X" &&
    boxText9ID.innerText == ""
  ) {
    document.getElementById("boxText9").innerText = "0";
    document.getElementById("boxText9").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText5ID.innerText == "X" &&
    boxText9ID.innerText == "X" &&
    boxText1ID.innerText == ""
  ) {
    document.getElementById("boxText1").innerText = "0";
    document.getElementById("boxText1").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText1ID.innerText == "X" &&
    boxText9ID.innerText == "X" &&
    boxText5ID.innerText == ""
  ) {
    document.getElementById("boxText5").innerText = "0";
    document.getElementById("boxText5").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  }
  //Block Player 1 to win in Cross 2...
  else if (
    boxText3ID.innerText == "X" &&
    boxText5ID.innerText == "X" &&
    boxText7ID.innerText == ""
  ) {
    document.getElementById("boxText7").innerText = "0";
    document.getElementById("boxText7").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText5ID.innerText == "X" &&
    boxText7ID.innerText == "X" &&
    boxText3ID.innerText == ""
  ) {
    document.getElementById("boxText3").innerText = "0";
    document.getElementById("boxText3").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
  } else if (
    boxText3ID.innerText == "X" &&
    boxText7ID.innerText == "X" &&
    boxText5ID.innerText == ""
  ) {
    document.getElementById("boxText5").innerText = "0";
    document.getElementById("boxText5").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();

  }


/******************************************************************************************** */
// Game 1_1
    //If player 1 start from 1st cell
  else if (
    boxText1ID.innerText == "X" &&
    boxText5ID.innerText == ""
  ) {
    document.getElementById("boxText5").innerText = "0";
    document.getElementById("boxText5").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }
//If player 1 start from 1st cell and you are on 5th
  else if (
    boxText1ID.innerText == "X" &&
    boxText5ID.innerText == "0" &&
    boxText8ID.innerText == "X" &&
    boxText4ID.innerText == ""
  ) {
    document.getElementById("boxText4").innerText = "0";
    document.getElementById("boxText4").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }

  else if (
    boxText1ID.innerText == "X" &&
    boxText5ID.innerText == "0" &&
    boxText9ID.innerText == "X" &&
    boxText8ID.innerText == ""
  ) {
    document.getElementById("boxText8").innerText = "0";
    document.getElementById("boxText8").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }


  else if (
    boxText1ID.innerText == "X" &&
    boxText5ID.innerText == "0" &&
    boxText6ID.innerText == "X" &&
    boxText8ID.innerText == ""

  ) {
    document.getElementById("boxText8").innerText = "0";
    document.getElementById("boxText8").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }


  else if (
    boxText1ID.innerText == "X" &&
    boxText5ID.innerText == "0" &&
    boxText4ID.innerText == "X" &&
    boxText7ID.innerText == "0" &&
    boxText3ID.innerText == "X" &&
    boxText2ID.innerText == "0" &&
    boxText6ID.innerText == ""

  ) {
    document.getElementById("boxText6").innerText = "0";
    document.getElementById("boxText6").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }




  /***************************************************************************** */
//Game 1_2

else if (
  boxText1ID.innerText == "X" &&
  boxText4ID.innerText == "0" &&
  boxText6ID.innerText == "X" &&
  boxText9ID.innerText == ""
) {
  document.getElementById("boxText9").innerText = "0";
  document.getElementById("boxText9").style.color = colorOf0;
  turnOfXID.style.backgroundColor = toggleColorName;
  turnOf0ID.style.backgroundColor = toggleResetColorName;
  turnOfXID.innerText = "Player 1";
  turnOf0ID.innerText = "";

  turnChangeMusic.play();
  
}

else if (
  boxText1ID.innerText == "X" &&
  boxText4ID.innerText == "0" &&
  boxText5ID.innerText == "X" &&
  boxText9ID.innerText == "0" &&
  boxText6ID.innerText == "X" &&
  boxText3ID.innerText == "" 
  
) {
  document.getElementById("boxText3").innerText = "0";
  document.getElementById("boxText3").style.color = colorOf0;
  turnOfXID.style.backgroundColor = toggleColorName;
  turnOf0ID.style.backgroundColor = toggleResetColorName;
  turnOfXID.innerText = "Player 1";
  turnOf0ID.innerText = "";

  turnChangeMusic.play();
  
}

else if (
  boxText1ID.innerText == "X" &&
  boxText4ID.innerText == "0" &&
  boxText8ID.innerText == "X" &&
  boxText5ID.innerText == "" 
  
) {
  document.getElementById("boxText5").innerText = "0";
  document.getElementById("boxText5").style.color = colorOf0;
  turnOfXID.style.backgroundColor = toggleColorName;
  turnOf0ID.style.backgroundColor = toggleResetColorName;
  turnOfXID.innerText = "Player 1";
  turnOf0ID.innerText = "";

  turnChangeMusic.play();
  
}




  /************************************************************************** */
  //Game 2_3
  //If Player 1 starts 2nd cell

  else if (
    boxText2ID.innerText == "X" &&
    boxText5ID.innerText == ""

  ) {
    document.getElementById("boxText5").innerText = "0";
    document.getElementById("boxText5").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }

  else if (
    boxText2ID.innerText == "X" &&
    boxText5ID.innerText == "0" &&
    boxText6ID.innerText == "X" &&
    boxText1ID.innerText == ""

  ) {
    document.getElementById("boxText1").innerText = "0";
    document.getElementById("boxText1").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";
    turnChangeMusic.play();
    
  }

  else if (
    boxText2ID.innerText == "X" &&
    boxText5ID.innerText == "0" &&
    boxText4ID.innerText == "X" &&
    boxText3ID.innerText == ""

  ) {
    document.getElementById("boxText3").innerText = "0";
    document.getElementById("boxText3").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }


  else if (
    boxText2ID.innerText == "X" &&
    boxText5ID.innerText == "0" &&
    boxText8ID.innerText == "X" &&
    boxText4ID.innerText == ""

  ) {
    document.getElementById("boxText4").innerText = "0";
    document.getElementById("boxText4").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }

  else if (
    boxText2ID.innerText == "X" &&
    boxText5ID.innerText == "0" &&
    boxText7ID.innerText == "X" &&
    boxText1ID.innerText == ""

  ) {
    document.getElementById("boxText1").innerText = "0";
    document.getElementById("boxText1").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }

  else if (
    boxText2ID.innerText == "X" &&
    boxText5ID.innerText == "0" &&
    boxText9ID.innerText == "X" &&
    boxText3ID.innerText == ""

  ) {
    document.getElementById("boxText3").innerText = "0";
    document.getElementById("boxText3").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }


    /************************************************************************** */
  //Game 2_3
  //If Player 1 starts 3rd cell

  else if (
    boxText3ID.innerText == "X" &&
    boxText5ID.innerText == ""

  ) {
    document.getElementById("boxText5").innerText = "0";
    document.getElementById("boxText5").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    

  }

  //New Game

else if (
  boxText3ID.innerText == "X" &&
  boxText5ID.innerText == "0" &&
  boxText8ID.innerText == "X" &&
  boxText9ID.innerText == ""

) {
  document.getElementById("boxText9").innerText = "0";
  document.getElementById("boxText9").style.color = colorOf0;
  turnOfXID.style.backgroundColor = toggleColorName;
  turnOf0ID.style.backgroundColor = toggleResetColorName;
  turnOfXID.innerText = "Player 1";
  turnOf0ID.innerText = "";

  turnChangeMusic.play();
  
}

else if (
  boxText3ID.innerText == "X" &&
  boxText5ID.innerText == "0" &&
  boxText8ID.innerText == "X" &&
  boxText6ID.innerText == "0" &&
  boxText4ID.innerText == "X" &&
  boxText1ID.innerText == ""


) {
  document.getElementById("boxText1").innerText = "0";
  document.getElementById("boxText1").style.color = colorOf0;
  turnOfXID.style.backgroundColor = toggleColorName;
  turnOf0ID.style.backgroundColor = toggleResetColorName;
  turnOfXID.innerText = "Player 1";
  turnOf0ID.innerText = "";

  turnChangeMusic.play();
  
}


  else if (
    boxText3ID.innerText == "X" &&
    boxText5ID.innerText == "0" &&
    boxText4ID.innerText == "X" &&
    boxText2ID.innerText == ""

  ) {
    document.getElementById("boxText2").innerText = "0";
    document.getElementById("boxText2").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }

  else if (
    boxText3ID.innerText == "X" &&
    boxText5ID.innerText == "0" &&
    boxText7ID.innerText == "X" &&
    boxText8ID.innerText == ""

  ) {
    document.getElementById("boxText8").innerText = "0";
    document.getElementById("boxText8").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }


  //New Game

  else if (
    boxText3ID.innerText == "X" &&
    boxText5ID.innerText == "0" &&
    boxText2ID.innerText == "X" &&
    boxText1ID.innerText == "0" &&
    boxText9ID.innerText == "X" &&
    boxText6ID.innerText == "0" &&
    boxText4ID.innerText == "X" &&
    boxText7ID.innerText == ""

  ) {
    document.getElementById("boxText7").innerText = "0";
    document.getElementById("boxText7").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }

  //New Game

  else if (
    boxText3ID.innerText == "X" &&
    boxText5ID.innerText == "0" &&
    boxText4ID.innerText == "X" &&
    boxText2ID.innerText == "0" &&
    boxText8ID.innerText == "X" &&
    boxText9ID.innerText == ""

  ) {
    document.getElementById("boxText9").innerText = "0";
    document.getElementById("boxText9").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }

  /********************************************************************** */
  //Game 4 cell 4
  //New game.

  else if (
    boxText4ID.innerText == "X" &&
    boxText5ID.innerText == ""

  ) {
    document.getElementById("boxText5").innerText = "0";
    document.getElementById("boxText5").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }

  else if (
    boxText4ID.innerText == "X" &&
    boxText5ID.innerText == "0" &&
    boxText8ID.innerText == "X" &&
    boxText9ID.innerText == ""

  ) {
    document.getElementById("boxText9").innerText = "0";
    document.getElementById("boxText9").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }

  else if (
    boxText4ID.innerText == "X" &&
    boxText5ID.innerText == "0" &&
    boxText9ID.innerText == "X" &&
    boxText3ID.innerText == ""

  ) {
    document.getElementById("boxText3").innerText = "0";
    document.getElementById("boxText3").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }

  else if (
    boxText4ID.innerText == "X" &&
    boxText5ID.innerText == "0" &&
    boxText6ID.innerText == "X" &&
    boxText3ID.innerText == ""

  ) {
    document.getElementById("boxText3").innerText = "0";
    document.getElementById("boxText3").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }


  /***************************************************** */
  //Game 5
  //New Game
  else if (
    boxText5ID.innerText == "X" &&
    boxText3ID.innerText == ""

  ) {
    document.getElementById("boxText3").innerText = "0";
    document.getElementById("boxText3").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }


  else if (
    boxText5ID.innerText == "X" &&
    boxText3ID.innerText == "0" &&
    boxText7ID.innerText == "X" &&
    boxText9ID.innerText == ""

  ) {
    document.getElementById("boxText9").innerText = "0";
    document.getElementById("boxText9").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }

  else if (
    boxText5ID.innerText == "X" &&
    boxText3ID.innerText == "0" &&
    boxText7ID.innerText == "X" &&
    boxText9ID.innerText == "0" &&
    boxText6ID.innerText == "X" &&
    boxText4ID.innerText == "0" &&
    boxText1ID.innerText == "X" &&
    boxText8ID.innerText == ""

  ) {
    document.getElementById("boxText8").innerText = "0";
    document.getElementById("boxText8").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }


  else if (
    boxText5ID.innerText == "X" &&
    boxText3ID.innerText == "0" &&
    boxText9ID.innerText == "X" &&
    boxText1ID.innerText == "0" &&
    boxText2ID.innerText == "X" &&
    boxText8ID.innerText == "0" &&
    boxText7ID.innerText == "X" &&
    boxText4ID.innerText == ""

  ) {
    document.getElementById("boxText4").innerText = "0";
    document.getElementById("boxText4").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }


  /************************************************************ */
  //Game 6
  //New Game

  else if (
    boxText6ID.innerText == "X" &&
    boxText5ID.innerText == ""

  ) {
    document.getElementById("boxText5").innerText = "0";
    document.getElementById("boxText5").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }

  else if (
    boxText6ID.innerText == "X" &&
    boxText5ID.innerText == "0" &&
    boxText8ID.innerText == "X" &&
    boxText9ID.innerText == ""


  ) {
    document.getElementById("boxText9").innerText = "0";
    document.getElementById("boxText9").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }

  else if (
    boxText6ID.innerText == "X" &&
    boxText5ID.innerText == "0" &&
    boxText8ID.innerText == "X" &&
    boxText9ID.innerText == "0" &&
    boxText1ID.innerText == "X" &&
    boxText4ID.innerText == "0" &&
    boxText7ID.innerText == "X" &&
    boxText3ID.innerText == ""
    



  ) {
    document.getElementById("boxText3").innerText = "0";
    document.getElementById("boxText3").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }

  //New Game
  else if (
    boxText6ID.innerText == "X" &&
    boxText5ID.innerText == "0" &&
    boxText7ID.innerText == "X" &&
    boxText9ID.innerText == ""

    



  ) {
    document.getElementById("boxText9").innerText = "0";
    document.getElementById("boxText9").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }

  /********************************************************************* */
  // Game 7
  // New Game

  else if (
    boxText7ID.innerText == "X" &&
    boxText5ID.innerText == ""

    



  ) {
    document.getElementById("boxText5").innerText = "0";
    document.getElementById("boxText5").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }

  //New Game
  else if (
    boxText8ID.innerText == "X" &&
    boxText5ID.innerText == ""

    



  ) {
    document.getElementById("boxText5").innerText = "0";
    document.getElementById("boxText5").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }

  //New Game
  else if (
    boxText9ID.innerText == "X" &&
    boxText5ID.innerText == ""

    



  ) {
    document.getElementById("boxText5").innerText = "0";
    document.getElementById("boxText5").style.color = colorOf0;
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";

    turnChangeMusic.play();
    
  }


  
}
