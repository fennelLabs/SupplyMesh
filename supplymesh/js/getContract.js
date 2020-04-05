import Web3 from 'web3'
import {address, ABI} from './constants/SupplyMesh'

let getContract = new Promise(function (resolve, reject) {
  let web3 = new Web3(window.web3.currentProvider)
  let SupplyMesh = web3.eth.contract(ABI)
  let SupplyMeshInstance = SupplyMesh.at(address)
  console.log(SupplyMesh)
  console.log(SupplyMeshInstance)
  resolve(SupplyMeshInstance)
})

export default getContract