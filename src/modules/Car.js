import { Vehicule } from "./Vehicule.js";

export class CarClass extends Vehicule {

    constructor(color, placeNumber, brand) {
        super(color, placeNumber);
        this.carBrand = brand
    }

    start() {
        console.log("Starting Car");
    }

    describe() {
        console.log(super.describe() + " " + this.carBrand);
    }
}