<template>
  <el-row class="item" v-if="!route.hidden">
    <el-menu-item v-if="singleChild(route)" :index="route.path + '/' + route.children[0].path">
      <svg-icon :iconClass="route.children[0].meta.icon" class="mr-1"></svg-icon>
      <span>{{route.children[0].meta.name}}</span>
    </el-menu-item>
    <el-submenu v-else :index="route.path">
      <template slot="title">
        <svg-icon :iconClass="route.meta.icon" v-if="route.meta" class="mr-1"></svg-icon>
        <span v-if="route.meta">{{route.meta.name}}</span>
      </template>
      <div v-if="route.hasOwnProperty('children')">
        <el-menu-item v-for="(item, i) in route.children" :key="i" :index="route.path + '/' + item.path">
          <svg-icon :iconClass="item.meta.icon" v-if="item.meta" class="mr-1"></svg-icon>
          <span v-if="item.meta">{{item.meta.name}}</span>
        </el-menu-item>
      </div>
    </el-submenu>
  </el-row>
</template>

<script>
export default {
  props: {
    route: null
  },
  methods: {
    singleChild(route) {
      if (route.children && route.children.length === 1) {
        return true
      }
      return false
    }
  },
  mounted() {
    console.log('route', this.route)
  }
}
</script>

<style lang="scss" scoped>
// .el-menu-item.is-active {
//   svg {
//     color: red;
//   }
// }
</style>