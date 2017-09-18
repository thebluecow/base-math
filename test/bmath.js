
var bmath = require('../app.js')();
var mocha = require('mocha')
var chai = require('chai');
var assert = chai.assert;



describe('perform HEX related operations', function() {
    it('should add two hex numbers', function() {
        var result = bmath.add('3e2a', '1e1d', 16);
        assert.equal(result, '5c47');
    });

    it('should add two hex numbers starting with 0x', function() {
        var result = bmath.add('0x5b', '0x5b', 16)
        assert.equal(result, 'b6');
    });

    it('should subtract two hex numbers', function() {
        var result = bmath.subtract('3e2a', '1e1d', 16);
        assert.equal(result, '200d');
    });

    it('should subtract two hex numbers with a negative', function() {
        var result = bmath.subtract('0x5b', '0x6e', 16);
        // :)
        assert.equal(result, 'ffffffed');
    });

    it('should subtract two hex numbers starting with 0x', function() {
        var result = bmath.add('0x5b', '0x51', 16)
        assert.equal(result, 'ac');
    });

    it('should multiply two hex numbers', function() {
        var result = bmath.multiply('3e2a', '1e1d', 16);
        assert.equal(result, '74ff6c2');
    });

    it('should divide two hex numbers', function() {
        var result = bmath.divide('3e2a', 'f', 16);
        assert.equal(result, '424');
    });

    it('should raise a hex number', function() {
        var result = bmath.pow('3e2a', 3, 16);
        assert.equal(result, '60fac968');
    });

    it('should take the square root of a hex number', function() {
        var result = bmath.sqrt('3e2a', 16);
        assert.equal(result, '7e');
    });

});

describe('perform OCTAL related operations', function() {
    it('should add two octal numbers', function() {
        var result = bmath.add('363', '031', 8);
        assert.equal(result, '414');
    });

    it('should subtract two octal numbers', function() {
        var result = bmath.subtract('363', '031', 8);
        assert.equal(result, '332');
    });

    it('should multiply two octal numbers', function() {
        var result = bmath.multiply('363', '031', 8);
        assert.equal(result, '13673');
    });

    it('should divide two octal numbers', function() {
        var result = bmath.divide('363', '031', 8);
        assert.equal(result, '11');
    });

    it('should raise a octal number', function() {
        var result = bmath.pow('363', 2, 8);
        assert.equal(result, '163251');
    });

    it('should take the square root of a octal number', function() {
        var result = bmath.sqrt('363', 8);
        assert.equal(result, '17');
    });

});

describe('perform BINARY related operations', function() {
    it('should add two binary numbers', function() {
        var result = bmath.add('11001101', '10101110', 2);
        assert.equal(result, '101111011');
    });

    it('should subtract two binary numbers', function() {
        var result = bmath.subtract('11001101', '10101110', 2);
        assert.equal(result, '11111');
    });

    it('should subtract two binary numbers with a negative', function() {
        var result = bmath.subtract('10101110', '11001101', 2);
        assert.equal(result, '11111111111111111111111111100001');
    });

    it('should multiply two binary numbers', function() {
        var result = bmath.multiply('11001101', '10101110', 2);
        assert.equal(result, '1000101101010110');
    });

    it('should divide two binary numbers', function() {
        var result = bmath.divide('11001101', '10101110', 2);
        assert.equal(result, '1');
    });

    it('should raise a binary number', function() {
        var result = bmath.pow('11001101', 3, 2);
        assert.equal(result, '100000110111010011010101');
    });

    it('should take the square root of a binary number', function() {
        var result = bmath.sqrt('11001101', 2);
        assert.equal(result, '1110');
    });

});


describe('perform FLOATING related operations', function() {
    it('should add two floating numbers', function() {
        var result = bmath.add(4.3, 3.2);
        assert.equal(result, 7.5);
    });

    it('should subtract two floating numbers', function() {
        var result = bmath.subtract(4.3, 3.2);
        assert.equal(result, 1.1);
    });

    it('should subtract two floating numbers with a negative', function() {
        var result = bmath.subtract(3.2, 4.3);
        assert.equal(result, -1.1);
    });

    it('should multiply two floating numbers', function() {
        var result = bmath.multiply(4.3, 3.2);
        assert.equal(result, 13.76);
    });

    it('should divide two floating numbers', function() {
        var result = bmath.divide(4.3, 3.2);
        assert.equal(result, 1.3437499999999998);
    });

    it('should raise a floating number', function() {
        var result = bmath.pow(4.3, 2);
        assert.equal(result, 18.49);
    });

    it('should raise a floating number with a floating exponent', function() {
        var result = bmath.pow(4.3, 2.3);
        assert.equal(result, 28.64029241922775);
    });

    it('should take the square root of a floating number', function() {
        var result = bmath.sqrt(4.3);
        assert.equal(result, 2.073644135332772);
    });

});

describe('perform INTEGER related operations', function() {
    it('should add two integer numbers', function() {
        var result = bmath.add(7, 45);
        assert.equal(result, 52);
    });

    it('should subtract two integer numbers', function() {
        var result = bmath.subtract(45, 7);
        assert.equal(result, 38);
    });

    it('should subtract two integer numbers with a negative', function() {
        var result = bmath.subtract(7, 45);
        assert.equal(result, -38);
    });

    it('should multiply two integer numbers', function() {
        var result = bmath.multiply(45, 7);
        assert.equal(result, 315);
    });

    it('should divide two integer numbers', function() {
        var result = bmath.divide(45, 7);
        assert.equal(result, 6.428571428571429);
    });

    it('should raise an integer number', function() {
        var result = bmath.pow(45, 4);
        assert.equal(result, 4100625);
    });

    it('should raise an integer number with a floating exponent', function() {
        var result = bmath.pow(45, 4.3);
        assert.equal(result, 12847357.4984254);
    });

    it('should take the square root of an integer number', function() {
        var result = bmath.sqrt(45);
        assert.equal(result, 6.708203932499369);
    });

});

describe('perform checks for MAX_VALUE', function() {
    it('should return Infinity', function() {
        var result = bmath.add(1.7976931348623157e+308, 1.7976931348623157e+308);
        assert.equal(result, 'Infinity');
    });

});