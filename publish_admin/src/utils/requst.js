// 基于axios请求
import axios from 'axios'

// 我们通过这个实例去发请求，把需要的配置配置给这个实例来处理
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/' // 请求的基础路径
})
// 导出请求方法
export default request
