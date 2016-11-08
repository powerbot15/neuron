export class PerceptronInputsController{

    constructor () {

        this.el = document.querySelector('[data-perceptron-inputs]');

        this.initModel();

        this.initTpl();

        this.listenEvents();

    }

    initModel () {

        this.model = {

            shape : 0,

            texture : 0,

            weight : 0

        }

    }

    initTpl () {

        this.tpl = {

            shapeInput : this.el.querySelector('#shape'),

            textureInput : this.el.querySelector('#texture'),

            weightInput : this.el.querySelector('#weight')

        }

    }

    listenEvents () {

        this.tpl.shapeInput.addEventListener('change', (e) => {

            this.model.shape = parseInt(e.target.value);

        });

        this.tpl.textureInput.addEventListener('change', (e) => {

            this.model.texture = parseInt(e.target.value);

        });

        this.tpl.weightInput.addEventListener('change', (e) => {

            this.model.weight = parseInt(e.target.value);

        });

    }

    getInputs () {

        return [this.model.shape, this.model.texture, this.model.weight];

    }

}