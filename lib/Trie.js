import Node from "./Node";
require('locus');

class Trie {
  constructor() {
    this.root = {};
    this.count = 0;
    this.suggestArray = [];
  }

  insert(word) {
    let currLevel = this.root;
    word.split("").forEach( (letter, i) => {

      if(currLevel.hasOwnProperty(letter)) {
        currLevel = currLevel[letter].children;
        return currLevel;
      }
      currLevel[letter] = new Node(letter);
      currLevel[letter].isWord = this.isWord(word, i);
      currLevel = currLevel[letter].children;
    });
    this.count++;
    // console.log(JSON.stringify(this, null, 4));
  }

  isWord(word, index) {
    return index === word.length -1 ? true : false;
  }

  suggestIsWord(node, string) {
    // eval(locus);
    // let key = Object.keys(node.children);
    // eval(locus);
    if(node.isWord) {
      // eval(locus);
      return this.suggestArray.push(string + node.data);
    }
    let childKeys = Object.keys(node.children);
    // eval(locus);

    for(let i = 0; i < childKeys.length; i++) {
      let key = childKeys[i];
      // eval(locus);
      this.suggestIsWord(node.children[key], string + node.data);
    }
    // eval(locus);

  }

  suggest(string) {
    let splitString = string.split('')
    // eval(locus);
    let currLevel = this.root[splitString[0]];
    // eval(locus);
    splitString.forEach( (letter, index, array) => {
      if(currLevel.children) {
        currLevel = currLevel.children
      }
    });
    this.suggestIsWord(currLevel, string);
  }



  populate(array) {
    array.forEach( word => {
      this.insert(word);
    });
  }

}

export default Trie;