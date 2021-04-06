<template>
  <listOfProducts :products="getFemaleShoes"/>
</template>

<script>
import { mapGetters } from 'vuex';
import listOfProducts from './ListOfProducts';
import firebase from "firebase";

export default {
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          this.$router.replace("/login")
          alert("You are Signed Out")
        }
    });
  },
 
  components: {
    listOfProducts,
  },

  computed: {
    ...mapGetters([
      'getFemaleShoes',
    ]),
  },
};
</script>

<style>
</style>

