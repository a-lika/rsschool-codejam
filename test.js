const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./sumOfOther');
const make = require('./make');

describe('The sum of other elements', () => {
    it('1', () => {
        const solution = sumOfOther([2, 3, 4, 1]);
        assert.deepEqual(solution, [8, 7, 6, 9]);
    });

    it('2', () => {
        const solution = sumOfOther([5, 15, 1, 2, 7, 11]);
        assert.deepEqual(solution, [36, 26, 40, 39, 34, 30]);
    });

    it('3', () => {
        const solution = sumOfOther([5]);
        assert.deepEqual(solution, [0]);
    });

    it('4', () => {
        const solution = sumOfOther([]);
        assert.deepEqual(solution, []);
    });

});

const sum = (a, b) => a + b;

describe('Make sum elements', () => {
    it('1', () => {
        const solution = make(15)(34, 21, 666)(41)(sum);
        assert.deepEqual(solution, 777);
    });

    it('2', () => {
        const solution = make(3, 24, 4)(34, 20)(41, 10, 17, 5)(sum);
        assert.deepEqual(solution, 158);
    });

    it('3', () => {
        const solution = make(7)(sum);
        assert.deepEqual(solution, 7);
    });

    it('4', () => {
        const solution = make()(sum);
        assert.deepEqual(solution, 0);
    });
});
