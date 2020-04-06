// import Web3 from 'web3'
// import {address, ABI} from './constants/SupplyMesh'
var getContract = new Promise(function (resolve, reject) {
  var web3 = new Web3(window.web3.currentProvider)
  var SupplyMesh = web3.eth.contract(ABI)
  var SupplyMeshInstance = SupplyMesh.at(address)
  console.log(SupplyMesh)
  console.log(SupplyMeshInstance)
  resolve(SupplyMeshInstance)
})

