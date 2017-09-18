# base-math

base-math is a package that performs basic mathematical operations regardless of number base. When provided a respective base (**binary**, **octal**, **hex**) base-math will convert the provided numbers to integers, perform the operation, and return the result in requested base.
 
# Installion
    npm install base-math --save
 
## API
    var bmath = require('base-math')();
 
## usage
base-math takes two required parameters and one optional base parameter. For example, bmath.add(**'101'**, **'1221'**, *8*) would return **1322** in base 8. The package defaults to a base 10 numbering system so that the same operation bmath.add(**'101'**, **'1221'**) without a base type would also result in **1322** with an entirely different meaning. Basically, be aware of what you're converting.
 
At this time, base-math does not support mixed number types. Both numbers should be of the same base.
 
### methods
```javascript
add(x, y, base)
```
Adds two numbers and returns the result. Takes an optional base parameter. Defaults to base 10.
```javascript
var hexNum = bmath.add('3e2a', '1e1d', 16);
var octNum = bmath.add('363', '031', 8);
var binary = bmath.add('11001101', '10101110', 2);
var float  = bmath.add(4.3, 3.2);
var number = bmath.add(45, 21);
```
 
```javascript
subtract(x, y, base)
```
Subtracts two numbers and returns the result. Takes an optional base parameter. Defaults to base 10.
```javascript
var hexNum = bmath.subtract('3e2a', '1e1d', 16);
var octNum = bmath.subtract('363', '031', 8);
var binary = bmath.subtract('11001101', '10101110', 2);
var float  = bmath.subtract(4.3, 3.2);
var number = bmath.subtract(45, 21);
```
 
```javascript
divide(x, y, base)
```
Divides two numbers and returns the result. Takes an optional base parameter. Defaults to base 10.
```javascript
var hexNum = bmath.divide('3e2a', '1e1d', 16);
var octNum = bmath.divide('363', '031', 8);
var binary = bmath.divide('11001101', '10101110', 2);
var float  = bmath.divide(4.3, 3.2);
var number = bmath.divide(45, 21);
```
 
```javascript
multiply(x, y, base)
```
Multiplies two numbers and returns the result. Takes an optional base parameter. Defaults to base 10.
```javascript
var hexNum = bmath.multiply('3e2a', '1e1d', 16);
var octNum = bmath.multiply('363', '031', 8);
var binary = bmath.multiply('11001101', '10101110', 2);
var float  = bmath.multiply(4.3, 3.2);
var number = bmath.multiply(45, 21);
```
```javascript 
sqrt(x, y, base)
```
Returns the square root of a number. If an integer, returns the value as a float. Takes an optional number base parameter. Defaults to base 10.
```javascript
var hexNum = bmath.sqrt('3e2a', 16);
var octNum = bmath.sqrt('363',8);
var binary = bmath.sqrt('11001101', 2);
var float  = bmath.sqrt(4.3);
var number = bmath.sqrt(45);
```

```javascript 
pow(x, y, base)
```
Returns the power of two numbers. X is base number and Y is the exponent. The exponent is a real number in base 10 (for example, 2 or 2.13). Takes an optional number base parameter. Defaults to base 10.
```javascript
var hexNum = bmath.pow('3e2a', 3, 16);
var octNum = bmath.pow('363', 2, 8);
var binary = bmath.pow('11001101', 3, 2);
var float  = bmath.pow(4.3, 2);
var number = bmath.pow(2, 8);
```
 
## Infinity, MAX_SAFE_INTEGER, and MIN_SAFE_INTEGER
 
### MAX_SAFE_INTEGER
base-math performs a check to see if either of the parameters or the product of the parameters exceeds the [MAX_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER). If so, a message is written to the console.log.
 
### MIN_SAFE_INTEGER
base-math performs a check to see if either of the parameters or the product of the parameters is less than the [MIN_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER). If so, a message is written to the console.log.
 
### Infinity
If either of the parameters or the product of the parameters exceeds the [MAX_VALUE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE) base-math returns 'Infinity'
 
## License
 
[MIT](LICENSE)