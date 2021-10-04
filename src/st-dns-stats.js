import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let result = {};
  let arrays = domains.map(item => item.split('.').reverse());
  for(let i = 0; i < arrays.length; i++) {
    let string = '';
    for(let j = 0; j < arrays[i].length; j++) {
      string += `.${arrays[i][j]}`;
      result[string] === undefined ? result[string] = 1 : result[string] += 1;
    }
  }
  return result;
}
