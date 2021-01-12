
class Card {
    constructor(health, strength, height, kills, evilness) {
        this._health = health;
        this._strength = strength;
        this._height = height;
        this._kills = kills;
        this._evilness = evilness;
    }
}

// The cards
const vijaya = new Card(80, 5, 2.2, 245, 6); 
const aquila = new Card(50, 4, 1.5, 50, 8);
const cenric = new Card(70, 7, 1.9, 40, 6);
const volos = new Card(75, 4, 2.0, 4, 2);
const ekkehard = new Card(67, 4, 3, 120, 8);
const pangu = new Card(50, 6, 2.4, 20, 6);
const conlaoch = new Card(90, 7, 3, 200, 9);
const egill = new Card(50, 3, 1.5, 300, 9);
const aslaug = new Card(89, 9, 3.4, 20, 5);
const kyriakos = new Card(75, 8, 2.7, 510, 8);
const brontes = new Card(45, 4, 7.0, 3, 2);
const linus = new Card(30, 8, 3.3, 250, 9);
const gunnar = new Card(86, 4, 1.9, 670, 8);
const sixtus = new Card(90, 3, 5.5, 300, 7);
const loakeim = new Card(20, 2, 3.0, 800, 5);
const wilhelm = new Card(60, 9, 2.2, 370, 3);
const baal = new Card(40, 5, 2.2, 200, 7);
const aurelius = new Card(85, 8, 4.0, 20, 8);
const saldis = new Card(82, 7, 3.9, 670, 5);
const ragnhildr = new Card(37, 8, 3.2, 448, 6);
const sigifrid = new Card(96, 7, 2.0, 570, 8);
const seraphina = new Card(91, 2, 2.9, 58, 6);
const aigle = new Card(22, 5, 6.6, 150, 7);
const ahenobarbus = new Card(68, 3, 3.0, 660, 9);
const brunhild = new Card(84, 9, 1.1, 30, 5);
const rhode = new Card(88, 8, 6.2, 120, 7);
const paria = new Card(58, 3, 6.2, 720, 8);
const isokrates = new Card(66, 3, 1.2, 22, 4);
const irma = new Card(95, 9, 4.2, 230, 9);
const kynthia = new Card(44, 6, 6.0, 112, 3);
const thoth = new Card(93, 8, 2.5, 225, 4)

let cardsArray = [
vijaya, aquila, cenric, volos, ekkehard, pangu, conlaoch, egill, aslaug, kyriakos, brontes, linus, gunnar, sixtus, loakeim, wilhelm, baal, aurelius, saldis, ragnhildr, sigifrid, seraphina, aigle, ahenobarbus, brunhild, rhode, paria, isokrates, irma, kynthia, thoth]




// random number generator
let randomNumArray = [];

while (randomNumArray.length < 30) {
    let randNum = Math.floor(Math.random() * (30) + 1);
    if (randomNumArray.indexOf(randNum) === -1) randomNumArray.push(randNum);
}
console.log(randomNumArray);


    // Players cards
// const playerCards = () => {

    let yourCards = [];
    for (let i = 0; i < 15; i++) {
        yourCards.push(cardsArray[randomNumArray[i]]);
    }
    // compCards();
    console.log(yourCards);
// }

    // Computers cards
// const compCards = () => {

    let compCards = [];
    for (let j = 15; j < 30; j++) {
        compCards.push(cardsArray[randomNumArray[j]]);
    }
    console.log(compCards);
