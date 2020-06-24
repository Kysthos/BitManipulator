/**
 * Stores a 31-bit positive integer with the possibility to read and set every single bit value.
 * Boolean values can be stored in bits from 1 to 31 (inclusive).
 */
declare class BitManipulator {
    /** Biggest acceptable bit value that can be set or read: `31`.  */
    static MAX_BIT: number;
    /** Lowest acceptable bit value that can be set or read: `1`. */
    static MIN_BIT: number;
    /** Biggest acceptable integer value that can be stored: `2 ** 31 - 1`. */
    static MAX_INT: number;
    /** Lowest acceptable integer value that can be stored: `0`. */
    static MIN_INT: number;
    /** Private variable to store the integer to set and read from. */
    private num;
    /**
     * @param {number} [initial] Optional integer for reading and setting bit values, defaults to 0.
     */
    constructor(initial?: number);
    /**
     * Private function. Checks, if passed argument is an integer.
     * @param {number} num Number to check
     */
    private checkIfInteger;
    /**
     * Private function. Checks, if passed argument is in acceptable range and is an integer.
     * @param {number} num Number to check
     */
    private checkNumber;
    /**
     * Private function. Checks, if passed argument is in acceptable range and is an integer.
     * @param {number} bit Number to check
     */
    private checkBit;
    /**
     * Returns a string representation of currently stored bit.
     * @param {number} [bitsToShow] Number of bits to show.
     * @returns {string}
     */
    bitString(bitsToShow?: number): string;
    /** Integer to set and read from. */
    get number(): number;
    set number(num: number);
    /**
     * Sets required bit to a given value.
     * Bits are numbered from right to left, starting from 1, so:
     * `...100101` will be numbered: `...654321`
     * @param {number} bit Bit to be set.
     * @param {boolean} value Boolean value to set the bit to.
     */
    set(bit: number, value: boolean): void;
    /**
     * Gets the value of a given bit.
     * Bits are numbered from right to left, starting from 1, so:
     * `...100101` will be numbered: `...654321`
     * @param bit Bit to read the value from.
     * @returns {boolean}
     */
    get(bit: number): boolean;
}
export { BitManipulator };
