<template>
  <div class="layout">
    <div class="sidebar">123</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100vh;
  .sidebar {
    width: 200px;
    background: $theme-color;
  }
}
</style>