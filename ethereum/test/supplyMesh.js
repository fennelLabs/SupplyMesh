const supplyMesh = artifacts.require("SupplyMesh");

contract("SupplyMesh", accounts => {
    it("should deploy", () => {
        supplyMesh.deployed();
    })
})