"user strict";

const turnChangeMusic = new Audio("ting.mp3");
const resetGameMusic = new Audio("resetGame.mp3");
const gameWinMusic = new Audio("gameWinMusic.wav");
const gameDrawMusic = new Audio("gameDrawMusic.wav");

const firstPageButtonsID = document.getElementById("firstPageButtonsID");
const singlePlayer = document.getElementById("singlePlayer");
const doublePlayer = document.getElementById("doublePlayer");
const center = document.getElementById("center");
const goToHome = document.getElementById("goToHome");
const goToHomeButton = document.getElementById("goToHomeButton");


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

let div1, div2, div3; //for winning logic.

let count = 1; //for toggle between X and Y
let computerCount = 0;

let txt = "";

let isSetTimmeoutRunning = false;

function chooseMode(){
  firstPageButtonsID.style.display = "none";
  goToHomeButton.style.display = "flex";
  center.style.display = "block";
}
    function changeTurn(control) {

      if(singlePlayer.checked == true){
        if (document.getElementById(control.id).innerHTML != "") {
          return;
        }
        console.log("before x turn", computerCount);
        console.log("before x turn count", count);
        if (count <= 9 && count != 12 && count - computerCount == 1) {
          if (count % 2 != 0 && count != 12) {
            document.getElementById(control.id).style.color = colorOfX;
            document.getElementById(control.id).innerHTML = "X";
            turnOf0ID.style.backgroundColor = toggleColorName;
            turnOfXID.style.backgroundColor = toggleResetColorName;
            turnOf0ID.innerText = "Computer's Turn";
            turnOfXID.innerText = "";
            turnChangeMusic.play();
          }
          count++;
        } else {
          ("What happening");
        }
      
        if (count <= 10 && count != 12) {
          forUserWinner();
          gameDrawPopUp();
          gameWinnerHighlight();
        }
      
        console.log("inside setTimeout count", count);
        console.log("inside setTimeout computerCount", computerCount);



        if (count <= 9 && count != 12 && count - computerCount == 2) {

          computerTurn();
          forComputerWinner();
          gameDrawPopUp();
          gameWinnerHighlight();
        }
      
        if (count != 12) {
            count++;
        } else {
          count = "X";
        }
        console.log(count, "after last");
  }

  else if(doublePlayer.checked == true){

    if (count <= 9) {
      if (document.getElementById(control.id).innerHTML != "") {
        return;
      }
  
      if (count % 2 != 0 && count != 12) {
        document.getElementById(control.id).style.color = colorOfX;
        document.getElementById(control.id).innerHTML = "X";
        turnOf0ID.style.backgroundColor = toggleColorName;
        turnOfXID.style.backgroundColor = toggleResetColorName;
        turnOf0ID.innerText = "Player 2";
        turnOfXID.innerText = "";
  
        turnChangeMusic.play();
  
      } 

      if (count <= 10 && count != 12) {
        forPlayer1();
        gameDrawPopUp();
        gameWinnerHighlight();
      }
  
      
      if(count % 2 == 0 && count != 12) {
        document.getElementById(control.id).style.color = colorOf0;
        document.getElementById(control.id).innerHTML = "0";
        turnOfXID.style.backgroundColor = toggleColorName;
        turnOf0ID.style.backgroundColor = toggleResetColorName;
        turnOfXID.innerText = "Player 1";
        turnOf0ID.innerText = "";
  
        turnChangeMusic.play();
      }

      if (count <= 10 && count != 12) {
        forPlayer2();
        gameDrawPopUp();
        gameWinnerHighlight();
      }

      count++;
    }
}
}





