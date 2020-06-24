"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitManipulator = void 0;
/**
 * Stores a 31-bit positive integer with the possibility to read and set every single bit value.
 * Boolean values can be stored in bits from 1 to 31 (inclusive).
 */
class BitManipulator {
    /**
     * @param {number} [initial] Optional integer for reading and setting bit values.
     */
    constructor(initial = 0) {
        this.checkNumber(initial);
        this.num = initial;
    }
    /**
     * @private
     * Checks, if passed argument is an integer.
     * @param {number} num Number to check
     */
    checkIfInteger(num) {
        if (!Number.isInteger(num))
            throw new TypeError(`Only integers allowed. Received: ${num}`);
    }
    /**
     * @private
     * Checks, if passed argument is in acceptable range and is an integer.
     * @param {number} num Number to check
     */
    checkNumber(num) {
        this.checkIfInteger(num);
        if (num < BitManipulator.MIN_INT || BitManipulator.MAX_INT < num)
            throw new RangeError(`Only values between ${BitManipulator.MIN_INT} and ${BitManipulator.MAX_INT} allowed (inclusive).`);
    }
    /**
     * @private
     * Checks, if passed argument is in acceptable range and is an integer.
     * @param {number} bit Number to check
     */
    checkBit(bit) {
        this.checkIfInteger(bit);
        if (bit < BitManipulator.MIN_BIT || BitManipulator.MAX_BIT < bit)
            throw new RangeError(`Bits can be only between ${BitManipulator.MIN_BIT} and ${BitManipulator.MAX_BIT} (inclusive).`);
    }
    /**
     * Returns a string representation of currently stored bit.
     * @param {number} [bitsToShow] Number of bits to show.
     * @returns {string}
     */
    bitString(bitsToShow = BitManipulator.MAX_BIT) {
        this.checkBit(bitsToShow);
        const binary = this.num.toString(2);
        return `${"0".repeat(BitManipulator.MAX_BIT - binary.length)}${binary}`.substring(BitManipulator.MAX_BIT - bitsToShow);
    }
    /** Integer to set and read from. */
    get number() {
        return this.num;
    }
    set number(num) {
        this.checkNumber(num);
        this.num = num;
    }
    /**
     * Sets required bit to a given value. Returns nothing.
     * Bits are numbered from right to left, starting from 1, so:
     * `...100101` will be numbered: `...654321`
     * @param {number} bit Bit to be set.
     * @param {boolean} value Boolean value to set the bit to.
     */
    set(bit, value) {
        this.checkBit(bit);
        if (value)
            this.num = this.num | (Math.pow(2, (bit - 1)));
        else
            this.num = this.num & ~(Math.pow(2, (bit - 1)));
    }
    /**
     * Gets the value of a given bit.
     * Bits are numbered from right to left, starting from 1, so:
     * `...100101` will be numbered: `...654321`
     * @param {number} bit Bit to read the value from.
     * @returns {boolean}
     */
    get(bit) {
        this.checkBit(bit);
        return Boolean(this.num & (Math.pow(2, (bit - 1))));
    }
}
exports.BitManipulator = BitManipulator;
/** Biggest acceptable bit value that can be set or read: `31`.  */
BitManipulator.MAX_BIT = 31;
/** Lowest acceptable bit value that can be set or read: `1`. */
BitManipulator.MIN_BIT = 1;
/** Biggest acceptable integer value that can be stored: `2 ** 31 - 1`. */
BitManipulator.MAX_INT = Math.pow(2, 31) - 1;
/** Lowest acceptable integer value that can be stored: `0`. */
BitManipulator.MIN_INT = 0;
