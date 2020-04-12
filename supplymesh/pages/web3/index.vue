<template>
  <hello-metamask />
</template>
<script>
import HelloMetamask from '~/components/web3/hello-metamask'

export default {
  name: 'Web3',
  components: {
    'hello-metamask': HelloMetamask
  },
  beforeCreate() {
    this.$store.dispatch('web3/registerWeb3')
  }
}
</script>
