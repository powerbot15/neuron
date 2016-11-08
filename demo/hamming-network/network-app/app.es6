import {HammingNetwork} from './network-code/demo-hamming-network.es6'

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

    let hammingNet = new HammingNetwork();

}
