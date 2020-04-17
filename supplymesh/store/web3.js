import getWeb3 from '~/assets/js/getWeb3'
import pollWeb3 from '~/assets/js/pollWeb3'
import getContract from '~/assets/js/getContract'

export const state = () => ({
  web3: {
    isInjected: false,
    web3Instance: null,
    networkId: null,
    coinbase: null,
    balance: null,
    error: null
  },
  contractInstance: null
})

export const mutations = {
  registerWeb3Instance(state, payload) {
    console.log('registerWeb3instance Mutation being executed', payload)
    const result = payload
    const web3Copy = state.web3
    web3Copy.coinbase = result.coinbase
    web3Copy.networkId = result.networkId
    web3Copy.balance = parseInt(result.balance, 10)
    web3Copy.isInjected = result.injectedWeb3
    web3Copy.web3Instance = result.web3
    state.web3 = web3Copy
    pollWeb3()
  },
  pollWeb3Instance(state, payload) {
    console.log('pollWeb3Instance mutation being executed', payload)
    state.web3.coinbase = payload.coinbase
    state.web3.balance = parseInt(payload.balance, 10)
  },
  registerContractInstance(state, payload) {
    console.log('SupplyMesh contract instance: ', payload)
    state.contractInstance = () => payload
  }
}

export const actions = {
  registerWeb3({ commit }) {
    console.log('registerWeb3 Action being executed')
    getWeb3
      .then((result) => {
        console.log('committing result to registerWeb3Instance mutation')
        commit('registerWeb3Instance', result)
      })
      .catch((e) => {
        console.log('error in action registerWeb3', e)
      })
  },
  pollWeb3({ commit }, payload) {
    console.log('pollWeb3 action being executed')
    commit('pollWeb3Instance', payload)
  },
  getContractInstance({ commit }) {
    getContract
      .then((result) => {
        commit('registerContractInstance', result)
      })
      .catch((e) => console.log(e))
  }
}
