import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let string;
  let additionString;
  if(options.separator === undefined) {
    options.separator = '+';
  }
  if(options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  if(options.addition !== undefined) {
    additionString = options.addition + (options.additionSeparator + options.addition).repeat(options.additionRepeatTimes - 1);
    string = str + additionString + (options.separator + str + additionString).repeat(options.repeatTimes - 1);
  } else {
    string = str + (options.separator + str).repeat(options.repeatTimes - 1);
  }
  return string;
}
