import Vue from 'vue'
import Route from 'vue-router'
import HelloWorld from './components/HelloWorld'
import A from './components/A'
// import B from './components/B'

Vue.use(Route)
const routes = [
    {path: '/hello-world', component: HelloWorld, meta: {title: 'HelloWorld'}},
    // {path: '/b', component: B},
    {path: '/a', component: A, meta: {title: 'A'}}
]
const router = new Route({
    routes
})

console.log('router', router)

//方法二：
// Vue.mixin({
//     beforeCreate() {
//         console.log(this.$router, this.$route)
//         this.$route.meta.title && (document.title = this.$route.meta.title)
//         !this.$route.meta.title && ( document.title = this.$route.meta.title)
//     }
// })

router.beforeEach((to, from, next) => {
    console.log('beforeEach', to, from)
    // 方法一：
    to.meta.title && (document.title = to.meta.title)
    !to.meta.title && (document.title = 'default')

    next()
})

router.beforeResolve((to, from, next) => {
    console.log('beforeResolve', to, from)
    next()
})

router.afterEach((to, from) => {
    console.log('afterEach', to, from)
})

export default router
