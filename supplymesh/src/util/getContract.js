import Web3 from 'web3'
import {address, ABI} from './constants/SupplyMesh'

let getContract = new Promise(function (resolve, reject) {
  let web3 = new Web3(window.web3.currentProvider)
  let supplyMesh = web3.eth.contract(ABI)
  let supplyMeshInstance = supplyMesh.at(address)
  console.log(supplyMesh)
  console.log(supplyMeshInstance)
  resolve(supplyMeshInstance)
})

export default getContract