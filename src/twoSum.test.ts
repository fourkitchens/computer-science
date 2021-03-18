import { twoSum, twoSumBruteForce } from './twoSum';

describe('twoSum', () => {
  describe('brute force', () => {
    it('can find two numbers within an array that sum to the given target', () => {
      expect.assertions(1);
      expect(twoSumBruteForce([1, 2, 4, 4], 8)).toEqual([2, 3]);
    });

    it('can return undefined if no numbers summed to the expected target', () => {
      expect.assertions(1);
      expect(twoSumBruteForce([1, 2, 3, 3], 8)).toEqual(undefined);
    });
  });

  describe('complement map', () => {
    it('can use a complement map to efficiently find the target pair', () => {
      expect.assertions(1);
      expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    it('can return undefined if no numbers summed to the expected target', () => {
      expect.assertions(1);
      expect(twoSum([1, 7, 11, 15], 9)).toEqual(undefined);
    });
  });
});
