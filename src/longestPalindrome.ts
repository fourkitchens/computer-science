export function longestPalindrome(input: string): string {
  if (input.length <= 1) {
    return input;
  }

  let longest = '';
  for (let i = 0; i < input.length; i++) {
    if (longest.length > input.length - i) {
      break;
    }

    const val =
      input.length % 2 === 0
        ? expandAroundCenter(input, i - 1, i)
        : expandAroundCenter(input, i, i);

    if (val.length > longest.length) {
      longest = val;
    }
  }

  return longest;
}

function expandAroundCenter(s: string, left: number, right: number): string {
  let i = 0;
  while (s[left - i] && s[left - i] === s[right + i]) {
    i++;
  }
  i--;

  return s.slice(left - i, right + i + 1);
}
