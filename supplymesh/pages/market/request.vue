<template>
  <main class="masthead" style="padding-top: 75px; height: auto;">
    <div
      id="app"
      class="container text-dark rounded-top"
      style="background-color: RGBA(248, 249, 250, .8);"
    >
      <h1 style="padding-top: .3em;">Request #{{ this.$route.query.id }}</h1>
      <div class="d-flex flex-wrap justify-content-around">
        <div class="card" style="width: auto; margin-bottom: 2em;">
          <img
            class="card-img-top"
            :src="supplyRequest.img"
            alt="Card image cap"
          />
          <div class="card-body">
            <h3 class="card-title">{{ supplyRequest.title }}</h3>
            <p class="card-text">
              {{ supplyRequest.description }}
              <br />
              <span class="text-muted">{{ supplyRequest.hospital }}</span>
              <br />
              <span class="card-text text-success"
                >$ {{ supplyRequest.funding }} raised</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'SupplyMeshMarketRequest',
  data() {
    return {
      title: 'SupplyMesh - Market Request',
      heading: 'Request Market Request',
      params: [],
      supplyRequest: {
        id: 423232,
        title: 'Surgery Masks',
        description: 'Masks necessary for healthy health health healing.',
        hospital: 'Sacred Heart Hospital',
        funding: '30',
        img: '../img/facemask.jpg'
      }
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
