[![Build Status](https://travis-ci.org/barismeral/randoms-js.svg?branch=master)](https://travis-ci.org/barismeral/randoms-js)&nbsp;&nbsp;&nbsp;
[![GitHub issues](https://img.shields.io/github/issues/barismeral/randoms-js)](https://github.com/barismeral/randoms-js/issues)
<br>
<br>
![GitHub top language](https://img.shields.io/github/languages/top/barismeral/randoms-js)&nbsp;&nbsp;&nbsp;
![GitHub repo size](https://img.shields.io/github/repo-size/barismeral/randoms-js)&nbsp;&nbsp;&nbsp;
![GitHub](https://img.shields.io/github/license/barismeral/randoms-js)&nbsp;&nbsp;&nbsp;
![npm](https://img.shields.io/npm/v/randoms-js)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![npm bundle size](https://img.shields.io/bundlephobia/min/randoms-js)
![npm](https://img.shields.io/npm/dt/randoms-js)
<br>
<br>
![GitHub followers](https://img.shields.io/github/followers/barismeral?style=social)


# Randoms.js

Javascript random objects generator

## Getting Started

This module provides an easy to use to generate random data

### Prerequisites

nodejs and terminal


### Installing

```
npm install randoms-js
```

### Using

```javascript

let Random = require ('randoms-js')


```

### Examples

```javascript

var n1 = Random.nextInt(3,10);
var n2 = Random.nextDouble(5.2,10.4);
var bool = Random.nextBoolean();
var char = Random.nextChar();
var date = Random.nextDate(1995,2019).toUTCString();
var strUp = Random.nextString(5); //UPPERCASE
var strLow =Random.nextString(5,true); //lowercase
var studly = Random.nextString(5,false,true); //sTUdLyCApS
var intArray = Random.nextIntArray(5,10,10);
var doubleArray = Random.nextDoubleArray(5.7,10.2,10);
var charArrayUp = Random.nextCharArray(8);//UPPERCASE
var charArrayLow = Random.nextCharArray(8,true);//lowercase
var booleanArray = Random.nextBooleanArray(5);
var uniqueArray = Random.nextIntUniqueArray(2,20,18);
var dimension = Random.nextDimension(150,200);
var point = Random.nextPoint(40,100);
var rgb = Random.nextColorRgb();
var rgba = Random.nextColorRgba();
var element = Random.inArrayElement(["html","css","js","node"]);
var char1 = Random.inStringChar("BarışMeral");


```


## Authors

* **Barış Meral** 

See also the list of [contributors](https://github.com/barismeral) who participated in this project.

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details



