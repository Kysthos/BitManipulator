import { BitManipulator } from ".";
import { expect } from "chai";
import cliProgress from "cli-progress";
import random from "random";
import "mocha";

const b = new BitManipulator();

/**
 * Iterates string in reverse
 * @param str string to iterate over
 */
function* iterateStringReverse(str: string) {
  for (let i = 0; i < str.length; i++) yield str[str.length - 1 - i];
}

/** get an instance of a progress bar */
const createProgressBar = (label: string) =>
  new cliProgress.SingleBar(
    {
      format: `${label}: [{bar}] {percentage}%`,
      clearOnComplete: true,
      hideCursor: true,
    },
    cliProgress.Presets.shades_classic
  );

random.use("myseed");
/** Returns a random int from the acceptable `BitManipulator range */
const randomInt = () =>
  random.int(BitManipulator.MIN_INT, BitManipulator.MAX_INT);

describe("BitManipulator", () => {
  describe("Throwing errors", () => {
    it("should throw TypeError when passed not an integer", () => {
      expect(() => (b.number = 1.5)).to.throw(TypeError);
    });
    it("should throw RangeError when passed too low integer", () => {
      expect(() => (b.number = BitManipulator.MIN_INT - 1)).to.throw(
        RangeError
      );
    });
    it("should throw RangeError when passed too high integer", () => {
      expect(() => (b.number = BitManipulator.MAX_INT + 1)).to.throw(
        RangeError
      );
    });
    it("should throw RangeError when passed too low bit", () => {
      expect(() => b.get(BitManipulator.MIN_BIT - 1)).to.throw(RangeError);
    });
    it("should throw RangeError when passed too high bit", () => {
      expect(() => b.get(BitManipulator.MAX_BIT + 1)).to.throw(RangeError);
    });
  });

  describe("string representation", () => {
    it(`should return string of length: ${BitManipulator.MAX_BIT}`, () => {
      b.number = 0;
      expect(b.bitString().length).to.equal(BitManipulator.MAX_BIT);
    });
    it(`should return string of length: ${BitManipulator.MIN_BIT}`, () => {
      b.number = 0;
      expect(b.bitString(BitManipulator.MIN_BIT).length).to.equal(
        BitManipulator.MIN_BIT
      );
    });
  });

  describe("get and set bits", () => {
    const checkEvery = 100000;
    it(`should get every bit correctly (checking every ${checkEvery} numbers)`, () => {
      const bar = createProgressBar("Testing get function");
      bar.start(BitManipulator.MAX_INT, 0);

      for (
        let i = BitManipulator.MIN_INT;
        i <= BitManipulator.MAX_INT;
        i += checkEvery
      ) {
        b.number = i;
        const bits = i.toString(2);
        let bitIndex = 1;
        for (const char of iterateStringReverse(bits)) {
          const val = char === "1" ? true : false;
          expect(b.get(bitIndex++)).to.equal(val);
        }
        bar.update(i);
      }

      bar.stop();
    });

    it(`should set every bit correctly (checking every ${checkEvery} numbers)`, () => {
      const bar = createProgressBar("Testing set function");
      bar.start(BitManipulator.MAX_INT, 0);

      for (
        let i = BitManipulator.MIN_INT;
        i <= BitManipulator.MAX_INT;
        i += checkEvery
      ) {
        b.number = randomInt();
        const bits = i.toString(2);
        let bitIndex = 1;

        for (const char of iterateStringReverse(bits))
          b.set(bitIndex++, char === "1" ? true : false);
        for (let j = bitIndex; j <= BitManipulator.MAX_BIT; j++)
          b.set(j, false);

        expect(b.number).to.equal(i);
        bar.update(i);
      }

      bar.stop();
    });
  });
});
