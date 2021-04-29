/**
 * Accepts a sorted array, and counts the unique values in the array.
 *
 * @param sortedNumbers sorted array of numbers.
 *
 * @returns number of unique values within the given array.
 */
export function countUniqueValues(sortedNumbers: number[] | string[]): number {
  if (sortedNumbers.length <= 0) {
    return 0;
  }

  let first = 0;
  let second = 1;
  let uniqueCount = 1;

  while (second <= sortedNumbers.length - 1) {
    if (sortedNumbers[first] !== sortedNumbers[second]) {
      uniqueCount++;
    }

    first++;
    second++;
  }

  return uniqueCount;
}
