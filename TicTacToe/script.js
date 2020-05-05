
const ul = document.getElementById('ul');
const um = document.getElementById('um');
const ur = document.getElementById('ur');
const cl = document.getElementById('cl');
const cm = document.getElementById('cm');
const cr = document.getElementById('cr');
const dl = document.getElementById('dl');
const dm = document.getElementById('dm');
const dr = document.getElementById('dr');
const title = document.getElementById('title');
const rbutton = document.getElementById('button');

let input = "";
let moveCounter = 0;
let panel;
let endedFlag = false;

rbutton.addEventListener("click", restart)
ul.addEventListener("click", write);
um.addEventListener("click", write);
ur.addEventListener("click", write);
cl.addEventListener("click", write);
cm.addEventListener("click", write);
cr.addEventListener("click", write);
dl.addEventListener("click", write);
dm.addEventListener("click", write);
dr.addEventListener("click", write);





function write(){
  panel = this;
  if (endedFlag == false){
    if(isEmpty(panel)){
      if (moveCounter % 2 == 0){
        input = "X";
      }
      else {
        input = "O"
      }
      this.textContent = input;
      winChecker();
      drawChecker();
      moveCounter++;
      console.log(moveCounter);
    }
  }
}

function isEmpty(panel){
  if (panel.textContent == ""){
    return true;
  }
  else {
    return false;
  }
}

function drawChecker(){
  if (endedFlag == false){
    if (moveCounter == 8){
      title.textContent = "draw";
    }
  }
}

function winChecker() {
  // X wins
  if (ul.textContent == "X" && cl.textContent == "X" && dl.textContent == "X"){
    gameEnds('X');
  }

  if (um.textContent == "X" && cm.textContent == "X" && dm.textContent == "X"){
    gameEnds('X');
  }

  if (ur.textContent == "X" && cr.textContent == "X" && dr.textContent == "X"){
    gameEnds('X');
  }

  if (ul.textContent == "X" && um.textContent == "X" && ur.textContent == "X"){
    gameEnds('X');
  }

  if (cl.textContent == "X" && cm.textContent == "X" && cr.textContent == "X"){
    gameEnds('X');
  }

  if (dl.textContent == "X" && dm.textContent == "X" && dr.textContent == "X"){
    gameEnds('X');
  }

  if (ul.textContent == "X" && cm.textContent == "X" && dr.textContent == "X"){
    gameEnds('X');
  }

  if (dl.textContent == "X" && cm.textContent == "X" && ur.textContent == "X"){
    gameEnds('X');
  }
  //O wins================================================

    if (ul.textContent == "O" && cl.textContent == "O" && dl.textContent == "O"){
      gameEnds('O');
    }

    if (um.textContent == "O" && cm.textContent == "O" && dm.textContent == "O"){
      gameEnds('O');
    }

    if (ur.textContent == "O" && cr.textContent == "O" && dr.textContent == "O"){
      gameEnds('O');
    }

    if (ul.textContent == "O" && um.textContent == "O" && ur.textContent == "O"){
      gameEnds('O');
    }

    if (cl.textContent == "O" && cm.textContent == "O" && cr.textContent == "O"){
      gameEnds('O');
    }

    if (dl.textContent == "O" && dm.textContent == "O" && dr.textContent == "O"){
      gameEnds('O');
    }

    if (ul.textContent == "O" && cm.textContent == "O" && dr.textContent == "O"){
      gameEnds('O');
    }

    if (dl.textContent == "O" && cm.textContent == "O" && ur.textContent == "O"){
      gameEnds('O');
    }
}

function gameEnds(winner){
  endedFlag = true;

  if (winner == "X"){
    title.textContent = "X Wins"
  }
  if (winner == "O"){
    title.textContent = "O Wins"
  }
}

function restart(){
  title.textContent = "tic tac toe";
  moveCounter = 0;
  endedFlag = false;
  ul.textContent = "";
  um.textContent = "";
  ur.textContent = "";
  cl.textContent = "";
  cm.textContent = "";
  cr.textContent = "";
  dl.textContent = "";
  dm.textContent = "";
  dr.textContent = "";
}
