<template>
  <div class="panel">
    <div class="product-metadata">
      <div>Starring:</div>
      <div v-for="person in product.People">{{person.DisplayName}}</div>
      <br/>
      <div>Genres:</div>
      <div>{{product.Genre}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductMetadata',
    props: ['product'],
  };
</script>

<style>
  .product-metadata {
    font-size: smaller;
  }
</style>
