import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {

  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(value !== undefined) {
      this.chain.push(value);
    } else {
      this.chain.push('');
    }
    return this;
  },
  removeLink(position) {
    if(Number.isInteger(position) && (position > 0 && position <= this.chain.length)) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.map(item => `( ${item} )`).join('~~');
    this.chain = [];
    // console.log(`result: ${result}`)
    return result
  }
};
