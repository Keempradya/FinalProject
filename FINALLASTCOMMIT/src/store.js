import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Male: [
      {
        name: 'Nike Blazer Low X',
        price: 3500,
        image: require('./assets/images/product1.png'),
      },
      {
        name: 'Nike Crater Impact',
        price: 3600,
        image: require('./assets/images/product2.png'),
  
      },
      {
        name: 'Nike AF1/1',
        price: 5500,
        image: require('./assets/images/product3.png'),
      },
      {
        name: 'Nike ZoomX Vaporfly Next% 2',
        price: 7500,
        image: require('./assets/images/product4.png'),
  
      },
      {
        name: 'Nike Air VaporMax Evo',
        price: 7200,
        image: require('./assets/images/product5.png'),
      },
      {
        name: 'Nike Blazer Mid 77 Vintage',
        price: 4200,
        image: require('./assets/images/product6.png'),
        
      },
    ],
    Female: [{
        name: 'Nike React Infinity Run Flyknit',
        price: 5800,
        image: require('./assets/images/product7.png'),
        
      },
      {
        name: 'Nike Air Max Viva',
        price: 5200,
        image: require('./assets/images/product8.png'),
        
      },
      {
        name: 'Nike ZoomX Invincible Run Flyknit',
        price: 6400,
        image: require('./assets/images/product9.png'),
        
      },
      {
        name: 'Nike Air Zoom SuperRep 2',
        price: 4600,
        image: require('./assets/images/product10.png'),
       
      },
      {
        name: 'Nike React Escape Run',
        price: 3600,
        image: require('./assets/images/product11.png'),
        
      },
      {
        name: 'Nike Ryz 365 2',
        price: 3100,
        image: require('./assets/images/product12.png'),
        
      },
    ],
    cartProducts: [],
    currentProduct: {},
    showModal: false,
    showPopupCart: false,
  },

  getters: {
    getMaleShoes: state => state.Male,
    getFemaleShoes: state => state.Female,
    getAllProducts: state => state.Male.concat(state.Female),
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
    getShowModal: state => state.showModal,
    getPopupCart: state => state.showPopupCart,
  },

  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    SHOW_MODAL: (state) => {
      state.showModal = !state.showModal;
    },
    SHOW_POPUP_CART: (state) => {
      state.showPopupCart = !state.showPopupCart;
    },
  },

  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL');
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART');
    },
  },
});
