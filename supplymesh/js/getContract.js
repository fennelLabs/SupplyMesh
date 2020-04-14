// import Web3 from 'web3'
// import {address, ABI} from './constants/SupplyMesh'
const getContract = new Promise(function(resolve, reject) {
  const web3 = new Web3(window.web3.currentProvider)
  const SupplyMesh = web3.eth.contract(ABI)
  const SupplyMeshInstance = SupplyMesh.at(address)
  console.log(SupplyMesh)
  console.log(SupplyMeshInstance)
  resolve(SupplyMeshInstance)
})