// }


    let cardIndex = 0;
    document.getElementById("attr-1").innerHTML = "Health: " + yourCards[cardIndex]._health;
    document.getElementById("attr-2").innerHTML = "Strength: " + yourCards[cardIndex]._strength;
    document.getElementById("attr-3").innerHTML = "Height: " + yourCards[cardIndex]._height;
    document.getElementById("attr-4").innerHTML = "Kills: " + yourCards[cardIndex]._kills;
    document.getElementById("attr-5").innerHTML = "Evilness: " + yourCards[cardIndex]._evilness;

    document.getElementById("nextCard").addEventListener("click", function() {
        cardIndex++
        document.getElementById("attr-1").innerHTML = "Health: " + yourCards[cardIndex]._health;
        document.getElementById("attr-2").innerHTML = "Strength: " + yourCards[cardIndex]._strength;
        document.getElementById("attr-3").innerHTML = "Height: " + yourCards[cardIndex]._height;
        document.getElementById("attr-4").innerHTML = "Kills: " + yourCards[cardIndex]._kills;
        document.getElementById("attr-5").innerHTML = "Evilness: " + yourCards[cardIndex]._evilness; 
        console.log(cardIndex)

    })


// }

// displayAttributes();

// On button click, use the shift() method to remove the first element from the array.

