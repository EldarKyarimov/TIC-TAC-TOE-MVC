export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    init() {
        this.view.listenAreaClick(this.onSteps.bind(this));
        this.view.startButton(this.onUpdate.bind(this));

    }


    onSteps(e) {
        this.model.whoMove(e);
    }


    onUpdate() {
        this.model.restart()
    }


}