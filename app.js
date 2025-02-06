let userScore=0;
let compScore=0;
const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score")


const generatecompChoice=()=>{
    const options=["rock", "paper", "scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}
const drawGame=()=>{
    
    msg.innerText="Game was draw.Play again!";
    msg.style.backgroundColor = " #081b31"; // Instead of msg.Style.backgroundColor

}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"; // Instead of msg.Style.backgroundColor

    }else{
      
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`you Loss! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red"; // Instead of msg.Style.backgroundColor

    }
}
const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    const compChoice=generatecompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice===compChoice){
        drawGame();

    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin , userChoice, compChoice);
    }

}

choices.forEach((choice)=>{
    
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    });
});