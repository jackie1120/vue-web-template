<template>
  <div class="home">
    <header>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/news">News</router-link>
      </div>
    </header>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
