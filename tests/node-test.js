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

});