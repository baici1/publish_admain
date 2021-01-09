// 存放用于用户相关的请求模块

import request from '@/utils/request'
// 用户登录
export const login = (user) => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data: user
  })
}
// 获取用户信息
export const getUserInfo = () => {
  const user = JSON.parse(window.localStorage.getItem('user'))// 获取本地信息
  return request({
    method: 'GET',
    url: '/mp/v1_0/user/profile',
    // 请求头
    // 获取token 把token本地存储
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
