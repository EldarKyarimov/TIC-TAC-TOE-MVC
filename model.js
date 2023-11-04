export default class Model {
    constructor() {
        this.counter = 0;
        this.players = {
            x: 'X',
            o: 'O',
        }
        this.currentPlayer = '';
        this.isGameStarted = false;
        this.cellsInfo = [];
        this.winner = '';

    }



    startGame(cells) {
        this.isGameStarted = true;
        // this.winner.innerText = '';
        this.currentPlayer = this.players.x;
        this.cellsInfo = [];
    }

    checkGameOver() {

    }

    finishGame() {

    }

    checkStep(e) {
        if (!this.isGameStarted) {
            return
        }
        if (e.target.innerText) {
            return
        }
        e.target.innerText = this.currentPlayer;
        const cellIndex = e.target.id;
        this.cellsInfo[cellIndex] = this.currentPlayer;

        console.log(e.target.id);
        console.log(this.cellsInfo);
    }


    // whoMove(e) {
    //     if (e.target.className == "cell") {
    //         if (this.counter % 2 == 0) {
    //             e.target.innerText = 'X';

    //         } else {
    //             e.target.innerText = 'O';

    //         }
    //         this.counter++;
    //         console.log(this.counter);
    //         console.log(e);
    //     }
    // }


    winSteps() {
        this.winIndex = [
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



}