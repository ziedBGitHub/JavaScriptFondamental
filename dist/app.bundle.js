/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//\n// DIFFERENCE BETWEEN VAR AND LET\n//\n\nconsole.log(myVar); // undefined\nvar myVar = \"some value\";\n\n/*\nconsole.log(myVar2);\nlet myVar2 = \"some value\"; // Uncaught ReferenceError: myVar2 is not defined\n*/\n\nif (true) {\n    var auxVar = \"some value\";\n}\nconsole.log(auxVar); // some value\n\n/*\nif (true) {\n    let auxVar2 = \"some value\";\n}\nconsole.log(auxVar2); //Uncaught ReferenceError: auxVar2 is not defined\n*/\nlet otherVal = \"some text\";\nif (true) {\n    console.log(otherVal); //some text\n\n}\n\n//\n// REST PARAMETERS\n//\n\nconsole.log(\"***** rest parameters *****\");\n\nfunction displaySomthing(...args) {\n    console.log(args);\n}\n\ndisplaySomthing(\"1\", \"2\", \"3\");\n\nfunction implodeArray (separator, ...args) {\n    return args.join(separator);\n}\n\nconsole.log(implodeArray('|', \"1\", \"2\", \"3\", \"4\"));\nconsole.log(implodeArray(',', \"1\", \"2\", \"3\", \"4\"));\n\n//\n// DESTRUCTURING ARRAY\n//\n\nconsole.log(\"***** destructuring array *****\");\n\nlet myArray = [\"1\", \"2\", \"3\"];\nlet var1, var2, var3, rest;\n[var1, var2, var3] = myArray;\nconsole.log(var1, var2, var3); // 1 2 3\n\n[var1, ...rest] = myArray;\nconsole.log(var1, rest); // 1, [2, 3]\n\nlet car1, car2;\n[, car1, car2] = myArray;\nconsole.log(car1, car2); // 2 3\n\n//\n// DESTRUCTURING OBJECT\n//\n\nconsole.log(\"***** destructuring object *****\");\n\nlet myObject = { name: \"bob\", gender: \"male\" }\nlet { name, gender } = myObject;\nconsole.log(name, gender) // bob male\n\n//\n// SPREAD SYNTAXE\n//\nconsole.log(\"***** Spread syntaxe *****\");\n\nfunction printValues(value1, value2, value3, ...rest) {\n    console.log(value1, value2, value3);\n    if (rest.length) {\n        console.log(rest);\n    }\n}\n\nlet valuesArray = [1, 2, 3];\nprintValues(...valuesArray); // 1 2 3\n\nlet letters = [\"a\", \"b\", \"c\", \"d\"];\nprintValues(...letters); // a b c [\"d\"]\n\n//\n// TYPES\n//\n\nconsole.log(\"***** types *****\");\nconsole.log( typeof(1) ); // Number\nconsole.log( typeof(true) ); // Boolean\nconsole.log( typeof(\"Hello\")); // String\nconsole.log( typeof( function() {} ) ); // Function\nconsole.log( typeof({}) ); // Object\nconsole.log( typeof(null) ); // Object\nconsole.log( typeof(undefined) ); // Undefined\nconsole.log( typeof(NaN) ); // Number\n\n//\n// TYPE CONVERSIONS\n//\n\nconsole.log(\"***** Types Conversions *****\")\nconsole.log(\"// nomber to string conversion: \")\n\nlet myNumber = 55.6;\nmyStringResult = myNumber.toString();\nconsole.log(myStringResult, typeof(myStringResult));\n\nconsole.log(\"// String to number conversions: \");\nlet myString = \"55.99\"; \nlet myInteger = Number.parseInt(myString);\nconsole.log(myNumber, typeof(myNumber)); // 55 Number => Integer conversion\n\nlet year = \"2018\";\nlet NumericYear = +year;\nconsole.log(year, typeof(NumericYear)); // 2018 Number => Integer conversion\n\nlet myFloat = Number.parseFloat(myString); // 55.99 Number => Float conversion\nconsole.log(myFloat, typeof(myFloat));\n\n//\n// BREAK AN CONTINUE\n//\n\nconsole.log(\"***** break and continue *****\");\nconsole.log(\"// executing break example\");\n\nfor (let i = 1; i < 5; i++) {\n    if (i == 3) {\n        break;\n    }\n    console.log(i); // 1 2\n}\n\nconsole.log(\"// exectuting continue example\");\n\nfor (let i = 1; i < 5; i++) {\n    if (i === 3) {\n        continue;\n    }\n    console.log(i);\n}\n\n//\n// EQUALITY OPERATORS\n//\n\nconsole.log('***** equality operators *****');\n\nconsole.log(1 == 1); // true\nconsole.log(1 == true); // true\nconsole.log(1 === true); // false\nconsole.log(1 != '1'); // false\nconsole.log(1 !== '1'); // true\n\n//\n// LOGICAL OPERATORS\n//\n\nif (3 === 4 || 3 == \"3\") {\n    console.log(true);\n} else {\n    console.log(false);\n} // true => \"3\" == 3\n\nlet firstname = null,\n    lastname = \"LEE\";\nconsole.log(firstname || lastname); // LEE\n\nfirstname = \"Bruce\"\nlastname = null; \nconsole.log(firstname || lastname); // Bruce\n\nfirstname = \"Bruce\"\nlastname = \"LEE\"; \nconsole.log(firstname && lastname); // LEE\n\n//\n// FUNCTION SCOPE\n//\n\nconsole.log(\"***** function scope *****\");\n\nfunction startCar()  {\n    let message = \"starting\";\n    let startFunction = function() {\n        console.log(message); // starting\n    }\n    startFunction();\n}\nstartCar();\n\nfunction startEngin() {\n    let message = \"starting\"; \n    let startFunction = function() {\n        let message = \"overiding\";\n    }\n    startFunction();\n    console.log(message); // starting\n}\nstartEngin();\n\n/*\nfunction setMessage(text) {\n    let message = text;\n}\nsetMessage(\"some texte message\");\nconsole.log(message); // Uncaught ReferenceError: message is not defined\n*/\n\n//\n// IIFE's FUNCTIONS\n//\n\nconsole.log(\"***** IIFE *****\");\n(function () {\n    console.log(\"from function\");\n})(); // from function\n\nlet app = (function() {\n    console.log(\"some text from IFII\");\n\n    return true;\n})();\nconsole.log(app); // true\n\n//\n// CLOSURES\n//\n\nconsole.log(\"***** closures *****\");\nlet closureApp = (function () {\n    let carId = 1;\n\n    return { carId: carId };\n})();\nconsole.log(closureApp.carId);\n\n//\n// CALL AND APPLY\n//\n\nconsole.log(\"// call()\");\n\nlet o = {\n    carId : 123,\n    getId: function() {\n        return this.carId;\n    }\n}\nlet other = {\n    carId: 555\n}\nconsole.log(o.getId.call(other)); // 555\n\nconsole.log(\"// apply\");\n\nlet newObject = {\n    carId: 123,\n    getCarIdAsString(prefix) {\n        return prefix + this.carId;\n    }\n}\nlet myNewObj = {\n    carId: 999\n}\nconsole.log(newObject.getCarIdAsString.apply(myNewObj, ['ID: '])) // ID: 999\n\n//\n// BIND\n//\n\nconsole.log(\"***** bind *****\");\nlet carObject = {\n    carId: 777,\n    getCarId: function() {\n        return this.carId;\n    }\n}\nconsole.log(carObject.getCarId()) // 777\nlet myNewCar = {\n    carId: 9090\n}\nlet carIdFn = carObject.getCarId.bind(myNewCar);\nconsole.log(carIdFn());\n\n//\n// ARROW FUNCTION\n//\n\nconsole.log(\"***** arrow function *****\");\nconsole.log(\"traditional function\");\n\nlet fn = function() {\n    let id = 1234;\n    \n    return id \n}\nconsole.log(fn()); // 1234\n\nconsole.log(\"***** arrow function *****\");\n\nlet fn2 = () => {\n    let id = 12345;\n\n    return id;\n}\nconsole.log(fn2()); // 12345\n\nconsole.log(\"***** arrow function with one parameter *****\");\n\nlet fn3 = prefix => prefix + \"0000\";\nconsole.log(fn3(\"prefix\")); // prefix0000\n\nconsole.log(\"***** arrow function with some parameters *****\");\n\nlet fn4 = (prefix, suffix) => prefix + \"0000\" + suffix;\nconsole.log(fn4(\"prefix\", \"suffix\")); // prefix0000suffix\n\n//\n// DEFAULT PARAMETER\n//\n\nconsole.log(\"***** default parameter *****\")\nlet fn5 = (prefix, suffix=\".\") => prefix + \"some text here\" + suffix;\nconsole.log(fn5(\"- \", \" ?\")); // - some text here ?\nconsole.log(fn5(\"* \")); // * some text here.\n\n\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ })

/******/ });