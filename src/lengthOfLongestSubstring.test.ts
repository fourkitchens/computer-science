import { lengthOfLongestSubstring } from './lengthOfLongestSubstring';

describe('lengthOfLongestSubstring', () => {
  it('can find and return the longest substring', () => {
    expect.assertions(2);
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
    expect(lengthOfLongestSubstring('dvdf')).toBe(3);
  });
});
