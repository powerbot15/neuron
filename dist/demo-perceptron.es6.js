define(['neuron.es6'], function (_neuron) {
    'use strict';

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var Perceptron = function () {
        function Perceptron() {
            _classCallCheck(this, Perceptron);

            this.weights = [0, 1, 0];

            this.bias = 0;

            this.transferType = 'symmetricalHardLimit';

            this.initNet();
        }

        _createClass(Perceptron, [{
            key: 'initNet',
            value: function initNet() {

                this.neuron = new _neuron.Neuron(this.transferType, this.weights, this.bias);
            }
        }, {
            key: 'runNet',
            value: function runNet(inputs) {

                this.netResult = this.neuron.getNeuronOutput(inputs);
            }
        }, {
            key: 'getResult',
            value: function getResult() {

                return this.netResult;
            }
        }]);

        return Perceptron;
    }();

    var perceptron = new Perceptron();

    perceptron.runNet([1, -1, -1]);

    console.log(perceptron.getResult() == -1 ? 'Orange' : 'Apple');

    perceptron.runNet([1, 1, -1]);

    console.log(perceptron.getResult() == -1 ? 'Orange' : 'Apple');

    perceptron.runNet([-1, -1, -1]);

    console.log(perceptron.getResult() == -1 ? 'Orange' : 'Apple');
});