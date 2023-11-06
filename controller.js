export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    init() {
        this.view.startButtonClick(this.onRestart.bind(this));
        this.view.listenAreaClick(this.onSteps.bind(this));

    }

    onSteps(e) {
        this.model.checkProcess(e);
    }

    onRestart(cells) {
        this.model.startGame(cells);
        this.view.clearCells();
    }


}