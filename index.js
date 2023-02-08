// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "🎉 Correct Number"

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){

    const guess = Number(document.querySelector('.guess').value); 
    let score = Number(document.querySelector('.score').textContent);
    const highscore = Number(document.querySelector('.highscore').textContent);
    
    console.log(score, typeof score);
    console.log(guess, typeof guess);
    console.log(highscore, typeof highscore);
    

    if(!guess){
        displayMessage('⛔ No Number');
    }
    else if(guess === secretNumber){
        document.body.style.backgroundColor = 'green';
        document.querySelector('.number').textContent = secretNumber;
        displayMessage("🎉 Correct Number");
        score++;
        document.querySelector('.score').textContent = score;
        if(score > highscore){
            document.querySelector('.highscore').textContent = score;
        }

    }
    else if(guess !== secretNumber){
        displayMessage(guess > secretNumber ?  "📈 Too High !" : "📉 Too low !");
        if(score > 1){
            score--;
            document.querySelector('.score').textContent = score;
            }
            else{
                displayMessage("💥 You lost the game");
            }
    }
});

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.body.style.backgroundColor = "rgb(41, 41, 41)";
    document.querySelector('.number').textContent = "?";
    displayMessage("Start guessing...");
    document.querySelector('.guess').value = "";
    document.querySelector('.score').textContent = score;
})