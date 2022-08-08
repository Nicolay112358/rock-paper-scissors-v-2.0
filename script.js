//  set nicname
const scoreAreaPlayer = document.querySelector('.scoreAreaPlayer');
const intetNicname = document.querySelector('.intetNicname');

let nicName = document.createElement('p');
const setNicNameButton = document.querySelector('#setNicname');
setNicNameButton.addEventListener('click', () => {
    let a = document.querySelector('.intetNicname').value;
    nicName.classList.add('textScore');
    nicName.textContent = a;
    scoreAreaPlayer.replaceChild(nicName, intetNicname);
});

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', () => {
    scoreAreaPlayer.replaceChild(intetNicname, nicName);

});

// paley game
let playerChoose;
let comChoose;

let playerScore = 0;
let computerScore = 0;

const imgRock = document.querySelector('.imgRock');
const imgPaper = document.querySelector('.imgPaper');
const imgCsissors = document.querySelector('.imgCsissors');
const comArea = document.querySelector('.comArea');
const scoreAreaCom = document.querySelector('.scoreAreaCom');
const comWiner = document.querySelector('.comWiner');
const playerWiner = document.querySelector('.playerWiner');
const draw = document.querySelector('.draw');


let comScore = document.querySelector('.comScore');
let comScoreText = document.querySelector('.comScore').textContent;
const paleyScore = document.querySelector('.paleyScore');
let paleyScoreText = document.querySelector('.comScore').textContent;
const img1 = document.querySelector('.img1');
img1.addEventListener('click', () => {
    playerChoose = "rock";
    computerPlay();
    comparingResult();
});

const img2 = document.querySelector('.img2');
img2.addEventListener('click', () => {
    playerChoose = "paper";
    computerPlay();
    comparingResult();
});

const img3 = document.querySelector('.img3');
img3.addEventListener('click', () => {
    playerChoose = "scissors";
    computerPlay();
    comparingResult();
});


function computerPlay() {
    imgRock.remove();
    imgPaper.remove();
    imgCsissors.remove();

    let randomNumber = Math.floor(Math.random() * 100 / 10);

    if (randomNumber < 3) {
        comArea.appendChild(imgRock);
        comChoose = "rock";
        window.setTimeout(() => {
            imgRock.remove();
            returnImg();
        }, 1500);

    } else if (randomNumber >= 3 && randomNumber <= 5) {
        comArea.appendChild(imgPaper);
        comChoose = "paper";
        window.setTimeout(() => {
            imgPaper.remove();
            returnImg();
        }, 1500);

    } else {
        comArea.appendChild(imgCsissors);
        comChoose = "scissors";
        window.setTimeout(() => {
            imgCsissors.remove();
            returnImg();
        }, 1500);

    }
}

function returnImg() {
    comArea.appendChild(imgRock);
    comArea.appendChild(imgPaper);
    comArea.appendChild(imgCsissors);
}

function winnerPlayer() {
    img1.remove();
    img2.remove();
    img3.remove();
}

function winnerCom() {
    imgRock.remove();
    imgPaper.remove();
    imgCsissors.remove();
}

function comparingResult() {

    if ((playerChoose == "rock" && comChoose == "scissors") ||
        (playerChoose == "paper" && comChoose == "rock") ||
        (playerChoose == "scissors" && comChoose == "paper")) {

        document.querySelector('.paleyScore').textContent = ++paleyScoreText;
        const winerP = document.createElement('p');
        winerP.textContent = 'WINER';
        playerWiner.appendChild(winerP);
        window.setTimeout(() => {
            winerP.remove();
            returnImg();
        }, 1500);
        ++playerScore;
        if (playerScore == 5) {
            window.setTimeout(() => winnerPlayer(), 1500);
            window.setTimeout(() => {
                let playerArea = document.querySelector('.playerArea');
                playerArea.appendChild(winerP);
                winnerCom();
                let congText = document.createElement('p');
                congText.textContent = 'Congratulations you won!'
                comArea.appendChild(congText);
            }, 1500);
        }

    } else if ((playerChoose == "scissors" && comChoose == "rock") ||
        (playerChoose == "rock" && comChoose == "paper") ||
        (playerChoose == "paper" && comChoose == "scissors")) {

        document.querySelector('.comScore').textContent = ++comScoreText;
        const winerC = document.createElement('p');
        winerC.textContent = 'WINER';
        comWiner.appendChild(winerC);
        window.setTimeout(() => {
            winerC.remove();
            returnImg();
        }, 1500);
        ++computerScore;
        if (computerScore == 5) {
            window.setTimeout(() => winnerCom(), 1500);
            window.setTimeout(() => {
                comArea.appendChild(winerC);
                winnerPlayer();
                let pSorry = document.createElement('p');
                pSorry.textContent = 'Sorry, try again!'
                let playerArea = document.querySelector('.playerArea');
                playerArea.appendChild(pSorry);
            }, 1500);
        }

    } else {
        const text = document.createElement('p');
        text.textContent = 'Draw, try again';
        draw.appendChild(text);
        window.setTimeout(() => {
            text.remove();
            returnImg();
        }, 1500);
    }

}