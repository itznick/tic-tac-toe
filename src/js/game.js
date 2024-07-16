const welcomeMessage = document.querySelector('.welcome-message');
const startGameButton = document.querySelector('#start-game-button');
const header = document.querySelector('header');
const logoText = document.querySelector('.logo-text');
const gameBoxes = document.querySelectorAll('.game__box');
const resetButton = document.querySelector('.info__reset-button');
const turnX = document.querySelector('.info__turn-x');
const turnO = document.querySelector('.info__turn-o');
const infoScoreX = document.querySelector('.info__score-x');
const infoScoreO = document.querySelector('.info__score-o');
const result = document.querySelector('.result');
const resultText = document.querySelector('.result__text');
const newGameButton = document.querySelector('.new__game-button');
const footerText = document.querySelector('.footer-text');

let isTurnX = true;
let scoreX = 0;
let scoreO = 0;
const tl = gsap.timeline();
const clickSound = new Audio('../src/assets/click.mp3');
const tapSound = new Audio('../src/assets/tap.mp3');
const popSound = new Audio('../src/assets/pop.mp3');

tl.from(welcomeMessage, {
    opacity: 0,
    y: -100,
    duration: 1,
})

tl.from(startGameButton, {
    opacity: 0,
    y: 30,
    duration: 1,
})

tl.from(footerText, {
    opacity: 0,
    y: 30,
    duration: 0.5
})

const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const displayScores = () => {
    infoScoreX.textContent = `${scoreX}`;
    infoScoreO.textContent = `${scoreO}`;
    changeScoreBackground();
    changeScoreTextColor();
};

const disableRemainingBoxes = () => {
    gameBoxes.forEach((box) => {
        if (box.innerHTML === "") {
            box.style.pointerEvents = "none";
        }
    })
}

const showDrawResult = (message) => {
    result.classList.remove('hidden');
    result.classList.add('flex');
    resultText.innerHTML = message;
    disableRemainingBoxes();
};

const showWinner = (winner) => {
    result.classList.remove('hidden');
    result.classList.add('flex');
    resultText.innerHTML = `Winner is ${winner}`;
    gsap.from(resultText, {
        opacity: 0,
        scale: 0,
        duration: 0.5
    })
    if (winner === 'X') {
        scoreX++;
    } else if (winner === 'O') {
        scoreO++;
    }

    displayScores();
    disableRemainingBoxes();
}

const checkWinner = () => {
    for (const pattern of winningPattern) {
        let pos1val = gameBoxes[pattern[0]].innerText;
        let pos2val = gameBoxes[pattern[1]].innerText;
        let pos3val = gameBoxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                return;
            }
        }
    }
    checkDraw();
}

const checkDraw = () => {
    let isDraw = true;
    gameBoxes.forEach((box) => {
        if (box.innerHTML === "") {
            isDraw = false;
        }
    });
    if (isDraw) {
        showDrawResult("Game is a draw");
    }
};

const changeTurnTextColor = () => {
    if (turnX.parentElement.classList.contains('bg-purple-500')) {
        turnX.classList.add('text-white');
        turnX.classList.remove('text-black');
        turnO.classList.remove('text-white');
        turnO.classList.add('text-black');
    } else if (turnO.parentElement.classList.contains('bg-purple-500')) {
        turnX.classList.remove('text-white');
        turnX.classList.add('text-black');
        turnO.classList.add('text-white');
        turnO.classList.remove('text-black');
    }
}

const changeScoreTextColor = () => {
    if (scoreX > scoreO) {
        infoScoreX.classList.add('text-white');
        infoScoreX.classList.remove('text-black');
        infoScoreO.classList.remove('text-white');
        infoScoreO.classList.add('text-black');
    } else if (scoreO > scoreX) {
        infoScoreX.classList.remove('text-white');
        infoScoreX.classList.add('text-black');
        infoScoreO.classList.add('text-white');
        infoScoreO.classList.remove('text-black');
    }
}

const changeTurnBackground = () => {
    if (isTurnX) {
        turnX.parentElement.classList.remove('bg-purple-500');
        turnX.parentElement.classList.add('bg-purple-400');
        turnO.parentElement.classList.add('bg-purple-500');
        turnO.parentElement.classList.remove('bg-purple-400');

    } else {
        turnX.parentElement.classList.add('bg-purple-500');
        turnX.parentElement.classList.remove('bg-purple-400');
        turnO.parentElement.classList.remove('bg-purple-500');
        turnO.parentElement.classList.add('bg-purple-400');
    }
    changeTurnTextColor();
};

