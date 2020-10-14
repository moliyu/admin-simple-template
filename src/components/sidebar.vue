<template>
  <div class="sidewarpper">
    <el-menu :default-active="active" background-color='#f5f5f5' text-color="" active-text-color="#409eff" :router="true" :unique-opened="true" @select="handleSelect">
      <sidebarItem
      v-for="(item, i) in routes"
      :key="i"
      :route="item"
      ></sidebarItem>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import sidebarItem from './sidebarItem'
export default {
  data() {
    return {
      active: ''
    }
  },
  components: {
    sidebarItem
  },
  computed: {
    ...mapState({
      routes: state => state.router.routes
    })
  },
  mounted() {
    this.active = this.$route.path
  },
  watch: {
    $route() {
      this.active = this.$route.fullPath
    }
  },
  methods: {
    handleSelect(key, path) {
      console.log('888--', key, path)
    }
  }
}
</script>

<style lang="scss" scoped>
.sidewarpper /deep/ {
  .el-menu {
    border: 0;
  }
}
</style>