class Node {
  constructor(data) {
    this.data = data;
    this.isWord = false;
    // this.nextNode = null || node;
    this.children = {};
  }
}

export default Node;