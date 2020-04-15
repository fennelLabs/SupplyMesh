<template>
  <main class="masthead" style="padding-top: 75px; height: auto;">
    <div
      id="app"
      class="container text-dark rounded"
      style="background-color: RGBA(248, 249, 250, .8);"
    >
      <h1 style="padding-top: .3em;">{{ heading }}</h1>
      <div class="d-flex flex-wrap justify-content-around align-items-stretch">
        <market
          v-for="supplyRequest in supplyRequests"
          :key="supplyRequest.id"
          :supply-request="supplyRequest"
        ></market>
      </div>
    </div>
  </main>
</template>

<script>
import NETWORKS from '~/assets/js/network'
// eslint-disable-next-line
import supplymesh from '~/assets/js/supplymesh'
import Market from '~/components/market_page/Market.vue'

// Need to retrieve request list properly
// var request_list = getAllRequests();

export default {
  name: 'SupplyMeshMarket',
  components: {
    Market
  },
  data() {
    return {
      title: 'SupplyMesh - Market',
      heading: 'Request Market',
      supplyRequests: request_list,
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
  },
  head() {
    return {
      title: this.title
    }
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