let playerScore = 0;
let compScore = 0;
// Health
document.getElementById("attr-1").addEventListener("click", function() {
    if (yourCards[cardIndex]._health > compCards[cardIndex]._health) {
        console.log(yourCards[cardIndex]._health)
        console.log(compCards[cardIndex]._health)
        playerScore++;
        console.log("PLayer wins this round")
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + compScore);
        document.getElementById("yourPoints").innerHTML = "Your Points: " + playerScore
        document.getElementById("playerAttr").innerHTML = "Your Health Attribute - " + yourCards[cardIndex]._health;
        document.getElementById("compAttr").innerHTML = "Computers Health Attribute - " + compCards[cardIndex]._health;
        document.getElementById("whoWon").innerHTML = "You won this round! 1 point for you."
    } else if (compCards[cardIndex]._health > yourCards[cardIndex]._health) {
        console.log(yourCards[cardIndex]._health)
        console.log(compCards[cardIndex]._health)
        compScore++;
        console.log("Computer wins this round")
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + compScore);
        document.getElementById("compPoints").innerHTML = "Computer Points: " + compScore;
        document.getElementById("playerAttr").innerHTML = "Your Health Attribute - " + yourCards[cardIndex]._health;
        document.getElementById("compAttr").innerHTML = "Computers Health Attribute - " + compCards[cardIndex]._health;
        document.getElementById("whoWon").innerHTML = "You Lost this round. 1 point for the computer."
    }
});
// Strength
document.getElementById("attr-2").addEventListener("click", function() {
    if (yourCards[cardIndex]._strength > compCards[cardIndex]._strength) {
        console.log(yourCards[cardIndex]._strength)
        console.log(compCards[cardIndex]._strength)
        playerScore++;
        console.log("PLayer wins this round")
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + compScore);
        document.getElementById("yourPoints").innerHTML = "Your Points: " + playerScore;
        document.getElementById("playerAttr").innerHTML = "Your Strength Attribute - " + yourCards[cardIndex]._strength;
        document.getElementById("compAttr").innerHTML = "Computers Strength Attribute - " + compCards[cardIndex]._strength;
        document.getElementById("whoWon").innerHTML = "You won this round! 1 point for you."
    } else if (compCards[cardIndex]._strength > yourCards[cardIndex]._strength) {
        console.log(yourCards[cardIndex]._strength)
        console.log(compCards[cardIndex]._strength)
        compScore++;
        console.log("Computer wins this round")
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + compScore);
        document.getElementById("compPoints").innerHTML = "Computer Points: " + compScore;
        document.getElementById("playerAttr").innerHTML = "Your Strength Attribute - " + yourCards[cardIndex]._strength;
        document.getElementById("compAttr").innerHTML = "Computers Strength Attribute - " + compCards[cardIndex]._strength;
        document.getElementById("whoWon").innerHTML = "You lost this round. 1 point for the computer."
    }
});
// Height
document.getElementById("attr-3").addEventListener("click", function() {
    if (yourCards[cardIndex]._height > compCards[cardIndex]._height) {
        console.log(yourCards[cardIndex]._height)
        console.log(compCards[cardIndex]._height)
        playerScore++;
        console.log("PLayer wins this round")
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + compScore);
        document.getElementById("yourPoints").innerHTML = "Your Points: " + playerScore;
        document.getElementById("playerAttr").innerHTML = "Your Height Attribute - " + yourCards[cardIndex]._height;
        document.getElementById("compAttr").innerHTML = "Computers Height Attribute - " + compCards[cardIndex]._height;
        document.getElementById("whoWon").innerHTML = "You won this round! 1 point for you."
    } else if (compCards[cardIndex]._height > yourCards[cardIndex]._height) {
        console.log(yourCards[cardIndex]._height)
        console.log(compCards[cardIndex]._height)
        compScore++;
        console.log("Computer wins this round")
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + compScore);
        document.getElementById("compPoints").innerHTML = "Computer Points: " + compScore;
        document.getElementById("compAttr").innerHTML = "Computers Height Attribute - " + compCards[cardIndex]._height;
        document.getElementById("playerAttr").innerHTML = "Your Height Attribute - " + yourCards[cardIndex]._height;
        document.getElementById("whoWon").innerHTML = "You Lost the round 1 point for the computer."
    }
});
// Kills
document.getElementById("attr-4").addEventListener("click", function() {
    if (yourCards[cardIndex]._kills > compCards[cardIndex]._kills) {
        console.log(yourCards[cardIndex]._kills)
        console.log(compCards[cardIndex]._kills)
        playerScore++;
        console.log("PLayer wins this round")
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + compScore);
        document.getElementById("yourPoints").innerHTML = "Your Points: " + playerScore;
        document.getElementById("playerAttr").innerHTML = "Your Kills Attribute - " + yourCards[cardIndex]._kills;
        document.getElementById("compAttr").innerHTML = "Computers Kills Attribute - " + compCards[cardIndex]._kills;
        document.getElementById("whoWon").innerHTML = "You won this round! 1 point for you."
    } else if (compCards[cardIndex]._kills > yourCards[cardIndex]._kills) {
        console.log(yourCards[cardIndex]._kills)
        console.log(compCards[cardIndex]._kills)
        compScore++;
        console.log("Computer wins this round")
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + compScore);
        document.getElementById("compPoints").innerHTML = "Computer Points: " + compScore;
        document.getElementById("playerAttr").innerHTML = "Your Kills Attribute - " + yourCards[cardIndex]._kills;
        document.getElementById("compAttr").innerHTML = "Computers Kills Attribute - " + compCards[cardIndex]._kills;
        document.getElementById("whoWon").innerHTML = "You Lost the round. 1 point for the computer."
    }
});
// Evilness
document.getElementById("attr-5").addEventListener("click", function() {
    if (yourCards[cardIndex]._evilness > compCards[cardIndex]._evilness) {
        console.log(yourCards[cardIndex]._evilness)
        console.log(compCards[cardIndex]._evilness)
        playerScore++;
        console.log("PLayer wins this round")
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + compScore);
        document.getElementById("yourPoints").innerHTML = "Your Points: " + playerScore
        document.getElementById("playerAttr").innerHTML = "Your Evilness Attribute - " + yourCards[cardIndex]._evilness;
        document.getElementById("compAttr").innerHTML = "Computers Evilness Attribute - " + compCards[cardIndex]._evilness;
        document.getElementById("whoWon").innerHTML = "You won this round! 1 point for you."
    } else if (compCards[cardIndex]._evilness > yourCards[cardIndex]._evilness) {
        console.log(yourCards[cardIndex]._evilness)
        console.log(compCards[cardIndex]._evilness)
        compScore++;
        console.log("Computer wins this round")
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + compScore);
        document.getElementById("compPoints").innerHTML = "Computer Points: " + compScore;
        document.getElementById("playerAttr").innerHTML = "Your Evilness Attribute - " + yourCards[cardIndex]._evilness;
        document.getElementById("compAttr").innerHTML = "Computers Evilness Attribute - " + compCards[cardIndex]._evilness;
        document.getElementById("whoWon").innerHTML = "You Lost this round.1 point for the computer."
    }
});

// Styling
document.getElementById("yourPoints").style.color = "green";
document.getElementById("compPoints").style.color = "red";



