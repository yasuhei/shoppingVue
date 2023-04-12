<template>
  <div id="nav">
    <router-link to="/">Início</router-link> 
    <router-link to="/product">Nossos produtos</router-link> 
    <router-link to="/basket"><Icon icon="mdi-light:cart" width="32" />{{ this.productInBag.length }}</router-link> 
  </div>
  <router-view/>
</template>
<script>

import { Icon } from '@iconify/vue';
import { mapState } from 'vuex'

  export default {
    components: {
      Icon
    },
    created() {
      this.$store.dispatch('loadProducts')
      this.$store.dispatch('loadBag')
    },
    computed: mapState([
      'productInBag'
    ])

  }
  
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1280px;
  margin: 68px auto;
}

#nav {
  padding: 16px 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: rgb(37, 37, 37);
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;


  a {
    color: white;
    text-decoration: none;

    &.router-link-exact-active {
      color: #007bff;
    }
  }
}
</style>
