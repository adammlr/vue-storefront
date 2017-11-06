<template>
  <div class="panel">
    <div class="product-header">
      <img :src="product.ThumbnailUrl" class="product-header__image">
      <div class="product-header__text">
        <h2>{{ product.Name }}</h2>
        <p>{{ product.Description }}</p>
        <pricing-plan-list :plans="product.PricingPlans" @planClick="pricingPlanClick"></pricing-plan-list>
      </div>
    </div>
  </div>
</template>

<script>
  import PricingPlanList from './PricingPlanList';

  export default {
    components: { PricingPlanList },
    name: 'ProductHeader',
    props: ['product'],
    methods: {
      pricingPlanClick(plan) {
        this.$emit('pricingPlanClicked', plan);
      },
    },
  };
</script>

<style>
  .product-header {
    display: flex;
    align-items: flex-start;
  }

  .product-header__image {
    display: inline-block;
  }

  .product-header__text {
    padding: 10px;
  }
</style>
