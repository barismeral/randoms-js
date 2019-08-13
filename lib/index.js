"use strict";

/**
 * Random Generator Module
 * @module randoms.js
 * @author Barış Meral
 * @version 1.0.0
 * 
 */

/**
 * Generate random int number
 * @param {number} min - minimum number type int
 * @param {number} max - maximum number type int
 * @return {number} random number
 * @example nextInt(2,50)
 */
var nextInt = function nextInt() {
    var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;


    Errors.NumberTypeError(min, max);
    Errors.NumberRangeError(min, max);

    return Math.floor(Math.random() * (max - min) + min);
};

/**
 * Generate random double number
 * @param {number} min - minimum number type double
 * @param {number} max - maximum number type double
 * @return {number} random number
 * @example nextDouble(2.4,50.7)
 */
var nextDouble = function nextDouble() {
    var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;


    Errors.NumberTypeError(min, max);
    Errors.NumberRangeError(min, max);

    return Math.random() * (max - min) + min;
};

/**
 * Generate random boolean
 * @return {boolean} 
 * 
 */
var nextBoolean = function nextBoolean() {

    return Math.floor(Math.random() * 2) == 0 ? false : true;
};

/**
 * Generate random alphabetical character
 * @param {boolean} lowerCase - optional
 * @return {string} Charecter
 * @example nextChar() //uppercase
 * @example nextChar(true) //lowercase
 */
var nextChar = function nextChar() {
    var lowerCase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


    Errors.BooleanTypeError(lowerCase);
    return lowerCase == true ? String.fromCharCode(Math.floor(Math.random() * (91 - 65) + 65)).toLowerCase() : String.fromCharCode(Math.floor(Math.random() * (91 - 65) + 65));
};

/**
 * Generate Dimension Object
 * @param {number} width - maximum width value type int
 * @param {number} height - maximum height value type int
 * @param {number} minWidth - optional minimum width value type int
 * @param {number} minHeight - optional minimum height value type int
 * @return {object} - width & height object
 * @example nextDimension(960,640) 
 * @example nextDimension(960,640,0,5) 
 */
var nextDimension = function nextDimension(width, height) {
    var minWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var minHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;


    Errors.NumberTypeError(minWidth, minHeight, width, height);
    Errors.NumberRangeError(minWidth, width);
    Errors.NumberRangeError(minHeight, height);

    return {
        width: nextInt(minWidth, width),
        height: nextInt(minHeight, height)
    };
};

/**
 * Generate Point object
 * @param {number} x - maximum x cordinate type int
 * @param {number} y - maximum y cordinate type int
 * @param {number} minX - optional minimum x cordinate type int
 * @param {number} minY - optional minimum y cordinate type int
 * @return {object} - x & y object
 * @example nextPoint(400,100)
 * @example nextDimension(400,100,0,0) 
 */
var nextPoint = function nextPoint(x, y) {
    var minX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var minY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;


    Errors.NumberTypeError(x, y, minX, minY);
    Errors.NumberRangeError(minX, x);
    Errors.NumberRangeError(minY, y);

    return {
        x: nextInt(minX, x),
        y: nextInt(minY, y)
    };
};

/**
 * Generate random string
 * @param {number} len - string length
 * @param {boolean} lowerCase - true = lowercase charecters | false = uppercase charecters
 * @param {boolean} studlyCaps - true = studlyCaps charecters ABcDEdSAc
 * @returns {string} random string
 * @example nextString(20) //uppercase
 * @example nextString(20,true) //lowercase
 * @example nextString(20,false,true) //studlyCaps
 */
var nextString = function nextString() {
    var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
    var lowerCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var studlyCaps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


    Errors.BooleanTypeError(lowerCase, studlyCaps);
    Errors.NumberTypeError(len);

    if (len < 2) return nextChar(lowerCase);

    var str = '';

    if (studlyCaps == false) {

        for (var i = 0; i < len; i++) {

            str += nextChar(lowerCase);
        }
    } else {
        for (var _i = 0; _i < len; _i++) {

            str += nextChar(nextBoolean());
        }
    }

    return str;
};

/**
 * Generate random Date object
 * @param {number} minYear - minimum year
 * @param {number} maxYear - maximum year
 * @return {Date} date object
 * @example nextDate(1995,2019)
 */
var nextDate = function nextDate(minYear, maxYear) {

    Errors.NumberTypeError(maxYear);
    Errors.NumberRangeError(minYear, maxYear);

    var date = new Date(nextInt(minYear, maxYear), nextInt(1, 13), nextInt(1, 32), nextInt(1, 13), nextInt(1, 60), nextInt(1, 120), 13);

    return date;
};

/**
 * Generate random RGB color
 * @return {object} color object
 */
var nextColorRgb = function nextColorRgb() {

    return {
        r: nextInt(0, 256),
        g: nextInt(0, 256),
        b: nextInt(0, 256)
    };
};

/**
 * Generate random RGBA color
 * @return {object} color object
 */
var nextColorRgba = function nextColorRgba() {

    return {
        r: nextInt(0, 256),
        g: nextInt(0, 256),
        b: nextInt(0, 256),
        a: parseFloat(nextDouble(0, 1).toFixed(1))
    };
};

/**
 * Generate random int array
 * @param {number} min - minimum number type int
 * @param {number} max - maximum number type int
 * @param {number} len - array length type int
 * @return {Array} random int array
 * @example nextIntArray(2,50,10)
 * 
 */
