Vue.component('SupplyMesh', {
	props: {
		amount: null,
		pending: false,
		winEvent: null,
	},
	template: "<div></div>",
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
	}
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
