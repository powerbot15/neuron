
import {Neuron} from 'neuron.es6'

let perceptron = new Neuron('symmetricalHardLimit', [0, 1, 0], 0);

console.log(perceptron.getNeuronOutput([1, -1, -1]) == -1 ? 'Orange' : 'Apple');

console.log(perceptron.getNeuronOutput([1, 1, -1]) == -1 ? 'Orange' : 'Apple');

console.log(perceptron.getNeuronOutput([-1, -1, -1]) == -1 ? 'Orange' : 'Apple');