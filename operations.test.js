const { expect } = require('@jest/globals');
const operations = require('./operations.js');

test('operations.mean should return the average when given a string of comma seperated numbers.', () => {
    // Check that it returns a number
    expect(typeof operations.mean('1,2,3,4')).toBe('number');

    // Check that it returns NaN if invalid input
    expect(operations.mean('1,2,3,f')).toBeNull();

    // Check for accurate calculations
    expect(operations.mean('1,2,3')).toEqual(2);
});

test('operations.median should return the median when given a string of comma seperated numbers.', () => {
    // Check that it returns a number
    expect(typeof operations.median('1,2,3,4')).toBe('number');

    // Check that it returns NaN if invalid input
    expect(operations.median('1,2,3,f')).toBeNull();

    // Check for accurate calculations
    expect(operations.median('1,2,3')).toEqual(2);
    expect(operations.median('1,2,3,4')).toEqual(2.5);
});


test('operations.mode should return the mode when given a string of comma seperated numbers.', () => {
    // Check that it returns a number
    expect(typeof operations.mode('1,2,3,4')).toBe('number');

    // Check that it returns NaN if invalid input
    expect(operations.mode('1,2,3,f')).toBeNull();

    // Check for accurate calculations
    expect(operations.mode('1,2,2,3')).toEqual(2);
});




