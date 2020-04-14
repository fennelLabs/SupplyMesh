<template>
  <a :href="'market/request?id=' + supplyRequest.id">
    <div class="card" style="width: 18rem; margin-bottom: 2em;">
      <img class="card-img-top" :src="supplyRequest.img" alt="Card image cap" />
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
  </a>
</template>

<script>
export default {
  name: 'Market',
  props: { supplyRequest: { type: Object, required: true } }
}
</script>
