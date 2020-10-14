import request from '@/plugins/axios'
const url = process.env.VUE_APP_ORION

// 用户登录
export const login = (data) => request.post(`${url}/users/common/login`, data)
// 验证路由权限信息
export const auth = () => request.get(`${url}/users/common/auth-info`)
// 退出登录
export const logout = () => request.put(`${url}/users/common/logout`)
// 获取用户信息
export const UserInfo = id => request.get(`${url}/users/admin/${id}`)