/************************************************************************************************************* */


  /************************************************************ */

  function forGoToHome(){
    resetGame();
    center.style.display = "none"
    goToHomeButton.style.display = "none"
    firstPageButtonsID.style.display = "block"
    doublePlayer.checked = false;
    singlePlayer.checked = false;
    goToHome.checked = true;

  }
  
  function actionsAfterWinnerHighlightRun(div1, div2, div3) {
    div1.style.color = winnerHilightedTextColor;
    div1.style.backgroundColor = winnerHilightedBackgroundColor;
    div2.style.color = winnerHilightedTextColor;
    div2.style.backgroundColor = winnerHilightedBackgroundColor;
    div3.style.color = winnerHilightedTextColor;
    div3.style.backgroundColor = winnerHilightedBackgroundColor;
    div1.style.fontWeight = "bolder";
    div2.style.fontWeight = "bolder";
    div3.style.fontWeight = "bolder";
  }
  
  function gameWinnerHighlight() {
    if (gameWinner("boxText1", "boxText2", "boxText3")) {
      actionsAfterWinnerHighlightRun(boxText1ID, boxText2ID, boxText3ID);
    } else if (gameWinner("boxText4", "boxText5", "boxText6")) {
      actionsAfterWinnerHighlightRun(boxText4ID, boxText5ID, boxText6ID);
    } else if (gameWinner("boxText7", "boxText8", "boxText9")) {
      actionsAfterWinnerHighlightRun(boxText7ID, boxText8ID, boxText9ID);
    } else if (gameWinner("boxText1", "boxText4", "boxText7")) {
      actionsAfterWinnerHighlightRun(boxText1ID, boxText4ID, boxText7ID);
    } else if (gameWinner("boxText2", "boxText5", "boxText8")) {
      actionsAfterWinnerHighlightRun(boxText2ID, boxText5ID, boxText8ID);
    } else if (gameWinner("boxText3", "boxText6", "boxText9")) {
      actionsAfterWinnerHighlightRun(boxText3ID, boxText6ID, boxText9ID);
    } else if (gameWinner("boxText1", "boxText5", "boxText9")) {
      actionsAfterWinnerHighlightRun(boxText1ID, boxText5ID, boxText9ID);
    } else if (gameWinner("boxText3", "boxText5", "boxText7")) {
      actionsAfterWinnerHighlightRun(boxText3ID, boxText5ID, boxText7ID);
    }
  }
  
  
  
  function actionsAfterCommonWinningAndDraw(){
    turnOf0ID.innerText = "";
    turnOfXID.innerText = "";
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.style.backgroundColor = toggleResetColorName;
    congratulationsID.style.display = "flex";
    document.getElementById("reset").innerText = "Play Again!!!";
    document.getElementById("reset").style.backgroundColor =
    resetButtonPlayAgainColor;
    count = 12;
  }
  
  function actionsAfterWinnerDecided(){
    winnerNameID.style.color = "rgb(251, 0, 255)";
    actionsAfterCommonWinningAndDraw();
    congratulationsID.style.backgroundColor = gameWinCongratulationsColor;
    congratulationsID.innerText = "Congratulations!!!";
    gameDrawMusic.pause();
    gameWinMusic.play();
  }
  
  
  function gameDrawPopUp() {
    if (checkAllBox() && count != 12) {
    winnerNameID.innerText = "Game Draw";
    winnerNameID.style.color = gameDrawColor;
    actionsAfterCommonWinningAndDraw();
    congratulationsID.style.backgroundColor = gameDrawColor;
    congratulationsID.innerText = "Opps!!!";
    gameWinMusic.pause();
    gameDrawMusic.play();
    }
  }
  
  
  function forComputerWinner() {
    if (
      count != 12 &&
      (gameWinner("boxText1", "boxText2", "boxText3") ||
        gameWinner("boxText4", "boxText5", "boxText6") ||
        gameWinner("boxText7", "boxText8", "boxText9") ||
        gameWinner("boxText1", "boxText4", "boxText7") ||
        gameWinner("boxText2", "boxText5", "boxText8") ||
        gameWinner("boxText3", "boxText6", "boxText9") ||
        gameWinner("boxText1", "boxText5", "boxText9") ||
        gameWinner("boxText3", "boxText5", "boxText7"))
    ) {
      winnerNameID.innerText = "Computer is the Winner";
      actionsAfterWinnerDecided();
    }
  }
  
  function forUserWinner() {
    if (
      count != 12 &&
      (gameWinner("boxText1", "boxText2", "boxText3") ||
        gameWinner("boxText4", "boxText5", "boxText6") ||
        gameWinner("boxText7", "boxText8", "boxText9") ||
        gameWinner("boxText1", "boxText4", "boxText7") ||
        gameWinner("boxText2", "boxText5", "boxText8") ||
        gameWinner("boxText3", "boxText6", "boxText9") ||
        gameWinner("boxText1", "boxText5", "boxText9") ||
        gameWinner("boxText3", "boxText5", "boxText7"))
    ) {
      console.log("inside you are the winner");
      winnerNameID.innerText = "You are the Winner";
      actionsAfterWinnerDecided();
    }
  }

  function forPlayer1() {
    if (
      count != 12 &&
      (gameWinner("boxText1", "boxText2", "boxText3") ||
        gameWinner("boxText4", "boxText5", "boxText6") ||
        gameWinner("boxText7", "boxText8", "boxText9") ||
        gameWinner("boxText1", "boxText4", "boxText7") ||
        gameWinner("boxText2", "boxText5", "boxText8") ||
        gameWinner("boxText3", "boxText6", "boxText9") ||
        gameWinner("boxText1", "boxText5", "boxText9") ||
        gameWinner("boxText3", "boxText5", "boxText7"))
    ) {
      console.log("inside you are the winner");
      winnerNameID.innerText = "Player 1 is the Winner";
      actionsAfterWinnerDecided();
    }
  }

  function forPlayer2() {
    if (
      count != 12 &&
      (gameWinner("boxText1", "boxText2", "boxText3") ||
        gameWinner("boxText4", "boxText5", "boxText6") ||
        gameWinner("boxText7", "boxText8", "boxText9") ||
        gameWinner("boxText1", "boxText4", "boxText7") ||
        gameWinner("boxText2", "boxText5", "boxText8") ||
        gameWinner("boxText3", "boxText6", "boxText9") ||
        gameWinner("boxText1", "boxText5", "boxText9") ||
        gameWinner("boxText3", "boxText5", "boxText7"))
    ) {
      console.log("inside you are the winner");
      winnerNameID.innerText = "Player 2 is the Winner";
      actionsAfterWinnerDecided();
    }
  }
  
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
    computerCount = 0;
  
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


