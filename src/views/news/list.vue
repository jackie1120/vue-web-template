<template>
  <div>
    <h1>{{ $route.meta.title || 'news list' }}</h1>
    <el-button type="primary">Test</el-button>
    <base-test></base-test>
    <ul>
      <li><router-link to="/news/edit">news item</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
h1 {color: $--color-primary}
</style>
