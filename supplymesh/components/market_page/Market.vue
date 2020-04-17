<template>
  <a :href="'market/request?id=' + supplyRequest.id" style="margin-bottom:2em;">
    <div class="card" style="width: 18rem; height: 100%;">
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
