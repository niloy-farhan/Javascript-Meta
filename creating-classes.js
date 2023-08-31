
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

    toggleLights() {
        super.lightsStatus();
        super.lightsStatus();
        console.log('Lights are 100% operational.')
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain);
var mySecondTrain = new Train('blue', true);
console.log(mySecondTrain);

var train4 = new Train('red', false);
train4.toggleLights();
train4.lightsStatus();
train4.getSelf();
train4.getPrototype();

var train5 = new Train('white', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'black', false);

train5.toggleLights();
train5.lightsStatus();
highSpeed1.toggleLights();




train1 = new Train('blue', false);
highSpeedTrain1 = new HighSpeedTrain (200, false, 'green', false);

