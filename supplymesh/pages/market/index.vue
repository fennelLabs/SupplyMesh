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
import Vue from 'vue'
import NETWORKS from '~/assets/js/network'
// eslint-disable-next-line
import supplymesh from '~/assets/js/supplymesh'
import Market from '~/components/market_page/Market.vue'

export default {
  name: 'SupplyMeshMarket',
  components: {
    Market
  },
  props: {
    amount: null,
    // eslint-disable-next-line
    pending: false,
    winEvent: null
  },
  data() {
    return {
      title: 'SupplyMesh - Market',
      heading: 'Request Market',
      supplyRequests: null
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
  created() {
    // eslint-disable-next-line
    console.log('dispatching getContractInstance')
    this.$store.dispatch('web3/getContractInstance')
  },
  mounted() {
    Vue.nextTick(function() {
      this.supplyRequests = this.getAllRequests()
    })
  },
  methods: {
    getAllRequests() {
      // eslint-disable-next-line
      console.log('Getting requests from Ethereum')
      this.winEvent = null
      this.pending = true
      this.$store.state.web3.contractInstance.methods
        .getAllRequests()
        .call({
          gas: 300000,
          value: this.$store.state.web3.web3
            .web3Instance()
            .toWei(this.amount, 'ether'),
          from: this.$store.state.web3.web3.coinbase
        })
        .then(console.log)
    },
    getRequestByKey(key) {
      this.winEvent = null
      this.pending = true
      this.$store.state.web3.contractInstance.methods
        .getSingleRequestByKey(key)
        .call({
          gas: 300000,
          value: this.$store.state.web3.web3
            .web3Instance()
            .toWei(this.amount, 'ether'),
          from: this.$store.state.web3.web3.coinbase
        })
        .then(console.log)
    },
    placeBid(key, price) {
      this.winEvent = null
      this.pending = true
      this.$store.state.web3.contractInstance.methods
        .placeBidOnBounty(key, price)
        .call({
          gas: 300000,
          value: this.$store.state.web3.web3
            .web3Instance()
            .toWei(this.amount, 'ether'),
          from: this.$store.state.web3.web3.coinbase
        })
        .then(console.log)
    },
    acceptBid(key) {
      this.winEvent = null
      this.pending = true
      this.$store.state.web3.contractInstance.methods
        .acceptBidOnBounty(key)
        .call({
          gas: 300000,
          value: this.$store.state.web3.web3
            .web3Instance()
            .toWei(this.amount, 'ether'),
          from: this.$store.state.web3.web3.coinbase
        })
        .then(console.log)
    },
    rejectBid(key) {
      this.winEvent = null
      this.pending = true
      this.$store.state.web3.contractInstance.methods
        .rejectBidOnBounty(key)
        .call({
          gas: 300000,
          value: this.$store.state.web3.web3
            .web3Instance()
            .toWei(this.amount, 'ether'),
          from: this.$store.state.web3.web3.coinbase
        })
        .then(console.log)
    },
    addBounty(price, title, description) {
      this.winEvent = null
      this.pending = true
      this.$store.state.web3.contractInstance.methods
        .addBountyForEntity(price, title, description)
        .call({
          gas: 300000,
          value: this.$store.state.web3.web3
            .web3Instance()
            .toWei(this.amount, 'ether'),
          from: this.$store.state.web3.web3.coinbase
        })
        .then(console.log)
    },
    payBounty(key) {
      this.winEvent = null
      this.pending = true
      this.$store.state.web3.contractInstance.methods
        .payBountyForEntity(key)
        .call({
          gas: 300000,
          value: this.$store.state.web3.web3
            .web3Instance()
            .toWei(this.amount, 'ether'),
          from: this.$store.state.web3.web3.coinbase
        })
        .then(console.log)
    },
    fundBounty(volume, key) {
      this.winEvent = null
      this.pending = true
      this.$store.state.web3.contractInstance.methods
        .fundBountyForEntity(volume, key)
        .call({
          gas: 300000,
          value: this.$store.state.web3.web3
            .web3Instance()
            .toWei(this.amount, 'ether'),
          from: this.$store.state.web3.web3.coinbase
        })
        .then(console.log)
    }
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
