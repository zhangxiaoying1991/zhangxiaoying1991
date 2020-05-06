<template>
  <div id="app">
    <!-- <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link> -->
    <el-menu
      :default-active="this.$router.path"
      class="el-menu-demo"
      mode="horizontal"
      router
      @select="handleSelect"
    >
      <el-menu-item index="home">宝贝日记</el-menu-item>
      <el-menu-item index="about">时光宝盒</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style></style>
