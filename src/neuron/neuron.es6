export class Neuron{

    constructor (transferFuncType, weights, bias) {

        this.weights = weights;

        this.bias = bias;

        if(transferFuncType == 'hardLimit'){

            this.transferFunction = transferFunctionsMixin.hardLimit;

        }

        if(transferFuncType == 'symmetricalHardLimit'){

            this.transferFunction = transferFunctionsMixin.symmetricalHardLimit;

        }

        if(transferFuncType == 'linear'){

            this.transferFunction = transferFunctionsMixin.linear;

        }

        if(transferFuncType == 'saturatingLinear'){

            this.transferFunction = transferFunctionsMixin.saturatingLinear;

        }

        if(transferFuncType == 'symmetricSaturatingLinear'){

            this.transferFunction = transferFunctionsMixin.symmetricSaturatingLinear;

        }

        if(transferFuncType == 'logSigmoid'){

            this.transferFunction = transferFunctionsMixin.logSigmoid;

        }

        if(transferFuncType == 'hyperbolicTangentSigmoid'){

            this.transferFunction = transferFunctionsMixin.hyperbolicTangentSigmoid;

        }

        if(transferFuncType == 'positiveLinear'){

            this.transferFunction = transferFunctionsMixin.positiveLinear;

        }

        if(transferFuncType == 'competitive'){

            this.transferFunction = transferFunctionsMixin.competitive;

        }

    }

    getNeuronOutput (input) {

        this.neuronResponse = this.transferFunction(this.summer(input));

        return this.neuronResponse;

    }

    summer (inputVector) {

        if(inputVector.length){

            return this.matrixMultiplier(inputVector)

        }

        return inputVector * this.weights + (this.bias || 0);

    }

    matrixMultiplier (inputVector) {

        let networkInput = 0;

        let stepResult = 0;

        for(let i = 0; i < inputVector.length; i++){

            stepResult = inputVector[i] * this.weights[i] + (this.bias || 0);

            networkInput += stepResult;

        }

        return networkInput;

    }

}


let transferFunctionsMixin = {

    hardLimit : function (n) {

        return n < 0 ? 0 : 1;

    },

    symmetricalHardLimit : function (n) {

        return n < 0 ? -1 : 1;

    },

    linear : function (n) {

        return n;

    },

    saturatingLinear : function (n) {

        if(n >= 0 && n < 1){

            return n;

        }

        if(n > 1) {

            return 1;

        }

        return 0;

    },

    symmetricSaturatingLinear : function (n) {

        if(n < -1){

            return -1;

        }

        if( n >= -1 && n <= 1){

            return n;

        }

        if(n > 1){

            return 1;

        }

    },

    logSigmoid : function (n) {

        return 1 / (1 + Math.exp(-n));

    },

    hyperbolicTangentSigmoid : function (n) {

        return (Math.exp(n) - Math.exp(-n)) / (Math.exp(n) + Math.exp(-n));

    },

    positiveLinear : function (n) {

        return n < 0 ? 0 : n;

    },

    competitive : function (n, isMax) {

        return isMax ? 1 : 0;

    }

};


