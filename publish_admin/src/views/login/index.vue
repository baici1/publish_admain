<template>
  <div class='login-container'>
    <el-form class="login-form" ref="form" :model="user">
    <div class="login-head">
      <img src="./assets/logoctgu.png" alt="logo">
    </div>
      <el-form-item >
    <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item >
    <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
      </el-form-item>
      <el-form-item>
    <el-button type="primary" @click="onLogin" class="login-button">登录</el-button>
  </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 当你需要请求时候,添加请求模块
import request from '@/utils/request'
export default {
  name: 'Loginindex',
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {
      user: {
        mobile: '13911111111', // 手机号
        code: '246810'// 验证码
      }
    }
  },
  // 计算属性
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    onLogin () {
      console.log('submit!')
      // 1.获取表单数据
      const user = this.user

      // 2.表单验证
      // 3.验证通过提交
      request({
        method: 'POST',
        url: '/mp/v1_0/authorizations',
        data: user
      }).then(res => {
        console.log(res)
        this.$message({
          message: '恭喜你,登录成功',
          type: 'success'
        })
      }).catch(err => {
        console.log(err)
        this.$message.error('手机号或者验证码输入错误')
      })
      // 4.后端响应结果
      // 成功:xxx
      // 失败:xxx
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
<style lang="less">
  // @import url(); 引入公共css类
  .login-container{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url('./assets/005100-1592412660d6f4.jpg') no-repeat ;
    background-size: cover;
  }
  .login-head{
    height:122px;
    display: flex;
     justify-content: center;
    align-items: center;
  }
  .login-head img{
    height:122px;
    width:114px;
  }
  .login-form{
    background:#fff;
    padding:0 50px 10px;
    min-width: 300px;
    opacity: 0.7;
    border-radius:5px;
  }
  .login-button{
    width:100%;
  }
</style>
