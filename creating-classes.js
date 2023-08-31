
class Train {
    constructor (color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }

    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }

    lightsStatus() {
       console.log("Light's On?", this.lightsOn);
    }

    getSelf () {
        console.log(this)
    }

    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}


class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highspeedOn = highSpeedOn;
    }

    toggleHighSpeed() {
        this.highspeedOn = !this.highspeedOn;
        console.log("High speed status: ", this.highspeedOn);
    }
}

var myFirstTrain =

train1 = new Train('blue', false);
highSpeedTrain1 = new HighSpeedTrain (200, false, 'green', false);

