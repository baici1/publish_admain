<template>
  <div class='header-container'>
    <div class="qmx">
      <i class="el-icon-s-unfold"></i>
      <span class="text">qmx后台管理系统</span>
    </div>
    <el-dropdown>
      <div class="avater-wrap ">
        <img src="../assets/logoctgu.png" alt="logo">
        <span>用户昵称</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
  <!-- <span class="el-dropdown-link">
    下拉菜单
  </span> -->
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>个人设置</el-dropdown-item>
    <el-dropdown-item>退出登录</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user'
export default {
  name: 'AppHeader',
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {}
  },
  // 计算属性
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    loadUserInfo () {
      getUserInfo().then(res => {
        console.log(res)
      })
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.loadUserInfo()
  },
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
<style lang='less'>
  // @import url(); 引入公共css类
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .header-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .avater-wrap{
    display: flex;
    align-items: center;
    cursor: pointer;
    img{
      width:40px;
      height:40px;
      border-radius: 50%;
      margin-right: 5px;
    }
  }
  .qmx{
    cursor: pointer;
  }
</style>
