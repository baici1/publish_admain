<template>
  <div class='login-container'>
    <!-- 配置form -->
    <!--
1、给 el-from 组件绑定 model 为表单数据对象
2、给需要验证的表单项 el-form-item 绑定 prop 属性
- 注意：prop 属性需要指定表单对象中的数据名称
3、通过 el-from 组件的 rules 属性配置验证规则
4、ref 的作用主要用来获取表单组件手动触发验证 -->
    <el-form class="login-form" ref="form" :model="user" :rules="rules" status-icon>
    <div class="login-head">
      <img src="./assets/logoctgu.png" alt="logo">
    </div>
      <el-form-item prop="mobile">
    <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop="code">
    <el-input v-model="user.code" placeholder="请输入验证码" ></el-input>
      </el-form-item>
      <el-form-item prop="agree">
    <el-checkbox v-model="user.agree">请点击一下啊</el-checkbox>
      </el-form-item>
      <el-form-item>
    <el-button type="primary" @click="onLogin" class="login-button" :loading="login_loading">登录</el-button>
  </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 当你需要请求时候,添加请求模块
import { login } from '@/api/user'
export default {
  name: 'Loginindex',
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {
      user: {
        mobile: '13911111111', // 手机号
        code: '246810', // 验证码
        agree: false
      },
      login_loading: false, // 加载状态
      rules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'change' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的手机号', trigger: 'change' }
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'change' },
          { pattern: /\d{6}$/, message: '请输入正确的验证码', trigger: 'change' }
        ],
        // 自定义验证规则
        agree: [
          {
            validator: (rule, value, callback) => {
              console.log(value)// 他的值
              console.log(rule)// 表单的规则,用于特殊限制
              if (value) {
                callback()
              } else {
                callback(new Error('未点击'))
              }
            },
            trigger: 'change'
          }
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
    onLogin () {
      console.log('submit!')

      // 2.表单验证
      this.$refs.form.validate((valid, err) => {
        console.log(valid)// 是否验证通过
        console.log(err)// 可以获取错误的信息
        if (!valid) {
          return
        }
        this.login()
      })
    },
    login () {
      // 1.获取表单数据
      const user = this.user
      // 3.验证通过提交
      // 开启加载中loading
      this.login_loading = true
      // 进行请求
      /**
       * 对请求进行封装
       * 1.便于后期维护
       * 2.运用简单
       */

      login(user).then(res => {
        // 4.后端响应结果
        console.log(res)
        // 消息提示(成功)// 成功:xxx
        this.$message({
          message: '恭喜你,登录成功',
          type: 'success'
        })
        // 跳转首页
        this.$router.push({
          name: 'home'
        })
        // 将用户相关数据放到本地存储
        // 本地存储只能存字符串
        // 转为json字符串
        window.localStorage.setItem('user', JSON.stringify(res.data.data))

        // 关闭loading
        this.login_loading = false
      }).catch(err => {
        console.log(err)
        // 消息提示(失败)// 失败:xxx
        this.$message.error('手机号或者验证码输入错误')
        // 关闭loading
        this.login_loading = false
      })
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
