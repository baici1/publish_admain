<template>
  <div class="login_container">
    <div class="login_box">
<section class="w3l-login">
  <div class="overlay">
     <div class="wrapper" v-if="isshow">
     <div class="logo">
          <a class="brand-logo" href="index.html">Snow login form</a>
    </div>
    <div class="form-section" v-if="isshow">
     <h3>Login</h3>
     <h6>To continue with Us</h6>
     <el-form ref="form" class="signin-form" :model="form" :rules="rules">
      <div class="form-input">
       <input type="text" name="username" placeholder="Username" required="" autofocus v-model="form.name">
      </div>
      <div class="form-input">
       <input type="password" name="password" placeholder="Password" required="" v-model="form.password">
      </div>
      <label class="check-remaind">
       <input type="checkbox">
       <span class="checkmark"></span>
       <p class="remember">Remember me</p>
      </label>
      <el-button type="primary" class="btn btn-primary theme-button mt-4"  @click="login">Login</el-button>
     </el-form>
     <p class="signup">Don’t have account yet? <a href="#" class="signuplink" @click="show">Sign Up</a></p>
    </div>
   </div>
        <div class="wrapper" v-else>
     <div class="logo">
          <a class="brand-logo" href="index.html">Snow register form</a>
    </div>
    <div class="form-section" >
     <h3>Sign Up</h3>
     <h6>To continue with Us</h6>
     <el-form ref="form" class="signin-form" :model="form" :rules="rules">
      <div class="form-input">
       <input type="text" name="username" placeholder="Username" required="" autofocus v-model="form.name">
      </div>
      <div class="form-input">
       <input type="password" name="password" placeholder="Password" required="" v-model="form.password">
      </div>
      <el-button type="primary" class="btn btn-primary theme-button mt-4"  @click="register">register</el-button>
     </el-form>
     <p class="signup">Please login as soon as possible!  <a href="#" class="signuplink" @click="show">Login</a></p>
    </div>

   </div>
  </div>
  <div id='stars'></div>
  <div id='stars2'></div>
  <div id='stars3'></div>

  <!-- copyright -->
  <div class="copy-right">
   <p>&copy; 2020 Snow Login Form. All rights reserved | Design by <a href="http://w3layouts.com/" target="_blank">W3Layouts</a></p>
  </div>
  <!-- //copyright -->
   </section>

    </div>
  </div>
</template>

<script>
import './assets/css/style.css'
export default {
  name: 'login',
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {
      isshow: true,
      form: {
        name: 'yay',
        password: '123456'
      },
      rules: {
        name: [
          { required: true, message: '用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '用户名', trigger: 'blur' }
        ]
      }
    }
  },
  // 计算属性
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    async login () {
      const { data: result } = await this.$http.post(`/admin/login?name=${this.form.name}&password=${this.form.password}`)
      console.log(result)
      if (result.code !== '200') {
        this.$message.error('用户名或密码错误')
      } else {
        this.$message({
          message: '恭喜你,登录成功',
          type: 'success'
        })
      }
      window.sessionStorage.setItem('token', result.data.token)
      this.$router.push('/Home')
    },
    async register () {
      const { data: result } = await this.$http.post(`/admin/register?name=${this.form.name}&password=${this.form.password}`)
      console.log(result)
      if (result.code !== '200') {
        this.$message.error('注册失败')
      } else {
        this.$message({
          message: '恭喜你,注册成功,请立即登录',
          type: 'success'
        })
      }
    },
    show () {
      this.isshow = !this.isshow
      if (this.isshow === true) {
        this.$message('登录ing')
      } else {
        this.$message('注册ing')
      }
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {},
  // 这里存放数据
  beforeCreate () {},
  // 生命周期 - 挂载之前
  beforeMount () {},
  // 生命周期 - 更新之前
  beforeUpdate () {},
  // 生命周期 - 更新之后
  updated () {},
  // 生命周期 - 销毁之前
  beforeDestroy () {},
  // 生命周期 - 销毁完成
  destroyed () {},
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated () {}
}
</script>
<style lang='less' scoped>
</style>
