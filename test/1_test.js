/* eslint-disable */
const Farm = artifacts.require("Farm");

let instance;
const tokenId = 88473;

// Hook
before(async() => {
  instance = await Farm.deployed();
});

contract("Farm", async accounts => {
  it("Should tokenize farm(register)", async() => {
    const result = await instance.addFarm(
      "0.9ha",
      "36.89323",
      "-1.29748",
      "QmfEiJ2xZ7W8Ltj8XJzrcvH2xQkMcwySyWfp4ksMRwEbZf",
      "Loam soil",
      tokenId
    );
    const log = result.logs[1].args;
    assert.equal(log._size, "0.9ha", "farm size should be 0.9ha");
    assert.equal(log._lon, "36.89323", "farm longitude should be 39.89323");
    assert.equal(log._lat, "-1.29748", "farm latitude should be -1.29748");
    assert.equal(log._fileHash, "QmfEiJ2xZ7W8Ltj8XJzrcvH2xQkMcwySyWfp4ksMRwEbZf", "should be an IPFS file hash");
    assert.equal(log._soilType, "Loam soil", "farm soil type should be loam");
    assert.equal(log._owner, accounts[0], "farm owner should be accounts 1");
  });
});

after(async() => {
  instance = null;
});