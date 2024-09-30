let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const dispChoice=document.querySelector(".dispChoice");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    //Get random no. b/w 0 to 2
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const dispCh=(userCh,compCh)=>{
    if(userCh==="rock")
        dispChoice.innerHTML="<img src='rocks.png' alt=''>";
    else if(userCh=="paper")
        dispChoice.innerHTML="<img src='paper.jpeg' alt=''>";
    else if(userCh=="scissors")
        dispChoice.innerHTML="<img src='scissor.jpg' alt=''>";
    if(compCh==="rock")
        dispChoice.innerHTML=dispChoice.innerHTML+" vs <img src='rocks.png' alt=''>";
    else if(compCh=="paper")
        dispChoice.innerHTML=dispChoice.innerHTML+" vs <img src='paper.jpeg' alt=''>";
    else if(compCh=="scissors")
        dispChoice.innerHTML=dispChoice.innerHTML+" vs <img src='scissor.jpg' alt=''>";
}

//selecting Each Div
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
        msg.innerText="You Win! Your "+userChoice+" beats comp's "+compChoice;
        msg.style.backgroundColor="green";
    } 
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        msg.innerText="You Lose! Comp's "+compChoice+" beats your "+userChoice;
        msg.style.backgroundColor="red";
    } 
}

const darwGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw!";
    msg.style.backgroundColor="#081b31";
}

const playGame=(userChoice)=>{
    console.log("User choice =",userChoice);
    //Generate comp choice
    const compChoice=genCompChoice()
    console.log("Comp choice = ", compChoice);

    let userWin=true;
    if(userChoice===compChoice)
        darwGame();
    else{
        if(userChoice==="rock")
            userWin=compChoice==="paper"?false:true;
        else if(userChoice==="paper")
            userWin=compChoice==="scissors"?false:true;
        else
        userWin=compChoice==="rock"?false:true;
        showWinner(userWin, userChoice, compChoice);
    }
    dispCh(userChoice,compChoice);
}