<template>
  <div>
    <LPHeader />
    <LPSection1 />
    <LPSection2 />
    <LPSection3 />
    <LPSection4 />
  </div>
</template>

<script>
import LPHeader from '~/components/landing_page/LPHeader.vue'
import LPSection1 from '~/components/landing_page/LPSection1.vue'
import LPSection2 from '~/components/landing_page/LPSection2.vue'
import LPSection3 from '~/components/landing_page/LPSection3.vue'
import LPSection4 from '~/components/landing_page/LPSection4.vue'
export default {
  components: {
    LPHeader,
    LPSection1,
    LPSection2,
    LPSection3,
    LPSection4
  },
  data() {
    return {
      title: 'SupplyMesh'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>

<style></style>
