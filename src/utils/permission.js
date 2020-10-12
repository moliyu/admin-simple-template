import router from '@/router'
import store from '@/store'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const whiteList = ['/login']
router.beforeEach(async(to, from, next) => {
  nprogress.start()
  document.title = to.meta.name
  const token = store.state.user.token
  console.log('token', token, to)
  if (token) {
    if (to.path === '/login') {
      next({ path: '/home' })
      nprogress.done()
    } else if (whiteList.includes(to.path)) {
      next()
      nprogress.done()
    } else {
      const res = await store.dispatch('user/auth', token)
      console.log('mmm',  res)
      next()
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