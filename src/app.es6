import {PerceptronInputsController} from './perceptron/perceptron-layout-helper.es6'

import {Perceptron} from './perceptron/demo-perceptron.es6'

import {HammingNetwork} from './hamming-network/demo-hamming-network.es6'

checkDocumentCompleted(applicationRun);


function checkDocumentCompleted (callback) {
    if(document.readyState == 'complete'){

        callback();

        return;
    }

    document.addEventListener('readystatechange', () => {
        if(document.readyState == 'complete'){

            callback();

        }
    });

}

function applicationRun() {

    let perceptron = new Perceptron();
    
    let perceptronInputsController = new PerceptronInputsController();
    
    perceptron.runNet([1, -1, -1]);

    console.log(perceptron.getResult() == -1 ? 'Orange' : 'Apple');

    perceptron.runNet([1, 1, -1]);

    console.log(perceptron.getResult() == -1 ? 'Orange' : 'Apple');

    perceptron.runNet([-1, -1, -1]);

    console.log(perceptron.getResult() == -1 ? 'Orange' : 'Apple');


    let hammingNet = new HammingNetwork();

}
