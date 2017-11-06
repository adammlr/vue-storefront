<template>
  <div class="pricing-plan-list">
    <button v-for="plan in plans" class="pricing-plan-list__item" v-on:click="planClick(plan)">{{plan.Name}}</button>
  </div>
</template>

<script>
  export default {
    name: 'PricingPlanList',
    props: ['plans'],
    methods: {
      planClick(plan) {
        this.$emit('planClick', plan);
      },
    },
  };
</script>

<style>
  .pricing-plan-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .pricing-plan-list__item {
    height: 40px;
    width: 300px;
    margin: 10px auto;
    cursor: pointer;
  }
</style>
