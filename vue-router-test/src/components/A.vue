<template>
    <div>
        Component A
        <button @click="addRoute">AddRoutes</button>
        <router-link to="/b">to Component B</router-link>
    </div>
</template>

<script>
    import B from "./B";

    export default {

        methods: {
            addRoute() {
                this.$router.addRoutes([
                    {path: '/b', component: B}
                ])
            },
        },

        beforeCreate() {
            console.log('before create')
        },
        created() {
            console.log('created')
        },
        beforeMount() {
            console.log('before mount')
        },
        mounted() {
            console.log('mounted')
        },
        beforeRouteEnter(to, from, next) {
            // 不能获取组件实例 `this`
            console.log('beforeRouteEnter', to, from)
            next()
        },
        beforeRouteUpdate(to, from, next) {
            console.log('beforeRouteUpdate', to, from)
            next()
        },
        beforeDestroy() {
            console.log('beforeRouterDestroy')
        },
        beforeRouteLeave(to, from, next) {
            console.log('beforeRouteLeave', to, from)
            next()
        }
    }
</script>

<style scoped>

</style>
