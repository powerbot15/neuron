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

            textureInput : this.el.querySelector('#shape'),

            weightInput : this.el.querySelector('#shape')

        }

    }

    listenEvents () {

        this.tpl.shapeInput.addEventListener('change', (e) => {

            this.model.shape = e.target.value;

        });

        this.tpl.textureInput.addEventListener('change', (e) => {

            this.model.texture = e.target.value;

        });

        this.tpl.weightInput.addEventListener('change', (e) => {

            this.model.weight = e.target.value;

        });

    }

    getInputs () {

        return [this.model.shape, this.model.texture, this.model.weight];

    }

}