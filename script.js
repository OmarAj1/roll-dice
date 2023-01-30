let player1current = 0;
let player2current = 0;
let startgame = true;
let scores;
let activePlayer = 0;
let roundScore = 0;
let currentScore;
scores = [0, 0];

const player2Total = document.querySelector('.total2');
const rollBtn = document.getElementById('roll-btn');
const hold = document.getElementById('.hold');


rollBtn.addEventListener("click", () => {

    if (startgame) {
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;

        document.getElementById('dice1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice2').src = 'dice-' + dice2 + '.png';
        currentScore = dice1 + dice2;
        roundScore += currentScore;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
});
let target = prompt('set your target');
document.querySelector('#hold').addEventListener('click', () => {
    if (startgame) {
        scores[activePlayer] += roundScore;
        roundScore = 0;
        if (scores[activePlayer] > target) {
            alert("Player " + (activePlayer + 1) + " wins!");
            startgame = false;
        } else {
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        }
    }
});

// Function to giving the turn to the next player
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}


const dice1 = document.querySelector('#dice1');
const dice2 = document.querySelector('#dice2');
rollBtn.addEventListener('click', () => {
    dice1.classList.add('rolling');
    dice2.classList.add('rolling');

    setTimeout(() => {
        dice1.classList.remove('rolling');
        dice2.classList.remove('rolling');
    }, 500);
});