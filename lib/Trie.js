import Node from "./Node";
require("locus");

class Trie {
  constructor() {
    this.root = new Node();
    this.count = 0;
    this.suggestArray = [];
    this.suggestObj = {};
  }

  insert(word) {
    let currLevel = this.root;
    word.split("").forEach( (letter, i) => {
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

  suggest(string) {
    this.suggestArray = [];
    if(this.suggestObj.hasOwnProperty(string)) {
      this.suggestArray = this.suggestObj[string];
      return this.suggestArray;
    }
    this.suggestWordSpliter(string);
  }

  suggestWordSpliter(string) {
    let currLevel = this.root;

    string.split("").forEach( letter => {
      if(currLevel.children) {
        currLevel = currLevel.children[letter];
      }
    });
    this.suggestIsWord(currLevel, string);
  }

  suggestIsWord(node, string) {
    if(node.isWord) {
      this.suggestArray.push(string);
    }
    const childKeys = Object.keys(node.children);

    for(let i = 0; i < childKeys.length; i++) {
      const key = childKeys[i];
      this.suggestIsWord(node.children[key], string + node.children[key].data);
    }
  }

  selectWord(subString, selection) {
    const index = this.suggestArray.indexOf(selection);
    const word = this.suggestArray.splice(index, 1);
    this.suggestArray.unshift(word[0]);
    this.suggestObj[subString] = this.suggestArray;
  }

  populate(array) {
    array.forEach( word => {
      this.insert(word);
    });
  }

}

export default Trie;