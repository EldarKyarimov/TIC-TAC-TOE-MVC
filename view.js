export default class View {
    constructor() {
        this.area = document.querySelector('#area');
        this.cells = document.querySelectorAll('.cell');
        this.header = document.querySelector('#display');
        this.start = document.querySelector('#start');
    }


    listenAreaClick(callback) {
        this.area.addEventListener('click', callback);
    }

    startButton(callback) {
        this.start.addEventListener('click', callback);
    }

}











    // updateGame() {
    //     this.header.innerText = 'TIC TAC TOE';
    //     for (let cell of this.cells) {
    //         cell.innerText = '';
    //     }
    // }
