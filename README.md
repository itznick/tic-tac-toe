# Tic Tac Toe Game

Welcome to the Tic Tac Toe game, a classic two-player game built using HTML, CSS, and JavaScript. This project showcases a fully functional and interactive game with a modern UI design.

## Table of Contents

- [Demo](#demo)
- [Screenshots](#screenshots)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Game Logic](#game-logic)
- [Animations](#animations)
- [Contributions](#contributions)
- [License](#license)
- [Author](#author)

## Demo

You can see the live demo of the game [here](https://playtactoe.netlify.app).

## Screenshots

_Welcome Screen with Start Game Button_
![Welcome Screen](./screenshots/Welcome%20Screen.png)

_Gameplay Screen with Tic Tac Toe Board_
![Gameplay Screen](./screenshots/Gameplay%20Screen.png)

_Result Screen Showing Winner or Draw_
![Result Screen](./screenshots/Result%20Screen.png)

_Mobile Responsive Design Example_
![Mobile Responsive Screen](./screenshots/Mobile%20Responsive%20Screen.png)

## Features

- Interactive UI with smooth animations.
- Real-time score tracking for both players.
- Display of the current player's turn.
- Option to reset the game or start a new game.
- Responsive design using Tailwind CSS.
- Audio feedback for user interactions.

## Technologies Used

- HTML
- CSS (Tailwind CSS)
- JavaScript (ES6)
- GSAP (GreenSock Animation Platform)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/tic-tac-toe.git
    ```
2. Navigate to the project directory:
    ```sh
    cd tic-tac-toe
    ```
3. Open `index.html` in your browser to play the game.

## Usage

1. **Starting the Game:** Click on the "Start Game" button on the welcome screen to begin.
2. **Playing the Game:** Players take turns to click on the boxes. Player X starts first. The game alternates between players X and O.
3. **Winning the Game:** The first player to align three marks horizontally, vertically, or diagonally wins.
4. **Game Draw:** If all boxes are filled without any player winning, the game ends in a draw.
5. **Resetting the Game:** Click on the "Reset Game" button to clear the current game board.
6. **Starting a New Game:** Click on the "New Game" button to reset scores and start a fresh game.

## Game Logic

The game board consists of a 3x3 grid. The game logic checks for winning patterns after each move:

```javascript
const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
```

### Functions

- **handleBoxClick:** Handles the player's move, updates the game board, and checks for a winner or draw.
- **checkWinner:** Checks if the current move resulted in a win.
- **checkDraw:** Checks if the game ended in a draw.
- **resetGame:** Resets the game board for a new round.
- **newGame:** Resets the scores and game board for a completely new game.

## Animations

Animations are handled using the GSAP library:

- **Welcome Screen:** Elements fade in from the top.
- **Game Elements:** Game board and UI elements appear with scaling and fading effects.
- **Result Display:** Winner or draw message pops up with scaling animation.

### Example Animation Code

```javascript
gsap.from(welcomeMessage, {
    opacity: 0,
    y: -100,
    duration: 1,
});

gsap.from(gameBoxes, {
    opacity: 0,
    scale: 0,
    duration: 0.2,
    stagger: 0.1,
});
```

## Contributions

Contributions to improve the Tic Tac Toe game are welcome! If you'd like to contribute, you can follow these steps:

1. Fork the repository.
2. Create a new branch.
   
   ```bash
    git checkout -b feature/improvement
   ```
   
4. Make your changes.
5. Commit your changes.
   
   ```bash
    git commit -am 'Add some feature'
   ```
   
7. Push to the branch.
   
   ```bash
   git push origin feature/improvement
   ```
   
9. Create a new Pull Request.

I appreciate any enhancements or fixes you bring to the project! 🎉

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author
[itznick](https://github.com/itznick/)
