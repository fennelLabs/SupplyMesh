<template>
  <nav id="mainNav" class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container">
      <nuxt-link class="navbar-brand js-scroll-trigger" to="/"
        >SupplyMesh</nuxt-link
      >
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div id="navbarResponsive" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <nuxt-link class="nav-link js-scroll-trigger" to="/market"
              >Market</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link js-scroll-trigger" to="/setup"
              >Setup</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link js-scroll-trigger" to="/request-supplies"
              >Request Supplies</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
