<template>
  <div>
    <div v-if="loading">
      Loading...
    </div>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="product">
      <product-header :product="product" @pricingPlanClicked="pricingPlanClick"></product-header>
      <product-metadata :product="product"></product-metadata>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import ProductMetadata from './ProductMetadata';
  import ProductHeader from './ProductHeader';

  export default {
    name: 'Product',
    components: {
      ProductHeader,
      ProductMetadata,
    },
    props: ['id'],
    data() {
      return {
        loading: false,
        product: null,
        error: null,
      };
    },
    created() {
      this.fetchData();
    },
    watch: {
      $route: 'fetchData',
    },
    methods: {
      fetchData() {
        this.error = null;
        this.product = null;
        this.loading = true;

        axios.get(`https://qa8.metadata.ascendon.tv/Product/DeviceType/4/DistributionChannel/fa73f2bf-a3d5-4f28-b51f-af127ea43463/SystemId/f2a9c1d7-2362-4012-9c20-01255feb2018/Language/en-US/Id/${this.id}`)
          .then((response) => {
            this.loading = false;
            if (response.data.Fault) {
              this.error = response.data.Fault.Message;
            } else {
              this.product = response.data.Product;
            }
          })
          .catch(() => {
            this.loading = false;
            this.error = 'Unable to make request';
          });
      },
      pricingPlanClick(plan) {
        console.log('purchase plan', plan.Id); //eslint-disable-line
      },
    },
  };
</script>

<style>

</style>
