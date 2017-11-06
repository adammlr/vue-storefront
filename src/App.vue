<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader';

export default {
    components: { AppHeader },
    name: 'app',
};
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: Lato, sans-serif;
    background: #060606;
    color: #eee;
  }

  #app {
    width:1000px;
    margin: auto;
  }

  .panel {
    background: #212121;
    padding: 10px;
    margin-top: 10px;
  }
</style>
