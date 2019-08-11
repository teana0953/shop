<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-header></app-header>
        <router-view></router-view>
        <!-- <app-shop></app-shop> -->
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    appHeader: Header
    // appShop: Shop
  }
};
</script>

<style>
div.component {
  /* border: 1px solid black; */
  padding: 30px;
}
</style>
