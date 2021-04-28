import { countUniqueValues } from './countUniqueValues';

describe('countUniqueValues', () => {
  it('can return the number of unique values within an array', () => {
    expect.assertions(4);
    expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2);
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
    expect(
      countUniqueValues([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
    ).toBe(1);
    expect(countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7])).toBe(7);
  });

  it('returns zero if no values exist within the array', () => {
    expect.assertions(1);
    expect(countUniqueValues([])).toBe(0);
  });
});
