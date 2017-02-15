import Node from "./Node";
require('locus');

class Trie {
  constructor() {
    this.root = {};
    this.count = 0;
  }

  insert(word) {
    let currLevel = this.root;
    word.split("").forEach( (letter, i) => {

      while(currLevel.hasOwnProperty(letter)) {
        currLevel = currLevel[letter].children;
        return currLevel;
      }
      currLevel[letter] = new Node(letter);
      currLevel[letter].isWord = this.isWord(word, i);
      currLevel = currLevel[letter].children;
    });
    this.count++;
    console.log(JSON.stringify(this, null, 4));
  }

  isWord(word, index) {
    return index === word.length -1 ? true : false;
  }

}

export default Trie;