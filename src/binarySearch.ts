/**
 * Simple binary search that finds a number within a sorted array, and returns void if
 * the specified number does not exist within the array.
 *
 * @param sortedInput sorted array that will be searched.
 * @param expectation number to look for within the given array.
 * @returns index of the number within the given array, or void if no such number is found.
 */
export function binarySearch(
  sortedInput: number[],
  expectation: number
): number | void {
  let min = 0;
  let max = sortedInput.length - 1;
  while (min <= max) {
    const middle = Math.floor((min + max) / 2);
    if (sortedInput[middle] < expectation) {
      min = middle + 1;
    } else if (sortedInput[middle] > expectation) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return;
}
