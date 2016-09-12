class Neuron{

    constructor (transferFuncType) {

        if(transferFuncType == 'hardLimit'){

            this.transferFunction = neuronMixin.hardLimitTransfer;

        }

        if(transferFuncType == 'symmetricalHardLimit'){

            this.transferFunction = neuronMixin.symmetricalHardLimitTransfer;

        }

        if(transferFuncType == 'linear'){

            this.transferFunction = neuronMixin.linearTransfer;

        }

        if(transferFuncType == 'logSigmoid'){

            this.transferFunction = neuronMixin.logSigmoidTransfer;

        }

    }

    processInput (input, weight, bias) {

        this.neuronResponse = this.transferFunction(summer(input, weight, bias));

        return this.neuronResponse;

    }

}


let neuronMixin = {

    hardLimitTransfer : function (n) {

        return n < 0 ? 0 : 1;

    },

    symmetricalHardLimitTransfer : function () {

        return n < 0 ? -1 : 1;

    },

    linearTransfer : (n) => {

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

    },

    logSigmoidTransfer : function (n) {

    }

};

function summer (input, weight, bias) {

    return input * weight + (bias || 0);

}

