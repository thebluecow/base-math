
/*!
 * base-math 1.0.0
 * Copyright (c) 2017-2018 Eric Scott Bline <thebluecow@msn.com>
 * MIT Licensed
 */
'use strict'

/**
 * Module exports.
 */

module.exports = baseMath

function baseMath() {

    /**
     * Convert supplied integer to base
     *
     * @param {number} num
     * @param {number} base
     * @return {string}
     * @private
     */
    var _toBase = function(num, base) {
        // either base or set to base 10
        base = parseInt(base) || 10;
        return (num >>> 0).toString(base);
    }

    /**
     * Convert supplied string to integer
     *
     * @param {string} str
     * @param {number} base
     * @return {integer}
     * @private
     */
    var _toInt = function(str, base) {
        // either base or set to base 10
        base = parseInt(base) || 10;
        return parseInt(str, base);
    }

    /**
     * Convert supplied values to integers for operations
     *
     * @param {string} str1
     * @param {string} str2
     * @param {integer} base
     * @return {object}
     * @private
     */
    var _getIntegers = function(str1, str2, base) {
        // convert to integers
        var numbers = {};
        // either base or set to base 10
        base = parseInt(base) || 10;
        // if base 10, leave alone in case it's a float
        if (base == 10) {
            numbers.one = _returnFloatInt(str1);
            numbers.two = _returnFloatInt(str2);
        } else {
            numbers.one = _toInt('' + str1, base);
            numbers.two = _toInt('' + str2, base);
        }

        numbers.max_safe = _checkMaxSafeInteger(numbers.one, numbers.two);
        numbers.min_safe = _checkMinSafeInteger(numbers.one, numbers.two);
        numbers.max = _checkMaxValue(numbers.one, numbers.two);

        return numbers;
    }

    /**
     * Return supplied number as float as necessary
     *
     * @param {number} num
     * @return {number}
     * @private
     */
    var _returnFloatInt = function(num) {
        if ((num).toString().indexOf('.') != -1) {
            return parseFloat(num);
        }
        return parseInt(num);
    }

    /**
     * Check if the number(s) exceeds the MAX_SAFE_INTEGER
     *
     * @param {number} num
     * @param {number} num
     * @return {boolean}
     * @private
     */
    var _checkMaxSafeInteger = function(num1, num2) {
        if (num1 > Number.MAX_SAFE_INTEGER) {
            return true;
        }

        if (num2 && num2 > Number.MAX_SAFE_INTEGER) {
            return true;
        }

        return false;
    }

    /**
     * Check if the number(s) exceeds the MIN_SAFE_INTEGER
     *
     * @param {number} num
     * @param {number} num
     * @return {boolean}
     * @private
     */
    var _checkMinSafeInteger = function(num1, num2) {
        if (num1 < Number.MIN_SAFE_INTEGER) {
            return true;
        }

        if (num2 && num2 < Number.MIN_SAFE_INTEGER) {
            return true;
        }

        return false;
    }

    /**
     * Check if the number(s) exceeds the MAX_VALUE
     *
     * @param {number} num
     * @param {number} num
     * @return {boolean}
     * @private
     */
    var _checkMaxValue = function(num1, num2) {
        if (isNaN(num1)) {
            return true;
        }

        if (num2 && isNaN(num2)) {
            return true;
        }

        return false;
    }

    /**
     * Helper to call _checkMaxSafeInteger and _checkMinSafeInteger
     *
     * @param {object} numbers
     * @return {object}
     * @private
     */
    var _checkMinMax = function(numbers) {
        numbers.max_safe = _checkMaxSafeInteger(numbers.value);
        numbers.min_safe = _checkMinSafeInteger(numbers.value);
        return numbers;
    }

    /**
     * Perform mathematical operations on supplied values
     *
     * @param {number} num1
     * @param {number} num2
     * @param {integer} base
     * @param {string} oper
     * @return {number}
     * @private
     */
    var _mathTime = function(num1, num2, base, oper) {

        // return values if num1 or num2 is null
        if (num1 == null && num2 == null) {
            return null;
        } else if (num2 == null) {
            return num1;
        }

        var numbers = _getIntegers(num1, num2, base);

        // add check for infinity
        if (isNaN(numbers.one) || isNaN(numbers.two) || numbers.max) {
            return 'Infinity';
        }

        // check for float to fix subtraction and addition of floats
        if (((numbers.one).toString().indexOf('.') != -1) || ((numbers.two).toString().indexOf('.') != -1)) {
            numbers.floating = true;
        }

        switch (oper) {
            case 'add':
                if (numbers.floating) {
                    numbers.value = (numbers.one * 10 + numbers.two * 10) / 10;
                } else {
                    numbers.value = numbers.one + numbers.two;
                }
                numbers = _checkMinMax(numbers);
                break;
            case 'subtract':
                if (numbers.floating) {
                    numbers.value = (numbers.one * 10 - numbers.two * 10) / 10;
                } else {
                    numbers.value = numbers.one - numbers.two;
                }
                numbers = _checkMinMax(numbers);
                break;
            case 'divide':
                numbers.value = numbers.one / numbers.two;
                numbers = _checkMinMax(numbers);
                break;
            case 'multiply':
                numbers.value = numbers.one * numbers.two;
                numbers = _checkMinMax(numbers);
                break;
            default:
                numbers.value = numbers.one + numbers.two;
                numbers = _checkMinMax(numbers);
                break;
        }

        // print message if MAX_SAFE_INTEGER is met
        if (numbers.max_safe) {
            // console.log('one or more values exceeds the MAX_SAFE_INTEGER.', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER');
        }

        // print message if MIN_SAFE_INTEGER is met
        if (numbers.min_safe) {
            // console.log('one or more values falls below the MIN_SAFE_INTEGER.', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER');
        }

        // if it's floating, return float
        if (base == 'undefined' || base == null) {
            return numbers.value;
        }

        // add check for infinity
        if (isNaN(numbers.value) || numbers.value == 'Infinity') {
            return 'Infinity';
        }

        return _toBase(numbers.value, base);
    }

    /**
     * Functions available to user
     *
     * @return {object}
     */
    return {
        add: function(num1, num2, base) {
            return _mathTime(num1, num2, base, 'add');
        },
        subtract: function(num1, num2, base) {
            return _mathTime(num1, num2, base, 'subtract');
        },
        divide: function(num1, num2, base) {
            return _mathTime(num1, num2, base, 'divide');
        },
        multiply: function(num1, num2, base) {
            return _mathTime(num1, num2, base, 'multiply');
        },
        sqrt: function(num, base) {
            var number;
            if ((num).toString().indexOf('.') != -1) {
                number = _returnFloatInt(num);
            } else {
                number = _toInt(num, base);
            }
            var n2 = Math.sqrt(number);
            // if base 10, return float
            if (!base || base == 10) {
                return n2;
            }
            return _toBase(n2, base);
        },
        pow: function(num1, num2, base) {
            var exponent = _returnFloatInt(num2);
            var number;

            if ((num1).toString().indexOf('.') != -1) {
                number = _returnFloatInt(num1);
            } else {
                number = _toInt(num1, base);
            }

            var n2 = Math.pow(number, exponent);
            if (!base || base == 10) {
                return n2;
            }
            return _toBase(n2, base);
        }
    }
}