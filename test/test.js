
var Random = require("randoms-js");



console.log(Random.nextInt(3,10));
console.log(Random.nextDouble(5.2,10.4));
console.log(Random.nextBoolean());
console.log(Random.nextChar());
console.log(Random.nextDate(1995,2019).toUTCString());
console.log(Random.nextString(5)); //UPPERCASE
console.log(Random.nextString(5,true)); //lowercase
console.log(Random.nextString(5,false,true)); //sTUdLyCApS
console.log(Random.nextIntArray(5,10,10));
console.log(Random.nextDoubleArray(5.7,10.2,10));
console.log(Random.nextCharArray(8));//UPPERCASE
console.log(Random.nextCharArray(8,true));//lowercase
console.log(Random.nextBooleanArray(5));
console.log(Random.nextIntUniqueArray(2,20,18));
console.log(Random.nextDimension(150,200));
console.log(Random.nextPoint(40,100));
console.log(Random.nextColorRgb());
console.log(Random.nextColorRgba());
console.log(Random.inArrayElement(["html","css","js","node"]));
console.log(Random.inStringChar("BarışMeral"));
