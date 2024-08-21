let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () => {
    const options = ["Rock","Paper","Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}; 
const showWinner= (userWin, userChoice , compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = ( `You Win! Your ${userChoice} Beats ${compChoice}`);
        msg.style.backgroundColor = "Green";
    } 
    else{
        compScore ++;
        compScorePara.innerText = compScore;
        msg.innerText = (` You Lost! ${compChoice} Beats Your  ${userChoice}}`);
        msg.style.backgroundColor = "Red";
    }
}
const drawGame =() =>{
    
    msg.innerText = ("Game Was Draw Play Again!")
    msg.style.backgroundColor = "Magenta";
}
const playGame = (userChoice) => {
    console.log("user choice = " , userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="Rock"){
            userWin = compChoice === "Paper" ? false : true;

        }
        else if (userChoice==="Paper"){
            compChoice === "Scissors" ? false : true;
        }
        else{
            compChoice === "Rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        
    });
});