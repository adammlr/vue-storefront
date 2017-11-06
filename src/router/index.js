import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Browse from '@/components/Browse';
import Product from '@/components/Product';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
    },
    {
      path: '/browse',
      name: 'Browse',
      component: Browse,
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product,
      props: true,
    },
  ],
});
