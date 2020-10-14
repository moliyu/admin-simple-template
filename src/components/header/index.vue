<template>
  <div class="header">
    <hamburger class="hamburger mr-2" :isActive="active" @toggleClick="toggleClick"></hamburger>
    <navrouter></navrouter>
    <div class="flex"></div>
    <el-dropdown class="mr-3" trigger="click">
      <div class="avatar">
        <img :src="avatar ? avatar : noAvartar" alt="">
        <i class="el-icon-caret-bottom drop"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="logout">登出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import hamburger from '@/components/Hamburger'
import { mapState } from 'vuex'
import { logout } from '@/api/user'
import navrouter from './navRouter'
export default {
  data() {
    return {
      noAvartar: require('@/assets/avatar.jpg')
    }
  },
  components: {
    hamburger,
    navrouter
  },
  computed: {
    ...mapState({
      active: state => state.layout.active,
      avatar: state => state.user.avatar
    })
  },
  mounted() {
  },
  methods: {
    toggleClick() {
      if (this.active === '0') {
        this.$store.commit('layout/TOGGLE', '1')
      } else {
        this.$store.commit('layout/TOGGLE', '0')
      }
    },
    async logout() {
      try {
        await logout()
        this.$store.dispatch('user/resetLogin')
        this.$router.push({ path: '/login' })
      } catch (error) {
        this.$message.error(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
  background: $theme-color;
  .hamburger {
    cursor: pointer;
  }
  .avatar {
    position: relative;
    cursor: pointer;
    img {
      display: block;
      width: 35px;
      height: 35px;
      border-radius: 8px;
    }
    .drop {
      position: absolute;
      right: -18px;
      bottom: $pd1;
      color: $gray;
    }
  }
}
</style>