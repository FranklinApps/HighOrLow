
const deck = [];
const ranks = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
const suits = ["Clubs", "Spades", "Hearts", "Diamonds"];
guessTokens = 5;
suitToken = 0;
streak=0;


function createDeck() {
    for ( let i = 0; i < suits.length; i++){
        for (let x = 0; x < ranks.length; x++){
            let card = {
                Rank : ranks[x],
                Suit : suits[i]
            };
            deck.push(card)
        }
    }
}

function shuffleDeck(){
    for (let i = 0; i < deck.length; i++){
        let x = Math.floor(Math.random() * i);
        let temp = deck[i];
        deck[i] = deck[x];
        deck[x] = temp;
    }
}

function drawCard(){
    gameCard = deck[0];
    return gameCard 
}

function suitGuess(id){
    console.log(id)
    if (guessTokens < 1){
        gameCard = null;
        document.getElementById("head").innerText = "Game Over"
        if(streak > 0){
            document.getElementById("startGame").innerText = "Continue?"
        }
    }
    if (gameCard.Suit === id){
        console.log("yay")
        document.getElementById("head").innerText = "Please Guess the Value"
        suitToken += 1;
        console.log("suit Token after guess: " + suitToken)
    } else if (gameCard.Suit != id){
        document.getElementById("head").innerText = "Wrong Suit";
        guessTokens += -1;
        document.getElementById("tokens").innerText = guessTokens;
    } 
}

function rankGuess(id){
    
    if (guessTokens < 1){
        gameCard = null;
        document.getElementById("head").innerText = "Game Over";
        document.getElementById("streak").innerText = " ";
        document.getElementById("startGame").innerText ="Play Again?";
        document.getElementById("tokens").innerText="0";
    }
    console.log(id)
    if (suitToken < 1){
        //pass
    } else if (suitToken > 0){
    if (gameCard.Rank >= 10){
        //pass
    } else if (gameCard.Rank == "J" || "Q" || "K" || "A"){
        gameCard.Rank[9] = 11,
        gameCard.Rank[10] = 12,
        gameCard.Rank[11] = 13,
        gameCard.Rank[12] = 14
    }

    if (gameCard.Rank == id){
        document.getElementById("head").innerText = "Winner!";
        if(gameCard.Rank == 11){
            gameCard.Rank = "Jack"
        }
        if(gameCard.Rank == 12){
            gameCard.Rank = "Queen"
        }
        if(gameCard.Rank == 13){
            gameCard.Rank = "King"
        }
        if(gameCard.Rank == 11){
            gameCard.Rank = "Ace"
        }
        console.log(gameCard)

        document.getElementById("card").innerText = "Your card was: The " + gameCard.Rank +" of " + gameCard.Suit;
        streak += 1;
        document.getElementById("streak").innerText = "Streak: " + streak
        if(streak > 0){
            document.getElementById("startGame").innerText = "Continue?"
        }
        suitToken = 0;
        console.log("Winner")
    } else if (gameCard.Rank > id){
        document.getElementById("head").innerText = "Too Low"
        guessTokens += -1;
        document.getElementById("tokens").innerText = guessTokens;
        if(streak > 0){
            document.getElementById("startGame").innerText = "Continue?"
        }
    } else if (gameCard.Rank < id){
        document.getElementById("head").innerText = "Too High"
        guessTokens += -1;
        document.getElementById("tokens").innerText = guessTokens;
        if(streak > 0){
            document.getElementById("startGame").innerText = "Continue?"
        }
    }
}}

function startGame(){
initGame();
initGame()
}

function initGame(){
    if (suitToken != 0){
        suitToken = 0
    }
    console.log("suitToken: "+ suitToken)
    guessTokens=5;
    createDeck();
    shuffleDeck();
    drawCard();
    console.log(gameCard);    
    document.getElementById("tokens").innerText = guessTokens;
    document.getElementById("head").innerText = "Please Guess The Suit";
    document.getElementById("h2").innerText = " ";
    document.getElementById("card").innerText = " ";
    document.getElementById("startGame").innerText = "Start Game";
}