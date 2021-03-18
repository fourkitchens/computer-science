/**
 * Takes an array of numbers, and target, and returns the indexes of two numbers
 * within the given array that sum to the target. If no such numbers are found,
 * void is returned instead.
 *
 * This is a brute-force method. Every single item is checked against every single
 * other item to find the earliest match.
 *
 * @param nums array containing numbers that that may or may not sum to the given target.
 * @param target number to which two `nums` values must sum.
 * @returns tuple containing the indeces of the two numbers that sum to the target, or void.
 */
export function twoSumBruteForce(
  nums: number[],
  target: number
): [number, number] | void {
  for (const [indexOne, numOne] of nums.entries()) {
    for (const [indexTwo, numTwo] of nums.entries()) {
      if (numOne + numTwo === target && indexOne != indexTwo) {
        return [indexOne, indexTwo];
      }
    }
  }

  return undefined;
}

/**
 * Takes an array of numbers, and target, and returns the indexes of two numbers
 * within the given array that sum to the target. If no such numbers are found,
 * void is returned instead.
 *
 * This method uses a map of complements to more efficiently find the correct indeces.
 *
 * @param nums array containing numbers that that may or may not sum to the given target.
 * @param target number to which two `nums` values must sum.
 * @returns tuple containing the indeces of the two numbers that sum to the target, or void.
 */
export function twoSum(
  nums: number[],
  target: number
): [number, number] | void {
  const complements = new Map<number, number>();

  for (const [index, value] of nums.entries()) {
    const maybeComplement = complements.get(target - value);
    if (typeof maybeComplement != 'undefined') {
      return [maybeComplement, index];
    }

    complements.set(value, index);
  }

  return undefined;
}
