<template>
  <div id="app">
    <a-button>按钮</a-button>
    <div id="nav">
      <p>
        <router-link to="/home">Home</router-link>
        <router-link to="/user">My Info</router-link>
      </p>
    </div>
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
