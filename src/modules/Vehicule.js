export class Vehicule {

    constructor(color, number) {
        this.color = color;
        this.placeNumber = number;
    }

    start() {
        console.log("Starting vehicule... ");
    }

    stop() {
        console.log("Stopping vehicule... ");
    }

    describe() {
        return this.color + " " + this.placeNumber;
    }

}