export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    init() {
        this.model.setController(this);
        this.view.startButtonClick(this.onRestart.bind(this));
        this.view.listenAreaClick(this.onSteps.bind(this));
    }

    onSteps(e) {
        this.model.checkProcess(e);
        // this.model.finishGame();
        // this.view.updateHeader(this.model.gameResult);
    }

    onRestart(cells) {
        this.model.startGame(cells);
        this.view.clearCells();
    }

    updateHeader(winner) {
        this.view.updateHeader(winner);
    }
}