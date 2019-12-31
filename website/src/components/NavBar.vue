<template>
    <nav class="navbar navbar-expand navbar-light bg-light" id="navbar">
        <ul class="navbar-nav mr-auto">
            <li
            v-for="link in data.links" 
            :key="link.target.id"
            v-editable="link"
            class="nav-item">
                <nuxt-link class="nav-link" :to="`/${link.target.cached_url}`">{{ link.label }}</nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    props: ['data']
}
</script>

<style>

</style>