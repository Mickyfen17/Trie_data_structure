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

  it("trie root should be an empty object as default", () => {
    let trie = new Trie();

    expect(trie.root).to.be.an("object");
  });

  it("trie count should be 0 as default", () => {
    let trie = new Trie();

    expect(trie.count).to.equal(0);
  });

  it("should be able to add a word and increase the count", () => {
    let trie = new Trie();

    expect(trie.count).to.equal(0);
    trie.insert("test");
    expect(trie.count).to.equal(1);
  });

  it("should be able to add a letter into the tree", () => {
    let trie = new Trie();
    trie.insert("a");

    expect(trie.root.a).to.have.deep.property("data", "a");
  });

  it("should be able to add a 2 letters into the tree", () => {
    let trie = new Trie();
    trie.insert("ab");

    expect(trie.root.a).to.have.deep.property("children").
                        to.have.deep.property("b");
  });

  it("should be able to add a two similar strings and check if they exist", () => {
    let trie = new Trie();
    trie.insert("abc");
    trie.insert("abef");

    expect(trie.root.a).to.have.deep.property("children").
                        to.have.deep.property("b").
                        to.have.deep.property("children").
                        to.have.keys("c", "e");
  });

  it("should be able to add a word but check when word is incomplete", () => {
    let trie = new Trie();
    trie.insert("bob");

    expect(trie.root.b).to.have.deep.property("children").
                        to.have.deep.property("o").
                        to.have.deep.property("isWord").
                        to.equal(false);

  });

  it("should be able to add a word and set when word is complete", () => {
    let trie = new Trie();
    trie.insert("bob");

    expect(trie.root.b).to.have.deep.property("children").
                        to.have.deep.property("o").
                        to.have.deep.property("children").
                        to.have.deep.property("b").
                        to.have.deep.property("isWord").
                        to.equal(true);

  });

  it("trie should be a constructor", () => {
    let trie = new Trie();

    trie.insert("word");
    trie.insert("world");
    trie.insert("worry");
    trie.insert("test");
    trie.insert("testing");
  });


});