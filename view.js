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

    startButtonClick(callback) {
        this.startButton.addEventListener('click', callback);
    }

    clearCells() {
        this.cells.forEach(cell => cell.innerText = '');
        this.header = 'TIC TAC TOE';
    }


}
