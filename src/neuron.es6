export class Neuron{

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

}


let neuronMixin = {

    hardLimitTransfer : function () {

    },

    symmetricalHardLimitTransfer : function () {

    },

    linearTransfer : function () {

    },

    logSigmoidTransfer : function () {

    }

};

