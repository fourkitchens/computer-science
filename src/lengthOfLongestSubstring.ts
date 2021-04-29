/**
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * @param s string that this fn will search for the longest substring.
 *
 * @returns number representing the length of the longest substring (string without repeating characters).
 * within the given string, s.
 */
export function lengthOfLongestSubstring(s: string): number {
  const characters = s.split('');
  const substring = new Map<string, number>();
  let max = 0;

  for (let i = 0; i < characters.length; i++) {
    if (substring.has(characters[i])) {
      i = substring.get(characters[i]) as number;
      substring.clear();
    } else {
      substring.set(characters[i], i);
      max = max < substring.size ? substring.size : max;
    }
  }

  return max;
}
