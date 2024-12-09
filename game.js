var gameID = document.getElementById("Game");

var gameSize = [5, 5];
var gameCharacter = "*";
var gameWalls = "□";
var currentpos;
var boardtemplate = []
var board = [
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
  ["0", "*", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
];
var boardString;
var boardStringLast;
Prep()
DrawGame()
function Prep() {
  for(i = 0; i < gameSize[0]; i++) {
    
  }
  
  //alert(board[2])
}

function DrawGame() {
  gameID.innerHTML = "lol";
  boardStringLast = boardString;
  boardString = "";
  for(i = 0; i < 5; i++) {
    for(j = 0; j < board[i].length; j++) {
    boardString = boardString + board[i][j]
  }
    boardString = boardString + "<br>"
  }
  gameID.innerHTML = boardString;
}
Walls()
function RandomNum(max) {
  return Math.floor(Math.random() * max)
}
function Walls() {
  let holepos = RandomNum(4)
  if(holepos != 0)
    {
      boardString[0][0] = gameWalls
    }
  if(holepos != 1)
    {
      boardString[0][1] = gameWalls
    }
  if(holepos != 2)
    {
      boardString[0][2] = gameWalls
    }
  if(holepos != 3)
    {
      boardString[0][3] = gameWalls
    }
  if(holepos != 4)
    {
      boardString[0][4] = gameWalls
    }
  DrawGame();
}

document.onkeyup = function () {
  var e = e || window.event; // for IE to cover IEs window event-object
switch(e.which) {
  case 87:
    alert("w")
    break;
  case 83:
    alert("s");
    break;
    case 68:
    alert("d");
    break;
  default:
    return false;
    break;
}
}
