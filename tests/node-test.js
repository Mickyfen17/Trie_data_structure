import { expect } from "chai";
import Node from "../lib/Node";

describe("Testing the node constructor", () => {
  let node;

  beforeEach(() => {
    node = new Node();
  }) ;

  it("an initialized node has the expected default state", () => {

    expect(node).to.be.instanceof(Node);
  });

  it("node data should be able to accept and store a value", () => {
    node = new Node("test");

    expect(node.data).to.equal("test");
  });

  it("node isWord should be false as default", () => {

    expect(node.isWord).to.equal(false);
  });

  it("node children should be an object", () => {

    expect(node.children).to.be.an("object");
  });

});