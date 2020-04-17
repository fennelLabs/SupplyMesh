<template>
  <b-jumbotron>
    <template v-slot:header>Setup Guide</template>

    <template v-slot:lead>
      Getting started with SupplyMesh is easy. This page will guide you through
      the steps of installing Metamask and using it to let you interact with the
      SupplyMesh smart contract on Ethereum.
    </template>

    <hr class="my-4" />

    <p>
      This page will guide you through the steps of installing Metamask and
      using it to let you interact with the SupplyMesh smart contract on
      Ethereum.
    </p>
    <h1>
      What do I need to use SupplyMesh?
    </h1>

    <div role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-1 block href="#"
            >A computer running Chrome, Firefox, or Brave.</b-button
          >
        </b-card-header>
        <b-collapse
          id="accordion-1"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text
              >We recommend sticking with Chrome, Firefox, or Brave. It may be
              technically possible to use another browser, but we can’t
              guarantee optimal performance, so you may want to steer
              clear.</b-card-text
            >
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-2 block href="#"
            >A digital wallet.</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text
              >To use SupplyMesh, you need a digital wallet. We support all
              digital wallets, but recommend Metamask for the best SupplyMesh
              experience.</b-card-text
            >
            <b-card-text
              >You’ll need to put money in your wallet to make your first
              purchase. We can show you how to do that, too.</b-card-text
            >
            <b-card-text
              >Note: A digital wallet acts like a bank account — treat it with
              respect and make sure you don’t forget your password or lose your
              recovery kit.</b-card-text
            >
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-3 block href="#"
            >Ethereum, a digital currency.</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text
              >Ether is a digital currency that powers the Ethereum network,
              which is what SupplyMesh is built on. Ether acts like any other
              currency — its value fluctuates with the market.</b-card-text
            >
            <b-card-text
              >You need to convert your currency (e.g. USD, CAD, GBP) into ether
              to pay for things — such as crowdfunding Supply Requests — on the
              Ethereum network.</b-card-text
            >
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
    <h1>
      Installing Metamask
    </h1>
    <p>
      Follow this link to go to the Metamask site.
      <a href="https://metamask.io/">https://metamask.io/</a>
    </p>
    <b-img fluid src="~/assets/gif/MetamaskInstall.gif" />
    <p>
      On the Metamask site, click 'Download Now' and on the next page select the
      Metamask download link for your respective browser.
    </p>
    <h1>
      Fund your Metamask wallet
    </h1>
    <p>
      In order to add funds to your wallet you will need to purchase Ether and
      send it to your Metamask wallet's address. You can do this through a
      service like Wyre:
    </p>
    <b-img fluid src="~/assets/gif/MetamaskAddFunds01.gif" />
  </b-jumbotron>
</template>
