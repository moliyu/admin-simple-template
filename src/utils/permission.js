import router from '@/router'
import store from '@/store'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const whiteList = ['/login']
router.beforeEach(async(to, from, next) => {
  nprogress.start()
  document.title = to.meta.name
  const token = store.state.user.token
  if (token) {
    if (to.path === '/login') {
      next({ path: '/home' })
      nprogress.done()
    } else if (whiteList.includes(to.path)) {
      next()
      nprogress.done()
    } else {
      if (store.state.user.userId) {
        next()
      } else {
        const res = await store.dispatch('user/auth', token)
        const permissionRoutes = await store.dispatch('router/getRoutes', { roles: res.authorities, names: res.resources })
        await router.addRoutes(permissionRoutes)
        next({ ...to, replace: true })
      }
      nprogress.done()
    }
  } else if (whiteList.includes(to.path)) {
    next()
    nprogress.done()
  } else {
    next({ path: '/login' })
    nprogress.done()
  }
})

router.afterEach(() => {
  nprogress.done()
})