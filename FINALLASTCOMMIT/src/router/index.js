import Vue from 'vue';
import Router from 'vue-router';
import AllProducts from '../components/AllProducts';
import FemaleShoes from '../components/FemaleShoes';
import MaleShoes from '../components/MaleShoes';
import Product from '../components/Product';
import CartCheckout from '../components/CartCheckout';
import Login from '../components/Login';
import Register from '../components/Register';

Vue.use(Router)

export default new Router({
  
  routes: [
    {
      path: '',
      name: 'All Products',
      component: AllProducts,
    },
    {
      path: '/Female',
      name: 'Female',
      component: FemaleShoes,
    },
    {
      path: '/Male',
      name: 'Male',
      component: MaleShoes,
    },
    {
      path: '/product-details',
      name: 'Product',
      component: Product,
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: CartCheckout,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
    },
  ],
  
});
