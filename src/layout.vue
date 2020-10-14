<template>
  <div class="layout">
    <div class="sidebar" :class="active==='1'&&'sidebar-collpase'">
      <sidebar />
    </div>
    <div class="wrapper">
      <navHeader></navHeader>
      <transition name="fade-transform" mode="out-in">
        <router-view :key="key" class="p-1"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import sidebar from '@/components/sidebar'
import navHeader from '@/components/header'
import { mapState } from 'vuex'
export default {
  components: {
    sidebar,
    navHeader
  },
  computed: {
    key() {
      return this.$route.fullPath
    },
    ...mapState({
      active: state => state.layout.active
    })
  }
}
</script>

<style lang="scss" scoped>

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.layout {
  display: flex;
  min-height: 100vh;
  .sidebar {
    width: 200px;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    background: $theme-color;
    z-index: 10;
    transition: all .3s linear;
    &::-webkit-scrollbar-track-piece {
      background: #d3dce6;
    }

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background: #99a9bf;
      border-radius: 20px;
    }
  }
  .sidebar-collpase {
    width: 0;
    transition: all .3s linear;
  }
  .wrapper {
    // width: calc(100% - 200px)
    flex: 1;
  }
}
</style>