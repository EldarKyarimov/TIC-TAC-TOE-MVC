export default class Model {
    constructor() {
        this.counter = 0;
        this.players = {
            x: 'X',
            o: 'O',
        }
        this.currentPlayer = '';
        this.isGameStarted = false;
        this.allCells = ['', '', '', '', '', '', '', '', ''];
        // this.allCells = [];
        this.winner = '';
        this.display = " plays";

        this.winLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

    }

    startGame(cells) {
        this.isGameStarted = true;
        this.winner = '';
        this.currentPlayer = this.players.x;
        this.allCells = ['', '', '', '', '', '', '', '', ''];
    }

    checkProcess(e) {
        if (!this.isGameStarted) {
            return
        }
        if (e.target.innerText) {
            return
        }
        e.target.innerText = this.currentPlayer;
        const cellIndex = e.target.id;
        this.allCells[cellIndex] = this.currentPlayer;

        console.log(e.target.id);
        console.log(this.allCells);
        // ======================================== исход игры
        if (this.checkGameOver()) {
            return this.finishGame();
        }
        // ========================================
        if (this.currentPlayer === this.players.x) {
            return this.currentPlayer = this.players.o;

            // вывести иформацию  player в display
        } else {
            this.currentPlayer = this.players.x;

            // вывести иформацию player в display
        }
    }

    checkGameOver() {
        for (let line of this.winLines) {
            if (this.checkWinLine(line)) {

                // this.winner = `${this.currentPlayer} Win!`;
                return true;
            }
        }
    }

    checkWinLine(line) {
        const [a, b, c] = line;

        const cellA = this.allCells[a];
        const cellB = this.allCells[b];
        const cellC = this.allCells[c];

        if ([cellA, cellB, cellC].includes('')) {
            return false;
        }
        if (cellA === cellB && cellB === cellC) {
            console.log('don');
        }
    }


    // 

    finishGame() {

    }




}