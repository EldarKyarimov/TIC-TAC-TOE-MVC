export default class View {
    constructor() {
        this.area = document.querySelector('#area');
        this.cell = document.getElementsByClassName('cell');
    }

    hookArea() {
        this.area.addEventListener('click', function (e) {
            if (e.target.className == 'cell') {
                console.log(e);
            }
        })
    }


}