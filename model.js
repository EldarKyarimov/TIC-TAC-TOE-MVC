export default class Model {
    constructor() {
        this.counter = 0
    }



    whoMove(e) {
        if (e.target.className == "cell") {
            if (this.counter % 2 == 0) {
                e.target.innerText = 'X';
            } else {
                e.target.innerText = 'O';
            }
            this.counter++;
        }


    }


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