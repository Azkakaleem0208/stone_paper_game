let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll('.choice');
const message=document.querySelector('#message');
const user_score=document.querySelector('#user-score');
const computer_score=document.querySelector('#comp-score');  

const draw=(userChoice, computerChoice)=>{
    console.log("It's a draw!");
    message.innerText=`It's a draw! ${userChoice} equals ${computerChoice}`;
}
const showwinner=(userwins, userChoice, computerChoice)=>{
    if(userwins){
        console.log("You win!");
        message.innerText=`You win! ${userChoice} beats ${computerChoice}`;
        userscore++;
    }else{
        console.log("Computer wins!");
        message.innerText=`Computer wins! ${computerChoice} beats ${userChoice}`;
        computerscore++;
    }
    user_score.innerText=userscore;
    computer_score.innerText=computerscore;
}

const generateComputerChoice=()=>{
    const options=['rock','paper','scissors'];
    const randomindex=Math.floor(Math.random()*3);
    return options[randomindex];
}
const playgame=(userChoice)=>{
    console.log("user choice is: " + userChoice);
    const computerChoice=generateComputerChoice();
    console.log("computer choice is: " + computerChoice);

    if(userChoice===computerChoice){
        draw(userChoice, computerChoice);
    }else{ 
        let userwins=true;
        if(userChoice==='rock' ){
            userwins= computerChoice==='paper' ? false : true;
        }else if(userChoice==='paper' ){
            userwins=computerChoice==='scissors' ? false : true;
        }else{
            userwins=computerChoice==='rock' ? false : true;
        }
        showwinner(userwins, userChoice, computerChoice);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute('id');
        playgame(userChoice);
    });
});

