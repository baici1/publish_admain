<template>
  <el-container class="layout-container">
    <!-- 侧边栏 -->
    <el-aside width="200px" class="aside">
      <AppAside class="aside-menu"/>
    </el-aside>
  <el-container>
    <!-- 顶部导航栏 -->
    <el-header class="header">
      <AppHeader class="header-app"/>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</el-container>

</template>

<script>
import AppAside from './components/aside'
import AppHeader from './components/header'
export default {
  name: 'layout',
  // import引入的组件需要注入到对象中才能使用
  components: {
    AppAside,
    AppHeader
  },
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

  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

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
  .aside{
    background:rgb(84,92,100);
  .aside-menu{
    height: 100%;
  }
  }
  .header{
    background:rgb(200,235,223);
    .header-app{
      height: 100%;
    }
  }
  .layout-container{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

  }
</style>
