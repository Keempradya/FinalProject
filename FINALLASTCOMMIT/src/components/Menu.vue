<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav-links">
        <li class="link">
          <router-link to="/">AllProducts</router-link>
        </li>
        <li class="link">
          <router-link to="/Female">Female Shoes</router-link>
        </li>
        <li class="link">
          <router-link to="/Male">Male Shoes</router-link>
        </li>
        <li class="link">
          <router-link to="/login">Login</router-link>
        </li>
        
      
      </ul>
    </nav>
    <slot></slot>
  </header>
</template>

<script>
import firebase from 'firebase'
export default {
  
};
</script>

<style scoped>
  .header {
    width: 100%;
    height: 50px;
    background-color: #333333;
    box-sizing: border-box;
    padding: .6em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav {
    width: 1000px;
  }

  .nav-links {
    width: 120%;
    display: flex;
    justify-content: flex-start;
  }

  .link {
    list-style: none;
    padding: 0 2em;
  }

  .link a {
    color: #fff;
    text-decoration: none;
  }
</style>
