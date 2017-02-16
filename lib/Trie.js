import Node from "./Node";
require('locus');

class Trie {
  constructor() {
    this.root = new Node();
    this.count = 0;
    this.suggestArray = [];
  }

  insert(word) {
    let currLevel = this.root;
    word.split("").forEach( (letter, i) => {
      console.log(currLevel)
      if(currLevel.children.hasOwnProperty(letter)) {
        currLevel = currLevel.children[letter];
        return currLevel;
      }
      currLevel.children[letter] = new Node(letter);
      currLevel.children[letter].isWord = this.isWord(word, i);
      currLevel = currLevel.children[letter];
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
      let key = childKeys[i]
      // eval(locus);
      this.suggestIsWord(node.children[key], string + node.children[key].data);
    }
    // eval(locus);

  }

  suggest(string) {
    // eval(locus);
    let currLevel = this.root;
    // eval(locus);

    string.split("").forEach( letter => {
      // eval(locus);
      if(currLevel.children) {
        // eval(locus);
        currLevel = currLevel.children[letter];
        // eval(locus);
      }
    });
    // eval(locus);
    this.suggestIsWord(currLevel, string);
  }

  populate(array) {
    array.forEach( word => {
      this.insert(word);
    });
  }

}

export default Trie;