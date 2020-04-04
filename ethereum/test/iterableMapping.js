const supplyMesh = artifacts.require("SupplyMesh");

contract("IterableMapping", accounts => {
    it("should deploy", () => {
        supplyMesh.deployed();
    })
})