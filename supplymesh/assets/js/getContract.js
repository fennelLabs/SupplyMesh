import Web3 from 'web3'
import supplymesh from '~/assets/js/supplymesh'

let getContract = new Promise(function (resolve, reject) {
  let web3 = new Web3(window.web3.currentProvider)
  let supplymeshContractInstance = new web3.eth.Contract(supplymesh.ABI, supplymesh.address)
  console.log(supplymeshContractInstance)
  resolve(supplymeshContractInstance)
})

export default getContract