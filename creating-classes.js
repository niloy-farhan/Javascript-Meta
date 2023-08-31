
class Train {
    constructor (color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }

    toggleLights() {
        this.lightsOn = this.lightsOn;
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

