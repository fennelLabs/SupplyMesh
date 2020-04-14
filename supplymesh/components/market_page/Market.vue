<template>
  <a :href="'market/request?id=' + supplyRequest.id">
    <div class="card" style="width: 18rem; margin-bottom: 2em;">
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
      <img class="card-img-top" :src="supplyRequest.img" alt="Card image cap" />
      <div class="card-body">
        <h3 class="card-title">{{ supplyRequest.title }}</h3>
        <p class="card-text">
          {{ supplyRequest.description }}
          <br />
          <span class="text-muted">{{ supplyRequest.hospital }}</span>
          <br />
          <span class="card-text text-success"
            >$ {{ supplyRequest.funding }} raised</span
          >
        </p>
      </div>
    </div>
  </a>
</template>
<script>
import NETWORKS from '~/assets/js/network'
// eslint-disable-next-line
import supplymesh from '~/assets/js/supplymesh'
export default {
  name: 'Market',
  props: { supplyRequest: { type: Object, required: true } },
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
    // eslint-disable-next-line
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
