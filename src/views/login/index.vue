<template>
  <el-row class="login page">
    <h2>系统模板</h2>
    <el-row class="login-wrapper mt-1">
      <el-row class="text-c p-1">登录</el-row>
      <el-form ref="form" :rules="rules" :model="form">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="form.name" @keyup.enter.native="login"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" @keyup.enter.native="login"></el-input>
        </el-form-item>
        <el-row class="text-c">
          <el-button type="primary" style="width: 200px" @click="login">登录</el-button>
        </el-row>
      </el-form>
    </el-row>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        password: null
      },
      rules: {
        name: [{ required: 'true', message: '用户名不能为空' }],
        password: [{ required: 'true', message: '密码不能为空' }]
      }
    }
  },
  methods: {
    login() {
      this.$refs.form.validate(async validate => {
        if (validate) {
          await this.$store.dispatch('user/userLogin', { userName: this.form.name, password: this.form.password })
          this.$router.push({ path: '/home' })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $gray;
  flex-direction: column;
  .login-wrapper {
    width: 600px;
    height: 350px;
    border: 3px solid $theme-color;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: $pd3;
    &:hover {
      border: 3px solid $theme-color;
      box-shadow: 0 0 10px $theme-color;
    }
  }
}
</style>