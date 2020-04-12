<template>
  <div class="metamask-info">
    <p>Network: {{ web3.networkId }}</p>
    <p>Account: {{ web3.coinbase }}</p>
    <p>Balance: {{ web3.balance }}</p>
  </div>
</template>
<script></script>
<script>
export default {
  data() {
    return {
      title: 'SupplyMesh',
      balance: '',
      accounts: [],
      userAccount: ''
    }
  },
  computed: {
    web3: function() {
      return this.$store.state.web3.web3
    }
  } /* ,
  mounted() {
    const Web3 = require('web3')
    const web3 = new Web3(window.ethereum)
    window.ethereum.enable().catch((error) => {
      // User denied account access
      console.log(error)
    })
    web3.eth.getAccounts((err, accounts) => {
      this.accounts = accounts
      this.userAccount = this.accounts[0]
    })

    //Contract address and ABI from supplymesh.js
    const contractAddress = supplymesh.address
    const abi = supplymesh.ABI

    const contract = new web3.eth.Contract(abi, contractAddress)

    web3.eth.getBalance(this.userAddress, (err, wei) => {
      this.balance = web3.utils.fromWei(wei, 'ether')
    })
  } */
}
</script>
