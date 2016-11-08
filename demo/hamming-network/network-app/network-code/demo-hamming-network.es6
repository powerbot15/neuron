
import {FeedForwardLayer} from './feedforward-layer.es6'

import {RecurrentLayer} from './recurrent-layer.es6'

export class HammingNetwork {

    constructor () {

        this.ffl = new FeedForwardLayer();

        this.rl = new RecurrentLayer();

        console.dir(this);

    }

}
