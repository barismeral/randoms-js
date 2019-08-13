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
const nextInt = (min = 0, max = 1) =>{

    Errors.NumberTypeError(min,max);
    Errors.NumberRangeError(min,max);

    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Generate random double number
 * @param {number} min - minimum number type double
 * @param {number} max - maximum number type double
 * @return {number} random number
 * @example nextDouble(2.4,50.7)
 */
const nextDouble = (min = 0, max = 1)=> {

    Errors.NumberTypeError(min,max);
    Errors.NumberRangeError(min,max);

    return Math.random() * (max - min) + min;

}

/**
 * Generate random boolean
 * @return {boolean} 
 * 
 */
const nextBoolean = () => {
    
    return (Math.floor(Math.random() * 2) == 0) ? false : true;
}

/**
 * Generate random alphabetical character
 * @param {boolean} lowerCase - optional
 * @return {string} Charecter
 * @example nextChar() //uppercase
 * @example nextChar(true) //lowercase
 */
const nextChar = (lowerCase = false) => {

    Errors.BooleanTypeError(lowerCase);
    return (lowerCase == true) ? String.fromCharCode(Math.floor(Math.random() * (91 - 65) + 65)).toLowerCase() : String.fromCharCode(Math.floor(Math.random() * (91 - 65) + 65));

}

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
const nextDimension=(width,height,minWidth=0,minHeight=0)=>{

    Errors.NumberTypeError(minWidth,minHeight,width,height);
    Errors.NumberRangeError(minWidth,width);
    Errors.NumberRangeError(minHeight,height);


   return {
    width:nextInt(minWidth,width),
    height:nextInt(minHeight,height)
   } 

}

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
const nextPoint=(x,y,minX=0,minY=0)=>{

    Errors.NumberTypeError(x,y,minX,minY);
    Errors.NumberRangeError(minX,x);
    Errors.NumberRangeError(minY,y);

    return {
        x:nextInt(minX,x),
        y:nextInt(minY,y)
    }

}

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
const nextString = (len = 2, lowerCase = false, studlyCaps = false) => {

    Errors.BooleanTypeError(lowerCase,studlyCaps);
    Errors.NumberTypeError(len);

    if (len < 2)
     return nextChar(lowerCase);

    let str = '';

    if (studlyCaps == false) {

        for (let i = 0; i < len; i++) {

            str += nextChar(lowerCase);
        }
    }
    else {
        for (let i = 0; i < len; i++) {

            str += nextChar(nextBoolean());
        }
    }


    return str;

}

/**
 * Generate random Date object
 * @param {number} minYear - minimum year
 * @param {number} maxYear - maximum year
 * @return {Date} date object
 * @example nextDate(1995,2019)
 */
const nextDate=(minYear,maxYear)=>{

    Errors.NumberTypeError(maxYear);
    Errors.NumberRangeError(minYear,maxYear);

    let date = new Date(nextInt(minYear,maxYear),
                        nextInt(1,13),
                        nextInt(1,32),
                        nextInt(1,13),
                        nextInt(1,60),
                        nextInt(1,120),
                        13);

    return date;


}

/**
 * Generate random RGB color
 * @return {object} color object
 */
const nextColorRgb=()=>{

return {
    r:nextInt(0,256),
    g:nextInt(0,256),
    b:nextInt(0,256)
}

}

/**
 * Generate random RGBA color
 * @return {object} color object
 */
const nextColorRgba=()=>{

    return {
        r:nextInt(0,256),
        g:nextInt(0,256),
        b:nextInt(0,256),
        a:parseFloat((nextDouble(0,1).toFixed(1)))
    }
    
  }


/**
 * Generate random int array
 * @param {number} min - minimum number type int
 * @param {number} max - maximum number type int
 * @param {number} len - array length type int
 * @return {Array} random int array
 * @example nextIntArray(2,50,10)
 * 
 */
const nextIntArray = (min = 0, max = 1, len = 2) => {

    Errors.NumberTypeError(min,max,len);
    Errors.NumberRangeError(min,max);

    if (len < 2)
     return nextInt(min,max);

    let array = [];

    for (let i = 0; i < len; i++) {

        array.push(nextInt(min, max));

    }

    return array;

}

/**
 * Generate random double array
 * @param {number} min - minimum number type double
 * @param {number} max - maximum number type double
 * @param {number} len - array length type double
 * @return {Array} random double array
 * @example nextDoubleArray(2.0,40.5,10)
 */
const nextDoubleArray = (min = 0.0, max=1.0, len = 2) => {

    Errors.NumberTypeError(min,max,len);
    Errors.NumberRangeError(min,max);

    if (len < 2)
     return nextDouble(min,max);

    let array = [];

    for (let i = 0; i < len; i++) {

        array.push(nextDouble(min = 0, max));

    }

    return array;

}

/**
 * Generate random charecter array
 * @param {*} len - array length
 * @param {*} lowerCase - optional false = uppercase | true = lowercase
 * @return {Array} random charecters array
 * @example nextCharArray(5) //uppercase
 * @example nextCharArray(5,true) //lowercase
 */
const nextCharArray = (len = 2, lowerCase = false) => {

    Errors.NumberTypeError(len);
    Errors.BooleanTypeError(lowerCase);

    if (len < 2)
     return nextChar(lowerCase);
    
    let array = [];

    for (let i = 0; i < len; i++) {

        array.push(nextChar(lowerCase));

    }

    return array;

}

/**
 * Generate random boolean array
 * @param {number} len - array length
 * @return {Array} boolean array
 * @example nextBooleanArray(5)
 */
const nextBooleanArray = (len = 2) => {
    
    Errors.NumberTypeError(len);

    if (len < 2)
        return nextBoolean();

    let array = [];

    for (let i = 0; i < len; i++) {

        array.push(nextBoolean());

    }

    return array;

}

/**
 * Generate random unique items array
 * @param {number} min - minimum number type double
 * @param {number} max - maximum number type double
 * @param {number} len - array length type int
 * @example nextIntUniqueArray(2,20,18)
 */
const nextIntUniqueArray = (min = 0, max = 1, len = 2) => {

    Errors.NumberTypeError(min,max,len);
    Errors.NumberRangeError(min,max);

    if (len < 2)
        return nextInt(min, max);
    
    Errors.ArrayBoundError(max,min,len);    
    
    let array = [];

    array.push(nextInt(min, max));

    let rnd;
    len--;

    for (let i = 0; i < len; i++) {

        rnd = nextInt(min, max);

        while (array.includes(rnd)==true) {
        
            rnd = nextInt(min, max);

        }

        array.push(rnd);


    }

    return array;

}

/**
 * Return a random element within an array
 * @param {Array} array array 
 * @return {any} random any element
 * @example inArrayElement(["html","css","javascript"])
 */
const inArrayElement = (array=[]) =>{

    Errors.ArrayTypeError(array);

    if(array.length<2)
    return array[0];

    return array[nextInt(0,array.length)];

}

/**
 * Gives a random character in the text
 * @param {string} str - string
 * @return {string} - charecter
 * @example inStringChar("Barış")
 */
const inStringChar =(str)=>{

    Errors.StringTypeError(str);

    return str.charAt(nextInt(0,str.length));

}

/**
 * Errors objects
 */
const Errors={

    NumberTypeError:(...numbers)=>{
        numbers.forEach(item=>{
            if(typeof(item)!="number")
            throw new TypeError("Parameter is not number");

        });
        
    },
    StringTypeError:(...strings)=>{
        strings.forEach(item=>{
            if(typeof(item)!="string")
            throw new TypeError("Parameter is not string");

        });
    },
    BooleanTypeError:(...booleans)=>{
        booleans.forEach(item => {
            if(typeof(item)!="boolean")
            throw new TypeError("Parameter is not boolean");
        });
    },
    ArrayTypeError:(...arrays)=>{
        arrays.forEach(item => {
            if(!Array.isArray(item))
            throw new TypeError("Parameter is not array");
        });
    },
    NumberRangeError:(min,max)=>{
        if(min>max)
        throw new RangeError("minimum number cannot be greater than maximum number");
        if(min==max)
        throw new RangeError("minimum number cannot be equals maximum number");  
    },
    ArrayBoundError:(max,min,len)=>{
        if(max-min<len)
        throw new Error("The total number of numbers to be generated must be greater than or equal to the length of the array.");     
    }


};

/**
 * 
 * @const {object}
 */
const Random={
  
    nextInt:nextInt,
    nextDouble:nextDouble,
    nextBoolean:nextBoolean,
    nextChar:nextChar,
    nextString:nextString,
    nextDate:nextDate,
    nextIntArray:nextIntArray,
    nextDoubleArray:nextDoubleArray,
    nextCharArray:nextCharArray,
    nextBooleanArray:nextBooleanArray,
    nextIntUniqueArray:nextIntUniqueArray,
    nextDimension:nextDimension,
    nextPoint:nextPoint,
    nextColorRgb:nextColorRgb,
    nextColorRgba:nextColorRgba,
    inArrayElement:inArrayElement,
    inStringChar:inStringChar
}
    

module.exports = Random;