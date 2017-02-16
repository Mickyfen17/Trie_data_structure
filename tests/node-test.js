import { expect, assert } from "chai";
import Trie from "../lib/Trie";
import Node from "../lib/Node";

describe("Testing the node constructor", () => {

  it("node should be a function", () => {
    assert.isFunction(Node);
  });

  it("node should be a constructor", () => {
    let node = new Node();

    expect(node).to.be.instanceof(Node);
  });

  it("node data should be able to accept and store a value", () => {
    let node = new Node("test");

    expect(node.data).to.equal("test");
  });

  it("node isWord should be false as default", () => {
    let node = new Node();

    expect(node.isWord).to.equal(false);
  });

  it("node children should be an object", () => {
    let node = new Node();

    expect(node.children).to.be.an("object");
  });

});