/************************************************************************************************************** */
function actionsAfterComputerTurn() {
    turnOfXID.style.backgroundColor = toggleColorName;
    turnOf0ID.style.backgroundColor = toggleResetColorName;
    turnOfXID.innerText = "Player 1";
    turnOf0ID.innerText = "";
    turnChangeMusic.play();
  }
  
  function computerTurn() {
    //Computer winner in Row 1...
    if (
      boxText1ID.innerText == "0" &&
      boxText2ID.innerText == "0" &&
      boxText3ID.innerText == ""
    ) {
      document.getElementById("boxText3").innerText = "0";
      document.getElementById("boxText3").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText2ID.innerText == "0" &&
      boxText3ID.innerText == "0" &&
      boxText1ID.innerText == ""
    ) {
      document.getElementById("boxText1").innerText = "0";
      document.getElementById("boxText1").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText1ID.innerText == "0" &&
      boxText3ID.innerText == "0" &&
      boxText2ID.innerText == ""
    ) {
      document.getElementById("boxText2").innerText = "0";
      document.getElementById("boxText2").style.color = colorOf0;
      actionsAfterComputerTurn();
    }
  
    //Computer winner in Row 2...
    else if (
      boxText4ID.innerText == "0" &&
      boxText5ID.innerText == "0" &&
      boxText6ID.innerText == ""
    ) {
      document.getElementById("boxText6").innerText = "0";
      document.getElementById("boxText6").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText5ID.innerText == "0" &&
      boxText6ID.innerText == "0" &&
      boxText4ID.innerText == ""
    ) {
      document.getElementById("boxText4").innerText = "0";
      document.getElementById("boxText4").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText4ID.innerText == "0" &&
      boxText6ID.innerText == "0" &&
      boxText5ID.innerText == ""
    ) {
      document.getElementById("boxText5").innerText = "0";
      document.getElementById("boxText5").style.color = colorOf0;
      actionsAfterComputerTurn();
    }
  
    //Computer winner in Row 3...
    else if (
      boxText7ID.innerText == "0" &&
      boxText8ID.innerText == "0" &&
      boxText9ID.innerText == ""
    ) {
      document.getElementById("boxText9").innerText = "0";
      document.getElementById("boxText9").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText8ID.innerText == "0" &&
      boxText9ID.innerText == "0" &&
      boxText7ID.innerText == ""
    ) {
      document.getElementById("boxText7").innerText = "0";
      document.getElementById("boxText7").style.color = colorOf0;
      actionsAfterComputerTurn();
  
      turnChangeMusic.play();
    } else if (
      boxText7ID.innerText == "0" &&
      boxText9ID.innerText == "0" &&
      boxText8ID.innerText == ""
    ) {
      document.getElementById("boxText8").innerText = "0";
      document.getElementById("boxText8").style.color = colorOf0;
      actionsAfterComputerTurn();
    }
  
    //Computer winner in Column 1...
    else if (
      boxText1ID.innerText == "0" &&
      boxText4ID.innerText == "0" &&
      boxText7ID.innerText == ""
    ) {
      document.getElementById("boxText7").innerText = "0";
      document.getElementById("boxText7").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText4ID.innerText == "0" &&
      boxText7ID.innerText == "0" &&
      boxText1ID.innerText == ""
    ) {
      document.getElementById("boxText1").innerText = "0";
      document.getElementById("boxText1").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText1ID.innerText == "0" &&
      boxText7ID.innerText == "0" &&
      boxText4ID.innerText == ""
    ) {
      document.getElementById("boxText4").innerText = "0";
      document.getElementById("boxText4").style.color = colorOf0;
      actionsAfterComputerTurn();
    }
  
    //Computer winner in Column 2...
    else if (
      boxText2ID.innerText == "0" &&
      boxText5ID.innerText == "0" &&
      boxText8ID.innerText == ""
    ) {
      document.getElementById("boxText8").innerText = "0";
      document.getElementById("boxText8").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText5ID.innerText == "0" &&
      boxText8ID.innerText == "0" &&
      boxText2ID.innerText == ""
    ) {
      document.getElementById("boxText2").innerText = "0";
      document.getElementById("boxText2").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText2ID.innerText == "0" &&
      boxText8ID.innerText == "0" &&
      boxText5ID.innerText == ""
    ) {
      document.getElementById("boxText5").innerText = "0";
      document.getElementById("boxText5").style.color = colorOf0;
      actionsAfterComputerTurn();
    }
  
    //Computer winner in Column 3...
    else if (
      boxText3ID.innerText == "0" &&
      boxText6ID.innerText == "0" &&
      boxText9ID.innerText == ""
    ) {
      document.getElementById("boxText9").innerText = "0";
      document.getElementById("boxText9").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText6ID.innerText == "0" &&
      boxText9ID.innerText == "0" &&
      boxText3ID.innerText == ""
    ) {
      document.getElementById("boxText3").innerText = "0";
      document.getElementById("boxText3").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText3ID.innerText == "0" &&
      boxText9ID.innerText == "0" &&
      boxText6ID.innerText == ""
    ) {
      document.getElementById("boxText6").innerText = "0";
      document.getElementById("boxText6").style.color = colorOf0;
      actionsAfterComputerTurn();
    }
  
    //Computer winner in Cross 1...
    else if (
      boxText1ID.innerText == "0" &&
      boxText5ID.innerText == "0" &&
      boxText9ID.innerText == ""
    ) {
      document.getElementById("boxText9").innerText = "0";
      document.getElementById("boxText9").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText5ID.innerText == "0" &&
      boxText9ID.innerText == "0" &&
      boxText1ID.innerText == ""
    ) {
      document.getElementById("boxText1").innerText = "0";
      document.getElementById("boxText1").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText1ID.innerText == "0" &&
      boxText9ID.innerText == "0" &&
      boxText5ID.innerText == ""
    ) {
      document.getElementById("boxText5").innerText = "0";
      document.getElementById("boxText5").style.color = colorOf0;
      actionsAfterComputerTurn();
    }
    //Computer winner in Cross 2...
    else if (
      boxText3ID.innerText == "0" &&
      boxText5ID.innerText == "0" &&
      boxText7ID.innerText == ""
    ) {
      document.getElementById("boxText7").innerText = "0";
      document.getElementById("boxText7").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText5ID.innerText == "0" &&
      boxText7ID.innerText == "0" &&
      boxText3ID.innerText == ""
    ) {
      document.getElementById("boxText3").innerText = "0";
      document.getElementById("boxText3").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText3ID.innerText == "0" &&
      boxText7ID.innerText == "0" &&
      boxText5ID.innerText == ""
    ) {
      document.getElementById("boxText5").innerText = "0";
      document.getElementById("boxText5").style.color = colorOf0;
      actionsAfterComputerTurn();
    }
  
    //Block Player 1 to win in Row 1...
    else if (
      boxText1ID.innerText == "X" &&
      boxText2ID.innerText == "X" &&
      boxText3ID.innerText == ""
    ) {
      document.getElementById("boxText3").innerText = "0";
      document.getElementById("boxText3").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText2ID.innerText == "X" &&
      boxText3ID.innerText == "X" &&
      boxText1ID.innerText == ""
    ) {
      document.getElementById("boxText1").innerText = "0";
      document.getElementById("boxText1").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText1ID.innerText == "X" &&
      boxText3ID.innerText == "X" &&
      boxText2ID.innerText == ""
    ) {
      document.getElementById("boxText2").innerText = "0";
      document.getElementById("boxText2").style.color = colorOf0;
      actionsAfterComputerTurn();
    }
  
    //Block Player 1 to win in Row 2...
    else if (
      boxText4ID.innerText == "X" &&
      boxText5ID.innerText == "X" &&
      boxText6ID.innerText == ""
    ) {
      document.getElementById("boxText6").innerText = "0";
      document.getElementById("boxText6").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText5ID.innerText == "X" &&
      boxText6ID.innerText == "X" &&
      boxText4ID.innerText == ""
    ) {
      document.getElementById("boxText4").innerText = "0";
      document.getElementById("boxText4").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText4ID.innerText == "X" &&
      boxText6ID.innerText == "X" &&
      boxText5ID.innerText == ""
    ) {
      document.getElementById("boxText5").innerText = "0";
      document.getElementById("boxText5").style.color = colorOf0;
      actionsAfterComputerTurn();
    }
  
    //Block Player 1 to win in Row 3...
    else if (
      boxText7ID.innerText == "X" &&
      boxText8ID.innerText == "X" &&
      boxText9ID.innerText == ""
    ) {
      document.getElementById("boxText9").innerText = "0";
      document.getElementById("boxText9").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText8ID.innerText == "X" &&
      boxText9ID.innerText == "X" &&
      boxText7ID.innerText == ""
    ) {
      document.getElementById("boxText7").innerText = "0";
      document.getElementById("boxText7").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText7ID.innerText == "X" &&
      boxText9ID.innerText == "X" &&
      boxText8ID.innerText == ""
    ) {
      document.getElementById("boxText8").innerText = "0";
      document.getElementById("boxText8").style.color = colorOf0;
      actionsAfterComputerTurn();
    }
  
    //Block Player 1 to win in Column 1...
    else if (
      boxText1ID.innerText == "X" &&
      boxText4ID.innerText == "X" &&
      boxText7ID.innerText == ""
    ) {
      document.getElementById("boxText7").innerText = "0";
      document.getElementById("boxText7").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText4ID.innerText == "X" &&
      boxText7ID.innerText == "X" &&
      boxText1ID.innerText == ""
    ) {
      document.getElementById("boxText1").innerText = "0";
      document.getElementById("boxText1").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText1ID.innerText == "X" &&
      boxText7ID.innerText == "X" &&
      boxText4ID.innerText == ""
    ) {
      document.getElementById("boxText4").innerText = "0";
      document.getElementById("boxText4").style.color = colorOf0;
      actionsAfterComputerTurn();
    }
  
    //Block Player 1 to win in Column 2...
    else if (
      boxText2ID.innerText == "X" &&
      boxText5ID.innerText == "X" &&
      boxText8ID.innerText == ""
    ) {
      document.getElementById("boxText8").innerText = "0";
      document.getElementById("boxText8").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText5ID.innerText == "X" &&
      boxText8ID.innerText == "X" &&
      boxText2ID.innerText == ""
    ) {
      document.getElementById("boxText2").innerText = "0";
      document.getElementById("boxText2").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText2ID.innerText == "X" &&
      boxText8ID.innerText == "X" &&
      boxText5ID.innerText == ""
    ) {
      document.getElementById("boxText5").innerText = "0";
      document.getElementById("boxText5").style.color = colorOf0;
      actionsAfterComputerTurn();
    }
  
    //Block Player 1 to win in Column 3...
    else if (
      boxText3ID.innerText == "X" &&
      boxText6ID.innerText == "X" &&
      boxText9ID.innerText == ""
    ) {
      document.getElementById("boxText9").innerText = "0";
      document.getElementById("boxText9").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText6ID.innerText == "X" &&
      boxText9ID.innerText == "X" &&
      boxText3ID.innerText == ""
    ) {
      document.getElementById("boxText3").innerText = "0";
      document.getElementById("boxText3").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText3ID.innerText == "X" &&
      boxText9ID.innerText == "X" &&
      boxText6ID.innerText == ""
    ) {
      document.getElementById("boxText6").innerText = "0";
      document.getElementById("boxText6").style.color = colorOf0;
      actionsAfterComputerTurn();
    }
  
    //Block Player 1 to win in Cross 1...
    else if (
      boxText1ID.innerText == "X" &&
      boxText5ID.innerText == "X" &&
      boxText9ID.innerText == ""
    ) {
      document.getElementById("boxText9").innerText = "0";
      document.getElementById("boxText9").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText5ID.innerText == "X" &&
      boxText9ID.innerText == "X" &&
      boxText1ID.innerText == ""
    ) {
      document.getElementById("boxText1").innerText = "0";
      document.getElementById("boxText1").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText1ID.innerText == "X" &&
      boxText9ID.innerText == "X" &&
      boxText5ID.innerText == ""
    ) {
      document.getElementById("boxText5").innerText = "0";
      document.getElementById("boxText5").style.color = colorOf0;
      actionsAfterComputerTurn();
    }
    //Block Player 1 to win in Cross 2...
    else if (
      boxText3ID.innerText == "X" &&
      boxText5ID.innerText == "X" &&
      boxText7ID.innerText == ""
    ) {
      document.getElementById("boxText7").innerText = "0";
      document.getElementById("boxText7").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText5ID.innerText == "X" &&
      boxText7ID.innerText == "X" &&
      boxText3ID.innerText == ""
    ) {
      document.getElementById("boxText3").innerText = "0";
      document.getElementById("boxText3").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText3ID.innerText == "X" &&
      boxText7ID.innerText == "X" &&
      boxText5ID.innerText == ""
    ) {
      document.getElementById("boxText5").innerText = "0";
      document.getElementById("boxText5").style.color = colorOf0;
      actionsAfterComputerTurn();
    }
  
    /******************************************************************************************** */
    // Game 1_1
    //If player 1 start from 1st cell
    else if (boxText1ID.innerText == "X" && boxText5ID.innerText == "") {
      document.getElementById("boxText5").innerText = "0";
      document.getElementById("boxText5").style.color = colorOf0;
      actionsAfterComputerTurn();
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
      actionsAfterComputerTurn();
    } else if (
      boxText1ID.innerText == "X" &&
      boxText5ID.innerText == "0" &&
      boxText9ID.innerText == "X" &&
      boxText8ID.innerText == ""
    ) {
      document.getElementById("boxText8").innerText = "0";
      document.getElementById("boxText8").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText1ID.innerText == "X" &&
      boxText5ID.innerText == "0" &&
      boxText6ID.innerText == "X" &&
      boxText8ID.innerText == ""
    ) {
      document.getElementById("boxText8").innerText = "0";
      document.getElementById("boxText8").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
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
      actionsAfterComputerTurn();
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
    } else if (
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
    } else if (
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
    else if (boxText2ID.innerText == "X" && boxText5ID.innerText == "") {
      document.getElementById("boxText5").innerText = "0";
      document.getElementById("boxText5").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
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
    } else if (
      boxText2ID.innerText == "X" &&
      boxText5ID.innerText == "0" &&
      boxText4ID.innerText == "X" &&
      boxText3ID.innerText == ""
    ) {
      document.getElementById("boxText3").innerText = "0";
      document.getElementById("boxText3").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText2ID.innerText == "X" &&
      boxText5ID.innerText == "0" &&
      boxText8ID.innerText == "X" &&
      boxText4ID.innerText == ""
    ) {
      document.getElementById("boxText4").innerText = "0";
      document.getElementById("boxText4").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText2ID.innerText == "X" &&
      boxText5ID.innerText == "0" &&
      boxText7ID.innerText == "X" &&
      boxText1ID.innerText == ""
    ) {
      document.getElementById("boxText1").innerText = "0";
      document.getElementById("boxText1").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText2ID.innerText == "X" &&
      boxText5ID.innerText == "0" &&
      boxText9ID.innerText == "X" &&
      boxText3ID.innerText == ""
    ) {
      document.getElementById("boxText3").innerText = "0";
      document.getElementById("boxText3").style.color = colorOf0;
      actionsAfterComputerTurn();
    }
  
    /************************************************************************** */
    //Game 2_3
    //If Player 1 starts 3rd cell
    else if (boxText3ID.innerText == "X" && boxText5ID.innerText == "") {
      document.getElementById("boxText5").innerText = "0";
      document.getElementById("boxText5").style.color = colorOf0;
      actionsAfterComputerTurn();
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
    } else if (
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
    } else if (
      boxText3ID.innerText == "X" &&
      boxText5ID.innerText == "0" &&
      boxText4ID.innerText == "X" &&
      boxText2ID.innerText == ""
    ) {
      document.getElementById("boxText2").innerText = "0";
      document.getElementById("boxText2").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText3ID.innerText == "X" &&
      boxText5ID.innerText == "0" &&
      boxText7ID.innerText == "X" &&
      boxText8ID.innerText == ""
    ) {
      document.getElementById("boxText8").innerText = "0";
      document.getElementById("boxText8").style.color = colorOf0;
      actionsAfterComputerTurn();
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
      actionsAfterComputerTurn();
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
      actionsAfterComputerTurn();
    }
  
    /********************************************************************** */
    //Game 4 cell 4
    //New game.
    else if (boxText4ID.innerText == "X" && boxText5ID.innerText == "") {
      document.getElementById("boxText5").innerText = "0";
      document.getElementById("boxText5").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText4ID.innerText == "X" &&
      boxText5ID.innerText == "0" &&
      boxText8ID.innerText == "X" &&
      boxText9ID.innerText == ""
    ) {
      document.getElementById("boxText9").innerText = "0";
      document.getElementById("boxText9").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText4ID.innerText == "X" &&
      boxText5ID.innerText == "0" &&
      boxText9ID.innerText == "X" &&
      boxText3ID.innerText == ""
    ) {
      document.getElementById("boxText3").innerText = "0";
      document.getElementById("boxText3").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText4ID.innerText == "X" &&
      boxText5ID.innerText == "0" &&
      boxText6ID.innerText == "X" &&
      boxText3ID.innerText == ""
    ) {
      document.getElementById("boxText3").innerText = "0";
      document.getElementById("boxText3").style.color = colorOf0;
      actionsAfterComputerTurn();
    }
  
    /***************************************************** */
    //Game 5
    //New Game
    else if (boxText5ID.innerText == "X" && boxText3ID.innerText == "") {
      document.getElementById("boxText3").innerText = "0";
      document.getElementById("boxText3").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText5ID.innerText == "X" &&
      boxText3ID.innerText == "0" &&
      boxText7ID.innerText == "X" &&
      boxText9ID.innerText == ""
    ) {
      document.getElementById("boxText9").innerText = "0";
      document.getElementById("boxText9").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
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
      actionsAfterComputerTurn();
    } else if (
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
      actionsAfterComputerTurn();
    }
  
    /************************************************************ */
    //Game 6
    //New Game
    else if (boxText6ID.innerText == "X" && boxText5ID.innerText == "") {
      document.getElementById("boxText5").innerText = "0";
      document.getElementById("boxText5").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
      boxText6ID.innerText == "X" &&
      boxText5ID.innerText == "0" &&
      boxText8ID.innerText == "X" &&
      boxText9ID.innerText == ""
    ) {
      document.getElementById("boxText9").innerText = "0";
      document.getElementById("boxText9").style.color = colorOf0;
      actionsAfterComputerTurn();
    } else if (
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
      actionsAfterComputerTurn();
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
      actionsAfterComputerTurn();
    }
  
    /********************************************************************* */
    // Game 7
    // New Game
    else if (boxText7ID.innerText == "X" && boxText5ID.innerText == "") {
      document.getElementById("boxText5").innerText = "0";
      document.getElementById("boxText5").style.color = colorOf0;
      actionsAfterComputerTurn();
    }
  
    //New Game
    else if (boxText8ID.innerText == "X" && boxText5ID.innerText == "") {
      document.getElementById("boxText5").innerText = "0";
      document.getElementById("boxText5").style.color = colorOf0;
      actionsAfterComputerTurn();
    }
  
    //New Game
    else if (boxText9ID.innerText == "X" && boxText5ID.innerText == "") {
      document.getElementById("boxText5").innerText = "0";
      document.getElementById("boxText5").style.color = colorOf0;
      actionsAfterComputerTurn();
    }
  
    computerCount += 2;
  
    console.log("inside computer turn", computerCount);
  }
  
  