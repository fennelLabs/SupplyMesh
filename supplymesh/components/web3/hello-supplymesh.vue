<template>
  <div id="supplymesh-info">
    <p v-if="isInjected" id="has-metamask">
      <i aria-hidden="true" class="fa fa-check"></i> Metamask installed
    </p>
    <p v-else id="no-metamask">
      <i aria-hidden="true" class="fa fa-times"></i> Metamask not found
    </p>
    <p>Network: {{ network }}</p>
    <p>Account: {{ coinbase }}</p>
    <p>Balance: {{ balance }} Wei / {{ ethBalance }} ETH</p>
  </div>
</template>
<script></script>
<script>
import NETWORKS from '~/assets/js/network'
import supplymesh from '~/assets/js/supplymesh'
export default {
  data() {
    return {
      title: 'SupplyMesh'
    }
  },
  computed: {
    isInjected() {
      return this.$store.state.web3.web3.isInjected
    },
    network() {
      return NETWORKS.NETWORKS[this.$store.state.web3.web3.networkId]
    },
    coinbase() {
      return this.$store.state.web3.web3.coinbase
    },
    balance() {
      return this.$store.state.web3.web3.balance
    },
    ethBalance() {
      if (this.$store.state.web3.web3.web3Instance !== null)
        return this.$store.state.web3.web3
          .web3Instance()
          .utils.fromWei(
            this.$store.state.web3.web3.balance.toString(),
            'ether'
          )
      return 0
    }
  },
  mounted() {
    console.log('dispatching getContractInstance')
    this.$store.dispatch('web3/getContractInstance')
  }
}
</script>
<style scoped>
.metamask-info {
  text-align: center;
}
#has-metamask {
  color: green;
}
#no-metamask {
  color: red;
}
</style>
