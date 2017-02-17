import { expect } from "chai";
import Node from "../lib/Node";

describe("Testing the node constructor", () => {

  it("an initialized node has the expected default state", () => {
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