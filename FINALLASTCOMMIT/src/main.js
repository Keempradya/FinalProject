import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import firebase from 'firebase';
Vue.config.productionTip = false;
const firebaseConfig = {
  apiKey: "AIzaSyBAyly1fDWhIHHXwJT8IJxLgcuRKKI3Nao",
  authDomain: "finalproject-7c30d.firebaseapp.com",
  projectId: "finalproject-7c30d",
  storageBucket: "finalproject-7c30d.appspot.com",
  messagingSenderId: "320983421190",
  appId: "1:320983421190:web:8dfeb61a1513822d6cce87",
  measurementId: "G-Z531BD72FG"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();



 new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',  
});


