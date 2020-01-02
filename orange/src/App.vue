<template>
  <div id="app">
    <p>
      <router-link to="/home">Home</router-link>
      <router-link to="/user">My Info</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
</style>
