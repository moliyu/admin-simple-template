import request from '@/plugins/axios'
const url = process.env.VUE_APP_ORION

// 用户登录
export const login = (data) => request.post(`${url}/users/common/login`, data)
// 根据token验证身份
export const auth = () => request.get(`${url}/users/common/auth-info`)
