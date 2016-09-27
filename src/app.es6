import {Perceptron} from './perceptron/demo-perceptron.es6'

import {HammingNetwork} from './hamming-network/demo-hamming-network.es6'

let perceptron = new Perceptron();

perceptron.runNet([1, -1, -1]);

console.log(perceptron.getResult() == -1 ? 'Orange' : 'Apple');

perceptron.runNet([1, 1, -1]);

console.log(perceptron.getResult() == -1 ? 'Orange' : 'Apple');

perceptron.runNet([-1, -1, -1]);

console.log(perceptron.getResult() == -1 ? 'Orange' : 'Apple');


let hammingNet = new HammingNetwork();

