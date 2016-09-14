class Neuron{

    constructor (transferFuncType) {

        if(transferFuncType == 'hardLimit'){

            this.transferFunction = neuronMixin.hardLimit;

        }

        if(transferFuncType == 'symmetricalHardLimit'){

            this.transferFunction = neuronMixin.symmetricalHardLimit;

        }

        if(transferFuncType == 'linear'){

            this.transferFunction = neuronMixin.linear;

        }

        if(transferFuncType == 'saturatingLinear'){

            this.transferFunction = neuronMixin.saturatingLinear;

        }

        if(transferFuncType == 'symmetricSaturatingLinear'){

            this.transferFunction = neuronMixin.symmetricSaturatingLinear;

        }

        if(transferFuncType == 'logSigmoid'){

            this.transferFunction = neuronMixin.logSigmoid;

        }

        if(transferFuncType == 'hyperbolicTangentSigmoid'){

            this.transferFunction = neuronMixin.hyperbolicTangentSigmoid;

        }

        if(transferFuncType == 'positiveLinear'){

            this.transferFunction = neuronMixin.positiveLinear;

        }

        if(transferFuncType == 'competitive'){

            this.transferFunction = neuronMixin.competitive;

        }

    }

    processInput (input, weight, bias) {

        this.neuronResponse = this.transferFunction(summer(input, weight, bias));

        return this.neuronResponse;

    }

}


let neuronMixin = {

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

function summer (input, weight, bias) {

    if(input.length){

        return neuronMatrixMultiplier(input, weight, bias)

    }
    return input * weight + (bias || 0);

}

function neuronMatrixMultiplier(inputVector, weightVector, bias) {

    let networkInput = 0;

    let stepResult = 0;

    for(let i = 0; i < inputVector.length; i++){

        stepResult = inputVector[i] * weightVector[i] + (bias || 0);

        networkInput += stepResult;

    }

    return networkInput;

}

