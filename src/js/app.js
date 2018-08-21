//
// DIFFERENCE BETWEEN VAR AND LET
//

console.log(myVar); // undefined
var myVar = "some value";

/*
console.log(myVar2);
let myVar2 = "some value"; // Uncaught ReferenceError: myVar2 is not defined
*/

if (true) {
    var auxVar = "some value";
}
console.log(auxVar); // some value

/*
if (true) {
    let auxVar2 = "some value";
}
console.log(auxVar2); //Uncaught ReferenceError: auxVar2 is not defined
*/
let otherVal = "some text";
if (true) {
    console.log(otherVal); //some text

}

//
// REST PARAMETERS
//

console.log("***** rest parameters *****");

function displaySomthing(...args) {
    console.log(args);
}

displaySomthing("1", "2", "3");

function implodeArray (separator, ...args) {
    return args.join(separator);
}

console.log(implodeArray('|', "1", "2", "3", "4"));
console.log(implodeArray(',', "1", "2", "3", "4"));

//
// DESTRUCTURING ARRAY
//

console.log("***** destructuring array *****");

let myArray = ["1", "2", "3"];
let var1, var2, var3, rest;
[var1, var2, var3] = myArray;
console.log(var1, var2, var3); // 1 2 3

[var1, ...rest] = myArray;
console.log(var1, rest); // 1, [2, 3]

let car1, car2;
[, car1, car2] = myArray;
console.log(car1, car2); // 2 3

//
// DESTRUCTURING OBJECT
//

console.log("***** destructuring object *****");

let myObject = { name: "bob", gender: "male" }
let { name, gender } = myObject;
console.log(name, gender) // bob male

//
// SPREAD SYNTAXE
//
console.log("***** Spread syntaxe *****");

function printValues(value1, value2, value3, ...rest) {
    console.log(value1, value2, value3);
    if (rest.length) {
        console.log(rest);
    }
}

let valuesArray = [1, 2, 3];
printValues(...valuesArray); // 1 2 3

let letters = ["a", "b", "c", "d"];
printValues(...letters); // a b c ["d"]

//
// TYPES
//

console.log("***** types *****");
console.log( typeof(1) ); // Number
console.log( typeof(true) ); // Boolean
console.log( typeof("Hello")); // String
console.log( typeof( function() {} ) ); // Function
console.log( typeof({}) ); // Object
console.log( typeof(null) ); // Object
console.log( typeof(undefined) ); // Undefined
console.log( typeof(NaN) ); // Number

//
// TYPE CONVERSIONS
//

console.log("***** Types Conversions *****")
console.log("// nomber to string conversion: ")

let myNumber = 55.6;
let myStringResult = myNumber.toString();
console.log(myStringResult, typeof(myStringResult));

console.log("// String to number conversions: ");
let myString = "55.99"; 
let myInteger = Number.parseInt(myString);
console.log(myNumber, typeof(myNumber)); // 55 Number => Integer conversion

let year = "2018";
let NumericYear = +year;
console.log(year, typeof(NumericYear)); // 2018 Number => Integer conversion

let myFloat = Number.parseFloat(myString); // 55.99 Number => Float conversion
console.log(myFloat, typeof(myFloat));

//
// BREAK AN CONTINUE
//

console.log("***** break and continue *****");
console.log("// executing break example");

for (let i = 1; i < 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i); // 1 2
}

console.log("// exectuting continue example");

