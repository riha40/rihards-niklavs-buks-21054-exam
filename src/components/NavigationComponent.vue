<script>
export default {
    name: "NavigationComponent",
    data(){
        return {routes: [{path: '/albums', component: 'Albums'}, {path: '/', component: 'Songs'}, {path: '/about', component: 'About'}]}
    }
    
}
</script>
<template>
    <nav id="nav-main" class="wrapper-navigation">
        <ol>
            <li v-for="router in routes">
                <RouterLink :to="{path: router.path}">{{router.component}}</RouterLink>
            </li>
        </ol>
    </nav>
</template>