var nextIntArray = function nextIntArray() {
    var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var len = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;


    Errors.NumberTypeError(min, max, len);
    Errors.NumberRangeError(min, max);

    if (len < 2) return nextInt(min, max);

    var array = [];

    for (var i = 0; i < len; i++) {

        array.push(nextInt(min, max));
    }

    return array;
};

/**
 * Generate random double array
 * @param {number} min - minimum number type double
 * @param {number} max - maximum number type double
 * @param {number} len - array length type double
 * @return {Array} random double array
 * @example nextDoubleArray(2.0,40.5,10)
 */
var nextDoubleArray = function nextDoubleArray() {
    var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.0;
    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;
    var len = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;


    Errors.NumberTypeError(min, max, len);
    Errors.NumberRangeError(min, max);

    if (len < 2) return nextDouble(min, max);

    var array = [];

    for (var i = 0; i < len; i++) {

        array.push(nextDouble(min = 0, max));
    }

    return array;
};

/**
 * Generate random charecter array
 * @param {*} len - array length
 * @param {*} lowerCase - optional false = uppercase | true = lowercase
 * @return {Array} random charecters array
 * @example nextCharArray(5) //uppercase
 * @example nextCharArray(5,true) //lowercase
 */
var nextCharArray = function nextCharArray() {
    var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
    var lowerCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


    Errors.NumberTypeError(len);
    Errors.BooleanTypeError(lowerCase);

    if (len < 2) return nextChar(lowerCase);

    var array = [];

    for (var i = 0; i < len; i++) {

        array.push(nextChar(lowerCase));
    }

    return array;
};

/**
 * Generate random boolean array
 * @param {number} len - array length
 * @return {Array} boolean array
 * @example nextBooleanArray(5)
 */
var nextBooleanArray = function nextBooleanArray() {
    var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;


    Errors.NumberTypeError(len);

    if (len < 2) return nextBoolean();

    var array = [];

    for (var i = 0; i < len; i++) {

        array.push(nextBoolean());
    }

    return array;
};

/**
 * Generate random unique items array
 * @param {number} min - minimum number type double
 * @param {number} max - maximum number type double
 * @param {number} len - array length type int
 * @example nextIntUniqueArray(2,20,18)
 */
var nextIntUniqueArray = function nextIntUniqueArray() {
    var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var len = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;


    Errors.NumberTypeError(min, max, len);
    Errors.NumberRangeError(min, max);

    if (len < 2) return nextInt(min, max);

    Errors.ArrayBoundError(max, min, len);

    var array = [];

    array.push(nextInt(min, max));

    var rnd = void 0;
    len--;

    for (var i = 0; i < len; i++) {

        rnd = nextInt(min, max);

        while (array.includes(rnd) == true) {

            rnd = nextInt(min, max);
        }

        array.push(rnd);
    }

    return array;
};

/**
 * Return a random element within an array
 * @param {Array} array array 
 * @return {any} random any element
 * @example inArrayElement(["html","css","javascript"])
 */
var inArrayElement = function inArrayElement() {
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];


    Errors.ArrayTypeError(array);

    if (array.length < 2) return array[0];

    return array[nextInt(0, array.length)];
};

/**
 * Gives a random character in the text
 * @param {string} str - string
 * @return {string} - charecter
 * @example inStringChar("Barış")
 */
var inStringChar = function inStringChar(str) {

    Errors.StringTypeError(str);

    return str.charAt(nextInt(0, str.length));
};

/**
 * Errors objects
 */
var Errors = {

    NumberTypeError: function NumberTypeError() {
        for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
            numbers[_key] = arguments[_key];
        }

        numbers.forEach(function (item) {
            if (typeof item != "number") throw new TypeError("Parameter is not number");
        });
    },
    StringTypeError: function StringTypeError() {
        for (var _len2 = arguments.length, strings = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            strings[_key2] = arguments[_key2];
        }

        strings.forEach(function (item) {
            if (typeof item != "string") throw new TypeError("Parameter is not string");
        });
    },
    BooleanTypeError: function BooleanTypeError() {
        for (var _len3 = arguments.length, booleans = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            booleans[_key3] = arguments[_key3];
        }

        booleans.forEach(function (item) {
            if (typeof item != "boolean") throw new TypeError("Parameter is not boolean");
        });
    },
    ArrayTypeError: function ArrayTypeError() {
        for (var _len4 = arguments.length, arrays = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            arrays[_key4] = arguments[_key4];
        }

        arrays.forEach(function (item) {
            if (!Array.isArray(item)) throw new TypeError("Parameter is not array");
        });
    },
    NumberRangeError: function NumberRangeError(min, max) {
        if (min > max) throw new RangeError("minimum number cannot be greater than maximum number");
        if (min == max) throw new RangeError("minimum number cannot be equals maximum number");
    },
    ArrayBoundError: function ArrayBoundError(max, min, len) {
        if (max - min < len) throw new Error("The total number of numbers to be generated must be greater than or equal to the length of the array.");
    }

};

/**
 * 
 * @const {object}
 */
var Random = {

    nextInt: nextInt,
    nextDouble: nextDouble,
    nextBoolean: nextBoolean,
    nextChar: nextChar,
    nextString: nextString,
    nextDate: nextDate,
    nextIntArray: nextIntArray,
    nextDoubleArray: nextDoubleArray,
    nextCharArray: nextCharArray,
    nextBooleanArray: nextBooleanArray,
    nextIntUniqueArray: nextIntUniqueArray,
    nextDimension: nextDimension,
    nextPoint: nextPoint,
    nextColorRgb: nextColorRgb,
    nextColorRgba: nextColorRgba,
    inArrayElement: inArrayElement,
    inStringChar: inStringChar
};

module.exports = Random;