<template>
  <hello-supplymesh />
</template>
<script>
import HelloSupplyMesh from '~/components/web3/hello-supplymesh'

export default {
  name: 'Supplymesh',
  components: {
    'hello-supplymesh': HelloSupplyMesh
  },
  beforeCreate() {
    this.$store.dispatch('web3/registerWeb3')
  }
}
</script>
