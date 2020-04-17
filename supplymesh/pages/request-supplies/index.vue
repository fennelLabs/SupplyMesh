<template>
  <main class="masthead" style="padding-top: 75px; height: auto;">
    <div
      id="app"
      class="container text-dark rounded"
      style="background-color: RGBA(248, 249, 250, .8);"
    >
      <h1 style="padding-top: .3em;">{{ heading }}</h1>
      <SupplyRequest />
    </div>
  </main>
</template>

<script>
import SupplyRequest from '~/components/request-supplies_page/request-supplies.vue'

export default {
  name: 'SupplyMeshMarket',
  components: {
    SupplyRequest
  },
  data() {
    return {
      title: 'SupplyMesh - Request Supplies',
      heading: 'Create a Request'
    }
  },
  methods: {},
  head() {
    return {
      title: this.title
    }
  }
}
</script>
