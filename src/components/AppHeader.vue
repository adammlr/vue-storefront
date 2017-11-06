<template>
  <div class="header">
    <router-link to="/"><img src="../assets/ascendon.png"></router-link>
    <ul class="header__nav">
      <li class="header__nav-item"><router-link class="header__anchor" to="/browse">Browse All</router-link></li>
      <li class="header__nav-item">Live</li>
      <li class="header__nav-item">My Stuff</li>
      <li class="header__nav-item">Guide</li>
      <li class="header__nav-item"><router-link class="header__anchor" :to="{ name: 'Product', params: { id: 394921 }}">Movie</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'AppHeader',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>

<style>
  .header{
    background: #2d2d2d;
    color: #fff;
    width:100%;
    height: 60px;
  }
  .header__nav {
    display:inline;
  }
  .header__nav-item {
    display: inline;
    padding-right: 20px;
  }
  .header__anchor {
    color: #fff;
    text-decoration: none;
  }

  .router-link-exact-active {
    border-bottom: solid 2px #eee;
  }
</style>