for (let i = 1; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

//
// EQUALITY OPERATORS
//

console.log('***** equality operators *****');

console.log(1 == 1); // true
console.log(1 == true); // true
console.log(1 === true); // false
console.log(1 != '1'); // false
console.log(1 !== '1'); // true

//
// LOGICAL OPERATORS
//

if (3 === 4 || 3 == "3") {
    console.log(true);
} else {
    console.log(false);
} // true => "3" == 3

let firstname = null,
    lastname = "LEE";
console.log(firstname || lastname); // LEE

firstname = "Bruce"
lastname = null; 
console.log(firstname || lastname); // Bruce

firstname = "Bruce"
lastname = "LEE"; 
console.log(firstname && lastname); // LEE

//
// FUNCTION SCOPE
//

console.log("***** function scope *****");

function startCar()  {
    let message = "starting";
    let startFunction = function() {
        console.log(message); // starting
    }
    startFunction();
}
startCar();

function startEngin() {
    let message = "starting"; 
    let startFunction = function() {
        let message = "overiding";
    }
    startFunction();
    console.log(message); // starting
}
startEngin();

/*
function setMessage(text) {
    let message = text;
}
setMessage("some texte message");
console.log(message); // Uncaught ReferenceError: message is not defined
*/

//
// IIFE's FUNCTIONS
//

console.log("***** IIFE *****");
(function () {
    console.log("from function");
})(); // from function

let app = (function() {
    console.log("some text from IFII");

    return true;
})();
console.log(app); // true

//
// CLOSURES
//

console.log("***** closures *****");
let closureApp = (function () {
    let carId = 1;

    return { carId: carId };
})();
console.log(closureApp.carId);

//
// CALL AND APPLY
//

console.log("// call()");

let o = {
    carId : 123,
    getId: function() {
        return this.carId;
    }
}
let other = {
    carId: 555
}
console.log(o.getId.call(other)); // 555

console.log("// apply");

let newObject = {
    carId: 123,
    getCarIdAsString(prefix) {
        return prefix + this.carId;
    }
}
let myNewObj = {
    carId: 999
}
console.log(newObject.getCarIdAsString.apply(myNewObj, ['ID: '])) // ID: 999

//
// BIND
//

console.log("***** bind *****");
let carObject = {
    carId: 777,
    getCarId: function() {
        return this.carId;
    }
}
console.log(carObject.getCarId()) // 777
let myNewCar = {
    carId: 9090
}
let carIdFn = carObject.getCarId.bind(myNewCar);
console.log(carIdFn());

//
// ARROW FUNCTION
//

console.log("***** arrow function *****");
console.log("traditional function");

let fn = function() {
    let id = 1234;
    
    return id 
}
console.log(fn()); // 1234

console.log("***** arrow function *****");

let fn2 = () => {
    let id = 12345;

    return id;
}
console.log(fn2()); // 12345

console.log("***** arrow function with one parameter *****");

let fn3 = prefix => prefix + "0000";
console.log(fn3("prefix")); // prefix0000

console.log("***** arrow function with some parameters *****");

let fn4 = (prefix, suffix) => prefix + "0000" + suffix;
console.log(fn4("prefix", "suffix")); // prefix0000suffix

//
// DEFAULT PARAMETER
//

console.log("***** default parameter *****")
let fn5 = (prefix, suffix=".") => prefix + "some text here" + suffix;
console.log(fn5("- ", " ?")); // - some text here ?
console.log(fn5("* ")); // * some text here.

//
// CONSTRUCTOR FUNCTION
//

console.log("***** constructor function *****");

function Car (id) {
    this.carId = id;
    this.start = function () {
        console.log("starting car id : " + this.carId);
    }
}

let carToStart = new Car(4545);
carToStart.start(); // staring car id : 4545

//
// PROTOTYPE
//
Car.prototype.stop = function() {
    console.log("stopping car id : " + this.carId);
}
carToStart.stop(); // stopping car id 4545

String.prototype.sayHello = function() {
    
    return this.toString() + "Hello !";
}
console.log("Some text " .sayHello()); // Some text Hello !

//
// JSON
//

console.log("***** object to json *****");

let objectCar = {
    carId: 123,
    carColor: "red",
}
console.log(JSON.stringify(objectCar)); // "{"carId":123,"carColor":"red"}"

console.log('***** json to object *****');

let someJson = `
{
    "carId": 123,
    "carColor": "red",
    "otherParam": "value"
}`;

console.log(JSON.parse(someJson)); // {carId: 123, carColor: "red", otherParam: "value"}

//
// ARRAY METHODS
//

let carList = [
    { carId: 123, carColor: "red", type: "sedan" }, 
    { carId: 456, carColor: "blue", type: "convertible" }, 
    { carId: 789, carColor: "green", type: "sedan" }, 
    { carId: 999, carColor: "black", type: "small" } 
]

console.log("***** parsing array and displaying each element id *****");

carList.forEach(car => console.log(car.carId));

console.log("***** filtring by type equal to sedan *****");

let sedanArray = carList.filter(car => car.type === "sedan");
console.log(sedanArray);

console.log("***** testing if it exist some empty ids *****");

let isNotEmpty = carList.every(car => car.carId > 0 );
console.log(isNotEmpty);

console.log("***** find first blue car *****");

let blueCar = carList.find(car => car.carColor === "blue");
console.log(blueCar);

//
// Class and modules
//

console.log("***** Class and modules *****");

import { CarClass } from "../modules/Car.js"

let carOne = new CarClass("blue", 5, "Renault");

carOne.start();
carOne.stop();
carOne.describe();
