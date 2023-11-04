export default class View {
    constructor() {
        this.area = document.querySelector('#area');
        this.cells = document.querySelectorAll('.cell');
        this.header = document.querySelector('#display');
        this.startButton = document.querySelector('#start');
    }


    listenAreaClick(callback) {
        this.area.addEventListener('click', callback);
    }

    // listenAreaClick(callback) {
    //     this.cells.forEach((cell) => {
    //         cell.addEventListener('click', callback);
    //     })
    // }


    startButtonClick(callback) {
        this.startButton.addEventListener('click', callback);
    }



    clearCells() {
        this.cells.forEach(cell => cell.innerText = '');
        this.header.innerText = 'TIC TAC TOE';
    }






}










    // updateGame() {
    //     this.header.innerText = 'TIC TAC TOE';
    //     for (let cell of this.cells) {
    //         cell.innerText = '';
    //     }
    // }
