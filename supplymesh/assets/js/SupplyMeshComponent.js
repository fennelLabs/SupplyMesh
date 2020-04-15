import Vue from 'vue'

Vue.component('SupplyMesh', {
  props: {
    amount: null,
    pending: false,
    winEvent: null
  },
  mounted() {
    console.log('dispatching getContractInstance')
    this.$store.dispatch('getContractInstance')
  },
  methods: {
    getAllRequests() {
      this.winEvent = null
      this.pending = true
      this.$store.state.web3.web3.contractInstance().getAllRequests(
        {
          gas: 300000,
          value: this.$store.state.web3.web3
            .web3Instance()
            .toWei(this.amount, 'ether'),
          from: this.$store.state.web3.web3.coinbase
        },
        function (err, result) {
          if (err) {
            alert('error')
          } else {
          }
        }
      )
    },
    getRequestByKey(key) {
      this.winEvent = null
      this.pending = true
      this.$store.state.web3.web3.contractInstance().getSingleRequestByKey(
        key,
        {
          gas: 300000,
          value: this.$store.state.web3.web3
            .web3Instance()
            .toWei(this.amount, 'ether'),
          from: this.$store.state.web3.web3.coinbase
        },
        function (err, result) {
          if (err) {
            alert('error')
          } else {
          }
        }
      )
    },
    placeBid(key, price) {
      this.winEvent = null
      this.pending = true
      this.$store.state.web3.web3.contractInstance().placeBidOnBounty(
        key,
        price,
        {
          gas: 300000,
          value: this.$store.state.web3.web3
            .web3Instance()
            .toWei(this.amount, 'ether'),
          from: this.$store.state.web3.web3.coinbase
        },
        function (err, result) {
          if (err) {
            alert('error')
          } else {
          }
        }
      )
    },
    acceptBid(key) {
      this.winEvent = null
      this.pending = true
      this.$store.state.web3.web3.contractInstance().acceptBidOnBounty(
        key,
        {
          gas: 300000,
          value: this.$store.state.web3.web3
            .web3Instance()
            .toWei(this.amount, 'ether'),
          from: this.$store.state.web3.web3.coinbase
        },
        function (err, result) {
          if (err) {
          } else {
          }
        }
      )
    },
    rejectBid(key) {
      this.winEvent = null
      this.pending = true
      this.$store.state.web3.web3.contractInstance().rejectBidOnBounty(
        key,
        {
          gas: 300000,
          value: this.$store.state.web3.web3
            .web3Instance()
            .toWei(this.amount, 'ether'),
          from: this.$store.state.web3.web3.coinbase
        },
        function (err, result) {
          if (err) {
          } else {
          }
        }
      )
    },
    addBounty(price, title, description) {
      this.winEvent = null
      this.pending = true
      this.$store.state.web3.web3.contractInstance().addBountyForEntity(
        price,
        title,
        description,
        {
          gas: 300000,
          value: this.$store.state.web3.web3
            .web3Instance()
            .toWei(this.amount, 'ether'),
          from: this.$store.state.web3.web3.coinbase
        },
        function (err, result) {
          if (err) {
          } else {
          }
        }
      )
    },
    payBounty(key) {
      this.winEvent = null
      this.pending = true
      this.$store.state.web3.web3.contractInstance().payBountyForEntity(
        key,
        {
          gas: 300000,
          value: this.$store.state.web3.web3
            .web3Instance()
            .toWei(this.amount, 'ether'),
          from: this.$store.state.web3.web3.coinbase
        },
        function (err, result) {
          if (err) {
          } else {
          }
        }
      )
    },
    fundBounty(volume, key) {
      this.winEvent = null
      this.pending = true
      this.$store.state.web3.web3.contractInstance().fundBountyForEntity(
        volume,
        key,
        {
          gas: 300000,
          value: this.$store.state.web3.web3
            .web3Instance()
            .toWei(this.amount, 'ether'),
          from: this.$store.state.web3.web3.coinbase
        },
        function (err, result) {
          if (err) {
          } else {
          }
        }
      )
    }
  },
  template: '<div></div>'
})

/*
 * NEEDED IN REQUESTS.HTML

componentWillMount() {
	const web3 = new Web3(
  		new Web3.providers.WebsocketProvider("https://ropsten.infura.io/v3/691aca45f1b448df92e1a968c1fe9e04")
	);
	web3.eth.getStorageAt(...).then(...)
	web3.eth.getBlock('latest').then(console.log)
}
*/
