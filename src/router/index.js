// // import { useMemberStore } from '@/stores'
// import { createRouter, createWebHashHistory } from 'vue-router'

// const routes = [
//   {
//     path: '/',
//     component: () => import('@/views/index/index.vue'),
//   },
// ]

// // 创建路由实例
// const router = createRouter({
//   // 创建 hash 路由模式
//   history: createWebHashHistory(),
//   // 路由规则
//   routes,
//   // VueRouter@4官网 - 进阶 - 滚动行为
//   scrollBehavior: () => {
//     // 始终滚动到顶部
//     return { top: 0 }
//   },
// })

// // 📌需求：已登录的用户才允许访问个人中心。
// // （未登录怎么？跳转到登录页并携带回跳地址）
// // 导航守卫 - 全局前置守卫
// // VueRouter4升级: return 取代了以前的 next() 放行函数
// // return true 或 undefined(没写return) 都默认放行
// // router.beforeEach((to) => {
// // const { member } = useStore()
// // 进行判断：未登录情况但是访问 /member 开头的路径，需要跳转登录页
// // if (!member.isLogin && to.path.startsWith('/member')) {
// //   return `/login?target=${to.fullPath}`
// // }
// // const store = useMemberStore()
// // console.log(to)
// // })

// export default router

import { createRouter, createWebHashHistory } from 'vue-router'
const pages = import.meta.glob('../views/**/page.js', {
  eager: true,
  import: 'default',
})
const views = import.meta.glob('../views/**/index.vue')
const routes = Object.entries(pages).map(([path, meta]) => {
  const comp = path.replace('page.js', 'index.vue')
  path = path.replace('../views', '').replace('/page.js', '') || '/'
  const name = path.split('/').filter(Boolean).join('-') || 'index'
  return {
    path,
    name: name,
    component: views[comp],
    meta,
  }
})
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
router.beforeEach((to, from) => {
  // ...
  // 返回 false 以取消导航
  console.log(to, from, 'beforeEach')
  return true
})
export default router
