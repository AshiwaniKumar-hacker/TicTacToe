let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-game");
let newGamebtn = document.querySelector("#new-game");
let msg = document.querySelector("#mes");
let messageContainer = document.querySelector(".mess-container");


let turno = true;
let count =0;

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]

const resetGame=()=>{
    turno=true;
    enableBtns();
    messageContainer.classList.add("hide");
}



const enableBtns = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", (msg) => {
        if (turno) {
            box.innerText = "O";
            turno = false;
        }
        else {
            box.innerText = "X"
            turno = true;
        }
        box.disabled = true;
        Checkwinner(msg);
        let isWinner = checkWinner();
        count ++;
          if (count === 9 && !isWinner) {
     
    
          gameDraw();
        }
    });
});

const gameDraw = () => {
 

    msg.innerText = `Game was a Draw.`;
   
  
    msgContainer.classList.remove("hide");
   
  
    disableBoxes();
   
  
};

const disableBtns = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner = (winner, msg) => {
    msg.innerText = `Congratulations! Winner is ${winner} `;
    messageContainer.classList.remove("hide");
    disableBtns();

}

const Checkwinner = (msg) => {
    for (let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Congrats! You Won The Match");
                showWinner(pos1, msg);
            }
        }
    }
}

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
