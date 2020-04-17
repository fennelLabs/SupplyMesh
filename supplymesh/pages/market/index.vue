<template>
  <main class="masthead" style="padding-top: 75px; height: auto;">
    <div
      id="app"
      class="container text-dark rounded"
      style="background-color: RGBA(248, 249, 250, .8);"
    >
      <h1 style="padding-top: .3em;">{{ heading }}</h1>
      <div class="d-flex flex-wrap justify-content-around align-items-stretch">
        <market
          v-for="supplyRequest in supplyRequests"
          :key="supplyRequest.id"
          :supply-request="supplyRequest"
        ></market>
      </div>
    </div>
  </main>
</template>

<script>
import Market from '~/components/market_page/Market.vue'

export default {
  name: 'SupplyMeshMarket',
  components: {
    Market
  },
  data() {
    return {
      title: 'SupplyMesh - Market',
      heading: 'Request Market',
      supplyRequests: [
        {
          id: 423232,
          title: 'Latex Gloves',
          description: 'Gloves necessary for healthy health health healing.',
          hospital: 'Sacred Heart Hospital',
          funding: '30',
          img: '../img/medicalgloves.jpg'
        },
        {
          id: 323222,
          title: 'Surgical Masks',
          description: 'Masks necessary for healthy health health healing.',
          hospital: 'Our Lady of Perpetual Funding Hospital',
          funding: '23',
          img: '../img/facemask.jpg'
        },
        {
          id: 253222,
          title: 'N95 Masks',
          description: 'Masks necessary for breathy breath breath breathing.',
          hospital: 'Copenhagen MD',
          funding: '64000',
          img: '../img/m95mask.jpg'
        },
        {
          id: 237222,
          title: 'Surgical Masks',
          description: 'Masks necessary for healthy health health healing.',
          hospital: 'Sacred Heart Hospital',
          funding: '30',
          img: '../img/facemask.jpg'
        },
        {
          id: 239222,
          title: 'CDC Suit',
          description: 'Suit necessary for healthy health health healing.',
          hospital: 'Our Lady of Perpetual Funding Hospital',
          funding: '23',
          img: '../img/cdcsuit.jpg'
        },
        {
          id: 232022,
          title: 'N95 Mask',
          description: 'Mask necessary for breathy breath breath breathing.',
          hospital: 'Copenhagen MD',
          funding: '64000',
          img: '../img/m95mask.jpg'
        },
        {
          id: 232282,
          title: 'Surgical Masks',
          description: 'Masks necessary for healthy health health healing.',
          hospital: 'Sacred Heart Hospital',
          funding: '30',
          img: '../img/facemask.jpg'
        },
        {
          id: 232225,
          title: 'Surgical Masks',
          description: 'Masks necessary for healthy health health healing.',
          hospital: 'Our Lady of Perpetual Funding Hospital',
          funding: '23',
          img: '../img/facemask.jpg'
        },
        {
          id: 232422,
          title: 'Latex Gloves',
          description: 'Gloves necessary for breathy breath breath breathing.',
          hospital: 'Copenhagen MD',
          funding: '64000',
          img: '../img/medicalgloves.jpg'
        }
      ]
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