// Makes the buttons enabled and disbaled
document.getElementById("attr-1").addEventListener("click", function() {
    document.getElementById("attr-1").disabled = true;
    document.getElementById("attr-2").disabled = true;
    document.getElementById("attr-3").disabled = true;
    document.getElementById("attr-4").disabled = true;
    document.getElementById("attr-5").disabled = true;
    document.getElementById("nextCard").addEventListener("click", function() {
        document.getElementById("attr-1").disabled = false
        document.getElementById("attr-2").disabled = false
        document.getElementById("attr-3").disabled = false
        document.getElementById("attr-4").disabled = false
        document.getElementById("attr-5").disabled = false
        document.getElementById("whoWon").innerHTML = "";
        document.getElementById("playerAttr").innerHTML = "";
        document.getElementById("compAttr").innerHTML = "";
    })
});
document.getElementById("attr-2").addEventListener("click", function() {
    document.getElementById("attr-1").disabled = true;
    document.getElementById("attr-2").disabled = true;
    document.getElementById("attr-3").disabled = true;
    document.getElementById("attr-4").disabled = true;
    document.getElementById("attr-5").disabled = true;
    document.getElementById("nextCard").addEventListener("click", function() {
        document.getElementById("attr-1").disabled = false
        document.getElementById("attr-2").disabled = false
        document.getElementById("attr-3").disabled = false
        document.getElementById("attr-4").disabled = false
        document.getElementById("attr-5").disabled = false
        document.getElementById("whoWon").innerHTML = "";
        document.getElementById("playerAttr").innerHTML = "";
        document.getElementById("compAttr").innerHTML = "";
    })
});
document.getElementById("attr-3").addEventListener("click", function() {
    document.getElementById("attr-1").disabled = true;
    document.getElementById("attr-2").disabled = true;
    document.getElementById("attr-3").disabled = true;
    document.getElementById("attr-4").disabled = true;
    document.getElementById("attr-5").disabled = true;
    document.getElementById("nextCard").addEventListener("click", function() {
        document.getElementById("attr-1").disabled = false
        document.getElementById("attr-2").disabled = false
        document.getElementById("attr-3").disabled = false
        document.getElementById("attr-4").disabled = false
        document.getElementById("attr-5").disabled = false
        document.getElementById("whoWon").innerHTML = "";
        document.getElementById("playerAttr").innerHTML = "";
        document.getElementById("compAttr").innerHTML = "";
    })
});
document.getElementById("attr-4").addEventListener("click", function() {
    document.getElementById("attr-1").disabled = true;
    document.getElementById("attr-2").disabled = true;
    document.getElementById("attr-3").disabled = true;
    document.getElementById("attr-4").disabled = true;
    document.getElementById("attr-5").disabled = true;
    document.getElementById("nextCard").addEventListener("click", function() {
        document.getElementById("attr-1").disabled = false
        document.getElementById("attr-2").disabled = false
        document.getElementById("attr-3").disabled = false
        document.getElementById("attr-4").disabled = false
        document.getElementById("attr-5").disabled = false
        document.getElementById("whoWon").innerHTML = "";
        document.getElementById("playerAttr").innerHTML = "";
        document.getElementById("compAttr").innerHTML = "";
    })
});
document.getElementById("attr-5").addEventListener("click", function() {
    document.getElementById("attr-1").disabled = true;
    document.getElementById("attr-2").disabled = true;
    document.getElementById("attr-3").disabled = true;
    document.getElementById("attr-4").disabled = true;
    document.getElementById("attr-5").disabled = true;
    document.getElementById("nextCard").addEventListener("click", function() {
        document.getElementById("attr-1").disabled = false
        document.getElementById("attr-2").disabled = false
        document.getElementById("attr-3").disabled = false
        document.getElementById("attr-4").disabled = false
        document.getElementById("attr-5").disabled = false
        document.getElementById("whoWon").innerHTML = "";
        document.getElementById("playerAttr").innerHTML = "";
        document.getElementById("compAttr").innerHTML = "";
    })
});




