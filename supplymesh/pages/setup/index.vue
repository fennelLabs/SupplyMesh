<template>
  <main class="masthead" style="padding-top: 75px; height: auto;">
    <div
      id="app"
      class="container text-dark rounded"
      style="background-color: RGBA(248, 249, 250, .8); padding: 15px;"
    >
      <SUContent />
    </div>
  </main>
</template>

<script>
import SUContent from '~/components/setup_page/SUContent'
export default {
  name: 'SupplyMeshSetup',
  components: {
    SUContent
  },
  data() {
    return {
      title: 'SupplyMesh - Setup',
      heading: 'Setup'
    }
  },
  mounted() {},
  methods: {},
  head() {
    return {
      title: this.title
    }
  }
}
</script>
