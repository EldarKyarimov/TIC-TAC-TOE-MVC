export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    init() {
        this.view.listenAreaClick(this.onSteps.bind(this));


    }


    onSteps(e) {
        this.model.whoMove(e);
    }


    onUpdate() {

    }


}