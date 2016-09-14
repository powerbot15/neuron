define(['neuron.es6'], function (_neuron) {
  'use strict';

  var perceptron = new _neuron.Neuron('symmetricalHardLimit', [0, 1, 0], 0);

  console.log(perceptron.getNeuronOutput([1, -1, -1]) == -1 ? 'Orange' : 'Apple');

  console.log(perceptron.getNeuronOutput([1, 1, -1]) == -1 ? 'Orange' : 'Apple');

  console.log(perceptron.getNeuronOutput([-1, -1, -1]) == -1 ? 'Orange' : 'Apple');
});