import {Neuron} from '../neuron/neuron.es6'

class Perceptron{

    constructor () {

        this.weights = [0, 1, 0];

        this.bias = 0;

        this.transferType = 'symmetricalHardLimit';

        this.initNet();

    }

    initNet () {

        this.neuron = new Neuron(this.transferType, this.weights, this.bias);

    }

    runNet (inputs) {

        this.netResult = this.neuron.getNeuronOutput(inputs);

    }

    getResult () {

        return this.netResult;

    }

}

let perceptron = new Perceptron();

perceptron.runNet([1, -1, -1]);

console.log(perceptron.getResult() == -1 ? 'Orange' : 'Apple');

perceptron.runNet([1, 1, -1]);

console.log(perceptron.getResult() == -1 ? 'Orange' : 'Apple');

perceptron.runNet([-1, -1, -1]);

console.log(perceptron.getResult() == -1 ? 'Orange' : 'Apple');