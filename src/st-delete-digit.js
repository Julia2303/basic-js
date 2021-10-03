import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  n = n.toString();
  let max = n.slice(1);
  for(let i = 1; i < n.length; i++) {
    let current = n.slice(0, i).concat(n.slice(i + 1));
    if(current > max) {
      max = current
    }
  }
  return +max;
}
