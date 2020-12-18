import Vue from 'vue'
import Route from 'vue-router'
import HelloWorld from './components/HelloWorld'

Vue.use(Route)
const routes = [
    { path: '/hello-world', component: HelloWorld }
]
const router = new Route({
    routes
})

export default router
