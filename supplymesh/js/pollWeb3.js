const pollWeb3 = function(state) {
  web3 = new Web3(state.web3.currentProvider)

  setInterval(function() {
    if (web3 && store.state.web3.web3Instance) {
      if (web3.eth.coinbase !== store.state.web3.coinbase) {
        const newCoinbase = web3.eth.coinbase
        web3.eth.getBalance(web3.eth.coinbase, function(err, newBalance) {
          if (err) {
            console.log(err)
          } else {
            store.dispatch('pollWeb3', {
              coinbase: newCoinbase,
              balance: parseInt(newBalance, 10)
            })
          }
        })
      } else {
        web3.eth.getBalance(store.state.web3.coinbase, function(
          err,
          polledBalance
        ) {
          if (err) {
            console.log(err)
          } else if (parseInt(polledBalance, 10) !== store.state.web3.balance) {
            store.dispatch('pollWeb3', {
              coinbase: store.state.web3.coinbase,
              balance: polledBalance
            })
          }
        })
      }
    }
  }, 500)
}
