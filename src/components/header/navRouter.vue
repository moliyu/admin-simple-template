<template>
  <div class="navrouter">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="item in routes" :key="item.path">{{item.meta.name}}</el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: []
    }
  },
  created() {
    this.getRoutes()
  },
  watch: {
    $route() {
      this.getRoutes()
    }
  },
  methods: {
    getRoutes() {
      // let list = []
      // this.$route.matched.forEach(item => {
      //   if (item.meta && item.meta.name) {
      //     list.push(item)
      //   }
      // })
      this.routes = this.$route.matched.filter(item => item.meta && item.meta.name)
    }
  }
}
</script>

<style lang="scss" scoped>
.navrouter {
  padding: 0 $pd1;
  & /deep/ {
    .el-breadcrumb__item {
      .el-breadcrumb__inner {
        color: $bg-gray;
        font-weight: bold;
      }
    }
  }
}
/* breadcrumb transition */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all .5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all .5s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>