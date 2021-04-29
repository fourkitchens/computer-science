import { longestPalindrome } from './longestPalindrome';

describe('longestPalindrome', () => {
  it('can find the longest palindrome in a string', () => {
    expect.assertions(6);
    expect(longestPalindrome('')).toBe('');
    expect(longestPalindrome('hannah')).toBe('hannah');
    expect(longestPalindrome('babad')).toBe('bab');
    expect(longestPalindrome('cbbd')).toBe('bb');
    expect(longestPalindrome('a')).toBe('a');
    expect(longestPalindrome('ac')).toBe('a');
  });
});