const resetTurnBackground = () => {
    turnX.parentElement.classList.add('bg-purple-500');
    turnX.parentElement.classList.remove('bg-purple-400');
    turnO.parentElement.classList.add('bg-purple-400');
    turnO.parentElement.classList.remove('bg-purple-500');
    changeTurnTextColor();
}

const changeScoreBackground = () => {
    if (scoreX > scoreO) {
        infoScoreX.parentElement.classList.add('bg-purple-500');
        infoScoreX.parentElement.classList.remove('bg-purple-400');
        infoScoreO.parentElement.classList.remove('bg-purple-500');
        infoScoreO.parentElement.classList.add('bg-purple-400');
    } else if (scoreO > scoreX) {
        infoScoreX.parentElement.classList.remove('bg-purple-500');
        infoScoreX.parentElement.classList.add('bg-purple-400');
        infoScoreO.parentElement.classList.add('bg-purple-500');
        infoScoreO.parentElement.classList.remove('bg-purple-400');
    } else {
        infoScoreX.parentElement.classList.add('bg-purple-500');
        infoScoreX.parentElement.classList.remove('bg-purple-400');
        infoScoreO.parentElement.classList.remove('bg-purple-500');
        infoScoreO.parentElement.classList.add('bg-purple-400');
    }
};

const resetScoreBackground = () => {
    infoScoreX.parentElement.classList.add('bg-purple-500');
    infoScoreX.parentElement.classList.remove('bg-purple-400');
    infoScoreX.parentElement.classList.remove('bg-purple-500');
    infoScoreX.parentElement.classList.add('bg-purple-400');
}

const handleBoxClick = (event) => {
    const box = event.target;
    tapSound.play();
    if (isTurnX) {
        box.innerHTML = "X";
        box.classList.add('text-purple-500');
        gsap.from(box, {
            scale: 0.5,
            duration: 0.3,
            ease: "elastic.out"
        });
        changeTurnBackground();
    } else {
        box.innerHTML = "O";
        box.classList.add('text-black');
        gsap.from(box, {
            scale: 0.5,
            duration: 0.3,
            ease: "elastic.out"
        });
        changeTurnBackground();
    }
    box.style.pointerEvents = "none";
    isTurnX = !isTurnX;
    checkWinner();
}

const resetGame = () => {
    clickSound.play();
    gameBoxes.forEach((box) => {
        box.innerHTML = "";
        box.classList.remove('text-purple-500', 'text-black');
        box.style.pointerEvents = "auto";
    })
    isTurnX = true;
    resetTurnBackground();
    result.classList.remove('flex');
    result.classList.add('hidden');
    resultText.innerHTML = "";
    gameBoxAnimation = gsap.from(gameBoxes, {
        opacity: 0,
        scale: 0,
        duration: 0.2,
        stagger: 0.1
    });
}

const newGame = () => {
    clickSound.play();
    result.classList.remove('flex');
    result.classList.add('hidden');
    resultText.innerHTML = "";
    scoreX = 0;
    scoreO = 0;
    displayScores();
    resetGame();
    resetScoreBackground();
}

const startGame = () => {
    clickSound.play();
    document.getElementById('loading-screen').classList.add('hidden');
    document.getElementById('game-container').classList.remove('hidden');
    gsap.from(header, {
        opacity: 0,
        y: -100,
        duration: 1
    });
    gsap.from(logoText, {
        opacity: 0,
        y: -100,
        duration: 1
    });
    gsap.from(newGameButton, {
        opacity: 0,
        y: -100,
        duration: 1
    });
    gsap.from(gameBoxes, {
        opacity: 0,
        scale: 0,
        duration: 0.2,
        stagger: 0.1,
        delay: 1
    });
    gsap.from(resetButton, {
        opacity: 0,
        y: 100
    })
}

gameBoxes.forEach((box) => {
    box.addEventListener("click", handleBoxClick);
})

startGameButton.addEventListener('click', startGame);
resetButton.addEventListener('click', resetGame);
newGameButton.addEventListener('click', newGame);
