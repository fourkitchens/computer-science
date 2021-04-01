import { binarySearch } from './binarySearch';

describe('binarySearch', () => {
  it('finds a number within an array', () => {
    expect.assertions(4);
    const input = [1, 2, 13, 14, 15, 18, 19, 21, 25, 32];
    expect(binarySearch(input, 15)).toBe(4);
    expect(binarySearch(input, 21)).toBe(7);
    expect(binarySearch(input, 2)).toBe(1);
    expect(binarySearch([], 4)).toBe(undefined);
  });
});
