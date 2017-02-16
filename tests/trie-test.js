import { expect, assert } from "chai";
import Trie from "../lib/Trie";
import Node from "../lib/Node";
import fs from "fs";

let dictionary = fs.readFileSync('/usr/share/dict/words', 'utf-8').toLowerCase().trim().split('\n');

describe("Testing the trie constructor", () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it("trie should be a function", () => {
    assert.isFunction(Trie);
  });

  it("trie should be a constructor", () => {

    expect(trie).to.be.instanceof(Trie);
  });

  it("trie root should be an empty object as default", () => {

    expect(trie.root).to.be.an("object");
  });

  it("trie count should be 0 as default", () => {

    expect(trie.count).to.equal(0);
  });

  it("should be able to add a word and increase the count", () => {

    expect(trie.count).to.equal(0);
    trie.insert("test");
    expect(trie.count).to.equal(1);
  });

  it("should be able to add a letter and check is it exists in the nodes data key", () => {
    trie.insert("bob");

    expect(trie.root.b.data).to.equal("b");
  });

  it("should be able to add a word but check is it exists in the nodes data key", () => {
    trie.insert("bob");

    expect(trie.root.b.data).to.equal("b");
    expect(trie.root.b.children.o.data).to.equal("o");
    expect(trie.root.b.children.o.children.b.data).to.equal("b");
  });

  it("should be able to add a letter into the tree", () => {
    trie.insert("a");

    expect(trie.root.a).to.have.deep.property("data", "a");
  });

  it("should be able to add a 2 letters into the tree", () => {
    trie.insert("ab");

    expect(trie.root.a).to.have.deep.property("children").
                        to.have.deep.property("b");
  });

  it("should be able to add a two similar strings and check if they exist", () => {
    trie.insert("abc");
    trie.insert("abef");

    expect(trie.root.a).to.have.deep.property("children").
                        to.have.deep.property("b").
                        to.have.deep.property("children").
                        to.have.keys("c", "e");
  });

  it("should be able to add a word but check when word is incomplete", () => {
    trie.insert("bob");

    expect(trie.root.b).to.have.deep.property("children").
                        to.have.deep.property("o").
                        to.have.deep.property("isWord").
                        to.equal(false);

  });

  it("should be able to add a word and set when word is complete", () => {
    trie.insert("bob");

    expect(trie.root.b).to.have.deep.property("children").
                        to.have.deep.property("o").
                        to.have.deep.property("children").
                        to.have.deep.property("b").
                        to.have.deep.property("isWord").
                        to.equal(true);

  });

  it.only("suggest should return and array of matched words", () => {
    trie.insert("apple");
    trie.insert("applicant");
    trie.insert("application");
    trie.suggest("ap");

    console.log("returned array", trie.suggestArray);

    expect(trie.suggestArray).to.deep.equal(["apple", "applicant", "application"]);
  });

  it.skip("testing trie", () => {
    trie.insert("word");
    trie.insert("world");
    trie.insert("worry");
    trie.insert("test");
    trie.insert("testing");
  });

  it("populate be able to accept arrays and increase the word count", () => {
    trie.populate(["test", "test2"]);

    expect(trie.count).to.equal(2);
  });

  it("populate be able to accept arrays and push into tree via insert", () => {
    trie.populate(["test"]);

    expect(trie.root.t).to.have.deep.property("children").
                        to.have.deep.property("e").
                        to.have.deep.property("children").
                        to.have.deep.property("s").
                        to.have.deep.property("children").
                        to.have.deep.property("t").
                        to.have.deep.property("isWord").
                        to.equal(true);
  });

  it("populate be able to accept the dictionary in array form and log a word count of 235886", () => {
    trie.populate(dictionary);

    expect(trie.count).to.equal(235886);
  });

  it("populate be able to accept the dictionary and be able to search for a random word", () => {
    trie.populate(dictionary);

    expect(trie.root.b.children.a.children.l.children.l).
                          to.have.deep.property("isWord").
                          to.equal(true);
  });

});