export default {
  name: 'supplymesh',
  data () {
    return {
      amount: null,
      pending: false,
      winEvent: null
    }
  },
  methods: {
    placeBid (event) {
      this.winEvent = null
      this.pending = true
      this.$store.state.contractInstance().placeBidOnBounty(event.target.innerHTML, {
        gas: 300000,
        value: this.$store.state.web3.web3Instance().toWei(this.amount, 'ether'),
        from: this.$store.state.web3.coinbase
      }, (err, result) => {
        if (err) {
          
        } else {
          
        }
      })
    },
    acceptBid (event) {
      this.winEvent = null
      this.pending = true
      this.$store.state.contractInstance().acceptBidOnBounty(event.target.innerHTML, {
        gas: 300000,
        value: this.$store.state.web3.web3Instance().toWei(this.amount, 'ether'),
        from: this.$store.state.web3.coinbase
      }, (err, result) => {
        if (err) {
          
        } else {
          
        }
      })
    },
    rejectBid (event) {
      this.winEvent = null
      this.pending = true
      this.$store.state.contractInstance().rejectBidOnBounty(event.target.innerHTML, {
        gas: 300000,
        value: this.$store.state.web3.web3Instance().toWei(this.amount, 'ether'),
        from: this.$store.state.web3.coinbase
      }, (err, result) => {
        if (err) {
          
        } else {
          
        }
      })
    },
    addBounty (event) {
      this.winEvent = null
      this.pending = true
      this.$store.state.contractInstance().addBountyForEntity(event.target.innerHtml, event.target.innerHTML, {
        gas: 300000,
        value: this.$store.state.web3.web3Instance().toWei(this.amount, 'ether'),
        from: this.$store.state.web3.coinbase
      }, (err, result) => {
        if (err) {
          
        } else {
          
        }
      })
    },
    payBounty (event) {
      this.winEvent = null
      this.pending = true
      this.$store.state.contractInstance().payBountyForEntity(event.target.innerHTML, {
        gas: 300000,
        value: this.$store.state.web3.web3Instance().toWei(this.amount, 'ether'),
        from: this.$store.state.web3.coinbase
      }, (err, result) => {
        if (err) {
          
        } else {
          
        }
      })
    },
    fundBounty (event) {
      this.winEvent = null
      this.pending = true
      this.$store.state.contractInstance().fundBountyForEntity(event.target.innerHTML, event.target.innerHTML, {
        gas: 300000,
        value: this.$store.state.web3.web3Instance().toWei(this.amount, 'ether'),
        from: this.$store.state.web3.coinbase
      }, (err, result) => {
        if (err) {
          
        } else {
          
        }
      })
    }
  },
  mounted () {
    console.log('dispatching getContractInstance')
    this.$store.dispatch('getContractInstance')
  }
}
