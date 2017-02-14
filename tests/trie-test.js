import { expect, assert } from "chai";
import Trie from "../lib/Trie";
import Node from "../lib/Node";

describe("Testing the trie constructor", () => {

  it("trie should be a function", () => {
    assert.isFunction(Trie);
  });

  it("trie should be a constructor", () => {
    let trie = new Trie();

    expect(trie).to.be.instanceof(Trie);
  });

});