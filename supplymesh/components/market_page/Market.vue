<template>
  <a :href="'market/request?id=' + supplyRequest.id">
    <div class="card" style="width: 18rem; margin-bottom: 2em;">
      <div id="supplymesh-info">
        <p v-if="isInjected" id="has-metamask">
          <i aria-hidden="true" class="fa fa-check"></i> Metamask installed
        </p>
        <p v-else id="no-metamask">
          <i aria-hidden="true" class="fa fa-times"></i> Metamask not found
        </p>
        <p>Network: {{ network }}</p>
        <p>Account: {{ coinbase }}</p>
        <p>Balance: {{ balance }} Wei / {{ ethBalance }} ETH</p>
      </div>
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
