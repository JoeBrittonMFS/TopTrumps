// class Card {
//     constructor(health, strength, height, kills, evilness) {
//         this.health = health;
//         this.strength = strength;
//         this.height = height;
//         this.kills = kills;
//         this.evilness = evilness;
//     }
// }

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

let cardsArray = [
vijaya, aquila, cenric, volos, ekkehard, pangu, conlaoch, egill, aslaug, kyriakos, brontes, linus, gunnar, sixtus, loakeim, wilhelm, baal, aurelius, saldis, ragnhildr, sigifrid, seraphina, aigle, ahenobarbus, brunhild, rhode, paria, isokrates, irma, kynthia
]




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

// playerCards();


// const displayAttributes = () => {
    // let x, txt = "";

    // for (x in vijaya) {
    //     txt += vijaya[x] + "<br><br>";
    //     console.log(x + ": " + vijaya[x])
    // }
    // document.getElementById("attr-list").innerHTML = txt;

    let cardIndex = 0;
    document.getElementById("attr-1").innerHTML = "Health: " + yourCards[cardIndex]._health;
    document.getElementById("attr-1").innerHTML = "Health: " + yourCards[cardIndex]._health;
    document.getElementById("attr-2").innerHTML = "Strength: " + yourCards[cardIndex]._strength;
    document.getElementById("attr-3").innerHTML = "Height: " + yourCards[cardIndex]._height;
    document.getElementById("attr-4").innerHTML = "Kills: " + yourCards[cardIndex]._kills;
    document.getElementById("attr-5").innerHTML = "Evilness: " + yourCards[cardIndex]._evilness;

    document.getElementById("nextCard").addEventListener("click", function() {
        cardIndex++;
        document.getElementById("attr-1").innerHTML = "Health: " + yourCards[cardIndex]._health;
        document.getElementById("attr-1").innerHTML = "Health: " + yourCards[cardIndex]._health;
        document.getElementById("attr-2").innerHTML = "Strength: " + yourCards[cardIndex]._strength;
        document.getElementById("attr-3").innerHTML = "Height: " + yourCards[cardIndex]._height;
        document.getElementById("attr-4").innerHTML = "Kills: " + yourCards[cardIndex]._kills;
        document.getElementById("attr-5").innerHTML = "Evilness: " + yourCards[cardIndex]._evilness; 
    })

// }

// displayAttributes();

// On button click, use the shift() method to remove the first element from the array.