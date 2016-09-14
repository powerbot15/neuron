define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

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

    var Neuron = exports.Neuron = function () {
        function Neuron(transferFuncType, weights, bias) {
            _classCallCheck(this, Neuron);

            this.weights = weights;

            this.bias = bias;

            if (transferFuncType == 'hardLimit') {

                this.transferFunction = transferFunctionsMixin.hardLimit;
            }

            if (transferFuncType == 'symmetricalHardLimit') {

                this.transferFunction = transferFunctionsMixin.symmetricalHardLimit;
            }

            if (transferFuncType == 'linear') {

                this.transferFunction = transferFunctionsMixin.linear;
            }

            if (transferFuncType == 'saturatingLinear') {

                this.transferFunction = transferFunctionsMixin.saturatingLinear;
            }

            if (transferFuncType == 'symmetricSaturatingLinear') {

                this.transferFunction = transferFunctionsMixin.symmetricSaturatingLinear;
            }

            if (transferFuncType == 'logSigmoid') {

                this.transferFunction = transferFunctionsMixin.logSigmoid;
            }

            if (transferFuncType == 'hyperbolicTangentSigmoid') {

                this.transferFunction = transferFunctionsMixin.hyperbolicTangentSigmoid;
            }

            if (transferFuncType == 'positiveLinear') {

                this.transferFunction = transferFunctionsMixin.positiveLinear;
            }

            if (transferFuncType == 'competitive') {

                this.transferFunction = transferFunctionsMixin.competitive;
            }
        }

        _createClass(Neuron, [{
            key: 'getNeuronOutput',
            value: function getNeuronOutput(input) {

                this.neuronResponse = this.transferFunction(this.summer(input));

                return this.neuronResponse;
            }
        }, {
            key: 'summer',
            value: function summer(inputVector) {

                if (inputVector.length) {

                    return this.matrixMultiplier(inputVector);
                }

                return inputVector * this.weights + (this.bias || 0);
            }
        }, {
            key: 'matrixMultiplier',
            value: function matrixMultiplier(inputVector) {

                var networkInput = 0;

                var stepResult = 0;

                for (var i = 0; i < inputVector.length; i++) {

                    stepResult = inputVector[i] * this.weights[i] + (this.bias || 0);

                    networkInput += stepResult;
                }

                return networkInput;
            }
        }]);

        return Neuron;
    }();

    var transferFunctionsMixin = {

        hardLimit: function hardLimit(n) {

            return n < 0 ? 0 : 1;
        },

        symmetricalHardLimit: function symmetricalHardLimit(n) {

            return n < 0 ? -1 : 1;
        },

        linear: function linear(n) {

            return n;
        },

        saturatingLinear: function saturatingLinear(n) {

            if (n >= 0 && n < 1) {

                return n;
            }

            if (n > 1) {

                return 1;
            }

            return 0;
        },

        symmetricSaturatingLinear: function symmetricSaturatingLinear(n) {

            if (n < -1) {

                return -1;
            }

            if (n >= -1 && n <= 1) {

                return n;
            }

            if (n > 1) {

                return 1;
            }
        },

        logSigmoid: function logSigmoid(n) {

            return 1 / (1 + Math.exp(-n));
        },

        hyperbolicTangentSigmoid: function hyperbolicTangentSigmoid(n) {

            return (Math.exp(n) - Math.exp(-n)) / (Math.exp(n) + Math.exp(-n));
        },

        positiveLinear: function positiveLinear(n) {

            return n < 0 ? 0 : n;
        },

        competitive: function competitive(n, isMax) {

            return isMax ? 1 : 0;
        }

    };
});