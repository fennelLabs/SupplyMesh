const mesh = artifacts.require("SupplyMesh")

module.exports = function(deployer) {
  deployer.deploy(mesh);
}